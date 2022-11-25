import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

class ConsultarTareaPage extends React.PureComponent {
  render() {
    return (
      <div>
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
        </FormControl><FormControl sx={{ m: 1, minWidth: 70 }}>
          <InputLabel htmlFor="grouped-native-select">Año</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="Año">
            <option aria-label="None" value="" />
              <option value={1}>2022</option>
              <option value={2}>2023</option>
          </Select>
        </FormControl>
      </div>
      </div>
    );
  }
 
}

export default ConsultarTareaPage;