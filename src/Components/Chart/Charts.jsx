import React,{useState,useEffect} from 'react';
import {fetchDailyData } from '../../api/index.js'
import {Line , Bar} from 'react-chartjs-2';
import styles from './charts.module.css';


const Chart= ({data:{confirmed,deaths,recovered} , country}) => {
    const [dailyData,setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI =async() =>
        {
        setDailyData(await fetchDailyData());
        } 
        fetchAPI();
    });

      
    //console.log(dailyData.map(({ confirmed }) => confirmed));
    //console.log(dailyData.map(({ date }) => date));
      const lineChart =(
        
          <Line 
          
             data={
                 {
                     labels: dailyData.map(({  date }) => date),
                     datasets:[
                         {
                             
                            data : dailyData.map(({ confirmed }) => confirmed.total),
                            label : 'Infected',
                            borderColor:'blue',
                            fill : true,
                         },
                         
                         
                         {
                             type : 'line',
                            // data : [40,50,60,70,80,90,20,100,50,13,14,80,70],
                            data : dailyData.map(({deaths }) => deaths.total),
                            label : 'Deaths',
                            borderColor:'red',
                            backgroundColor:'rbga(255,0,0,0.5)',
                            fill : true,

                         }
                        ],

                 }
             }

          
          />
        
      );
      const barChart=(
          confirmed
          ?(
              <Bar
                 data={
                     {
                           
                        labels:['Infected','Recovered','Deaths'],
                        datasets:[
                            {
                                label:'People',
                                backgroundColor:[
                                    'rgb(0,0,255)',
                                    'rgb(0,255,0)',
                                    'rgb(255,0,0)',
                                ],
                                data:[confirmed.value,recovered.value,deaths.value]
                            }
                        ]
                     }
                 }
                 options={
                     {
                         legend:{display :false},
                         title:{display:true,text:`Current state in ${country}`},
                     }
                 }

              />
              
          ): null
      );

    return(
        <div className={styles.container}  >
             {country ? barChart : lineChart}
           

        </div>
    );

};
export default Chart;