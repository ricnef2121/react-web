import { makeStyles,withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const CustomTextField = withStyles({
    root: {
      whiteSpace:'initial',
      '& label.Mui-focused': {
        color: '#3889c9',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#3889c9',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#c4c4c4',
        },
        '&:hover fieldset': {
          borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#3889c9',
        },
      },
    },
  })(TextField);


const styles=  makeStyles(theme => ({
    root:{ 
        flexGrow: 1,     
        flexWrap: 'wrap',   
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      //  backgroundColor:'blue'
      },
      form:{
        '& .MuiTextField-root': {
               margin: theme.spacing(1),               
               alignItems:'center',
               justifyItems:'center',
               flexGrow: 1,
               paddingRight:'-5px !important',
               marginRight:'0px !important',
               //paddingLeft:'5px !important',
               marginLeft:'20px !important',
               flexWrap:'initial'
              },
      },
      fieldCustom:{       
         whiteSpace:'initial',  
        // paddingRight:'15px !important'
                       
      },
      gridOverflow:{     
        //display:'flex',
        overflowX:'hidden !important',
        //backgroundColor:'green',
        padding:'0px !important',
        margin:'0px !importan'
        //padding:'5px !important'
      }
}))


export {    
    CustomTextField,
    styles
} 