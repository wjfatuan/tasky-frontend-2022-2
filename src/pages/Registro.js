import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

class RegistroPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
      usuario: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { usuario, password } = this.state;
    // use axios to call the api
    axios.post('http://localhost:8080/api/v1/usuarios/', { // Cambie la URL por la del API que desea usar, p.e. /usuarios
      nombreUsuario: usuario,
      password,
    })
      .then((response) => { // Acá puede procesar el resultado
        console.log(response);
        // change state
        this.setState({ isRegistered: true });
      })
      .catch((error) => { // Acá puede controlar cualquier error
        console.log(error);
      });
  };

  render() {
    const { isRegistered } = this.state;
    return (
      <>
        {isRegistered && (<Navigate to="/home" />)}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          component="form"
          onSubmit={this.handleSubmit}
        >
          <Grid container spacing={2} maxWidth="sm">
            <Grid item xs={12}>
              <Typography variant="h3" color="inherit" component="h1">
                Registro
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth="true"
                variant="outlined"
                name="usuario"
                label="Correo electrónico"
                onChange={this.handleInputChange}
                value={this.state.usuario}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth="true"
                variant="outlined"
                type="password"
                name="password"
                label="Contraseña"
                onChange={this.handleInputChange}
                value={this.state.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth="true" type="submit">
                Registro
              </Button>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default RegistroPage;
