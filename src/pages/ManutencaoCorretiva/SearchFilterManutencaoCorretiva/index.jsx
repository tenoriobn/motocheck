import { useState } from 'react';
import { ButtonSearchForm, FilterInputContainer, FilterSelectContainer, Form, Label } from '../../../common/styles/formStyles'

export default function SearchFilterManutencaoCorretiva() {
  const [filtro, setFiltro] = useState({});

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    try {
      // lógica aqui
    } catch (error) {
      console.error("There was an error fetching the data!", error);
    }
  };
  
  return (
    <Form onSubmit={handleSubmit} method="POST">
      <FilterInputContainer>
        <Label htmlFor="name">Buscar por:</Label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite a placa ou modelo"
          onChange={(e) => setFiltro({ ...filtro, name: e.target.value })} 
          value={filtro.name || ''}
          autoComplete="off"
          required
        />
      </FilterInputContainer>

      <FilterSelectContainer>
        <Label htmlFor="searchCriteria">Critério de busca:</Label>
        <select
          id="searchCriteria"
          name="searchCriteria"
          required
        >
          <option value="">Selecione</option>
          <option value="plate">Placa</option>
          <option value="model">Modelo</option>
        </select>
      </FilterSelectContainer>

      <ButtonSearchForm type="submit" className="button-search">
        <i className="fas fa-search"></i> Filtrar
      </ButtonSearchForm>
    </Form>
  )
}
