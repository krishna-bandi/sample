import axios from 'axios';

const url= 'https://covid19.mathdro.id/api';

export const fetchData =async(country) =>
{
   
     let changeUrl=url;
    if(country && country!='global')
    {
        changeUrl=`${url}/countries/${country}`;
    }
    try {
        const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeUrl);
           
        return {
        
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        };
        
    } catch (error) {
        console.log(error);
    }
}
   
export const fetchDailyData = async() =>
    {
        try {
            const { data } =await axios(`${url}/daily`);
            const modifiedData =data.map((dailyData)=>({
                confirmed : dailyData.confirmed,
                deaths : dailyData.deaths,
                date : dailyData.reportDate,
            })
            );
          
           // console.log(modifiedData);
            return modifiedData;
        } catch (error) {
            
        }
    }


export const fetchCountry= async() =>
{
    try {
        
        const {data : { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        
    }
}



