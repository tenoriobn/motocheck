import { useSearchFilterGerenciarPessoa } from 'src/hooks/gerenciarPessoa/useSearchFilterGerenciarPessoa';
import { ButtonSearchForm, FilterInputContainer, FilterSelectContainer, Form, Label } from 'src/common/styles/formFilterStyles'

export default function SearchFilterGerenciarPessoa() {
  const { filtro, setFiltro, handleSearch } = useSearchFilterGerenciarPessoa();

  return (
    <Form onSubmit={handleSearch} method="POST">
      <FilterInputContainer>
        <Label htmlFor="identifier">Buscar por:</Label>
        <input
          type="text"
          id="identifier"
          name="identifier"
          placeholder="Digite o Nome ou CPF"
          onChange={(e) => setFiltro({ ...filtro, identifier: e.target.value })} 
          value={filtro.identifier || ''}
          autoComplete="off"
          required
        />
      </FilterInputContainer>

      <FilterSelectContainer>
        <Label htmlFor="searchOption">Critério de busca:</Label>
        <select
          id="searchOption"
          name="searchOption"
          value={filtro.searchOption || ''}
          onChange={(e) => setFiltro({ ...filtro, searchOption: e.target.value })} 
          required
        >
          <option value="">Selecione</option>
          <option value="name">Name</option>
          <option value="cpf">CPF</option>
        </select>
      </FilterSelectContainer>

      <ButtonSearchForm type="submit" className="button-search">
        <i className="fas fa-search"></i> Filtrar
      </ButtonSearchForm>
    </Form>
  );
}