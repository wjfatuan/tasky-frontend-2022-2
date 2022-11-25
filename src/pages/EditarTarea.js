import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

class EditarTareaPage extends React.PureComponent {
  render() {
    return (
      <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <Grid container spacing={1} maxWidth="sm">
          <Grid item xs={12}>
            <Typography variant="h3" color="inherit" component="h1">
              Editar Tarea 
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" fullWidth="true" label="Nombre de la tarea" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" fullWidth="true" label="Usuario" variant="outlined"  />
          </Grid>
          <Grid item xs ={12}>
            <FormControl sx={{ m: 1, minWidth: 70 }}>
              <InputLabel htmlFor="grouped-native-select">Estado</InputLabel>
              <Select native defaultValue="" id="grouped-native-select" label="estado">
                <option aria-label="None" value="" />
                <option value={1}>Pendiente</option>
                <option value={2}>Por hacer</option>
                <option value={3}>En progreso</option>
                <option value={4}>Terminada</option>
                <option value={5}>No Terminada</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <h4>
              Fecha de finalizacion
            </h4>
          </Grid>
          <Grid item xs={12}>
            <div>
              <FormControl sx={{ m: 1, minWidth: 50 }}>
                <InputLabel htmlFor="grouped-native-select">Dia</InputLabel>
                <Select native defaultValue="" id="grouped-native-select" label="Dia">
                  <option aria-label="None" value="" />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={15}>14</option>
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>
                  <option value={19}>19</option>
                  <option value={20}>20</option>
                  <option value={21}>21</option>
                  <option value={22}>22</option>
                  <option value={23}>23</option>
                  <option value={24}>24</option>
                  <option value={25}>25</option>
                  <option value={26}>26</option>
                  <option value={27}>27</option>
                  <option value={28}>28</option>
                  <option value={29}>29</option>
                  <option value={30}>30</option>
                  <option value={31}>31</option>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel htmlFor="grouped-native-select">Mes</InputLabel>
                <Select native defaultValue="" id="grouped-native-select" label="Mes">
                  <option aria-label="None" value="" />
                  <option value={1}>Enero</option>
                  <option value={2}>Febrero</option>
                  <option value={3}>Marzo</option>
                  <option value={4}>Abril</option>
                  <option value={5}>Mayo</option>
                  <option value={6}>Junio</option>
                  <option value={7}>Julio</option>
                  <option value={8}>Agosto</option>
                  <option value={9}>Septiembre</option>
                  <option value={10}>Octubre</option>
                  <option value={11}>Nobiembre</option>
                  <option value={12}>Diciembre</option>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 70 }}>
                <InputLabel htmlFor="grouped-native-select">Año</InputLabel>
                <Select native defaultValue="" id="grouped-native-select" label="Anio">
                  <option aria-label="None" value="" />
                  <option value={1}>2022</option>
                  <option value={2}>2023</option>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth="true" href="/Home">
              Editar Tarea
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
export default EditarTareaPage;
