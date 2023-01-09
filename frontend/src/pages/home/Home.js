import React, { useState } from 'react'
import { 
    Box,
    TextField, 
    Paper,
    Button 

} from '@mui/material';
 import {sendDataToDb} from '../../routes/sendToDatabase'

function Home() {
const [formValues, setFormValues] = useState({
    title: '',
    imgUrl: '',
})

const getValueOnChange = (e) => {

  setFormValues( prevValues => {
    return {...prevValues,[e.target.name]: e.target.value}
  })
  console.log(formValues.imgUrl);

}

  
  return (
    <Box sx={{display: 'flex', justifyContent:'center', m: 2,}}> 
    <Box component="form" sx={{width: '250px', height: '250px', display: 'flex', textAlign: 'center', m: 2}}>
        <Paper>
        <TextField sx={{m: 1}} name='title' type='text' onChange={getValueOnChange} id="Title" label="Title" variant="outlined" />
        <TextField sx={{m: 1}} name='imgUrl' onChange={getValueOnChange}  id="Img-field" label="Img-url" variant="outlined" />
        <Button variant="contained" onClick={() => (sendDataToDb(formValues.title, formValues.imgUrl))}>Submit</Button>
        </Paper>
      </Box>
    </Box>
  )
}

export default Home