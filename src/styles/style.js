import {makeStyles} from '@material-ui/core/styles';


export const useStyles=makeStyles(
    {
        root:{
            color:"white",
            backgroundColor:"#696969",
        },
        text:
        {
            color:"white"
        },
        infected:
        {
            color:"blue"
        },
        recovered:{
            color:"#7CFC00"
        },
        deaths:
        {
            color:"red"
        }
    }
);