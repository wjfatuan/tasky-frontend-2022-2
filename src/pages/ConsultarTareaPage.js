import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
class ConsultarTareaPage extends React.PureComponent {
  render() {
    return (
      <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <Grid container spacing={1} maxWidth="sm">
          <Grid item xs={12}>
            <Typography variant="h3" color="inherit" component="h1">
              Consultar Tarea
            </Typography>
          </Grid>
          <Grid inten xs={8}>
            <TextField id="outlined-basic" fullWidth="true" label="Buscar tarea" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth="true" href="/EditarTarea">
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Box>    
    );
  }
}

export default ConsultarTareaPage;
