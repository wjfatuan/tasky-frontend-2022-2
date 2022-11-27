import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import {Typography, Button, TextField} from '@mui/material';
import Grid from '@mui/material/Grid';
import {FormControlLabel, FormLabel, RadioGroup, Radio} from '@mui/material';
import axios from 'axios';


class CrearEtiquetaPage extends React.PureComponent {  
  constructor(props) {
    super(props);
    this.state = (" ")
  }

  handleCreacion(i){
    console.log("Se ha creado el registro "+i);
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/etiquetas').then((res) => {
      const etiquetas = res.data;
      this.setState({ etiquetas });
    });
  }
  
  render() {   
    return (
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2} maxWidth="sm">
          
          <Grid item xs={12}>
            <Typography variant="h3" color="inherit" component="h1">
              Crea una etiqueta
            </Typography>
          </Grid>
          
          <Grid item xs={12}>
            <TextField id="outlined-basic" fullWidth="true" label="Nombre" variant='outlined' required />
          </Grid>
          
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Azul"
                name="radio-buttons-group"
              >
                <FormControlLabel value="Azul" control={<Radio />} label="Azul" />
                <FormControlLabel value="Rojo" control={<Radio />} label="Rojo" />
                <FormControlLabel value="Verde" control={<Radio />} label="Verde" />
                <FormControlLabel value="Amarillo" control={<Radio />} label="Amarillo" />
              </RadioGroup>
            </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <Button variant="contained" fullWidth="true" href="/home" onClick={()=> this.handleCreacion(i)}>
              Crear
            </Button>
          </Grid>
        
        </Grid>
      </Box>
    );
  }
}

export default CrearEtiquetaPage;