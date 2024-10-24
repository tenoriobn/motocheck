import { Table } from "../../../common/styles/tableStyle";

export default function TableManutencaoCorretiva() {
  return (
    <Table>
      <thead>
        <tr>
          <th><b>ID</b></th>
          <th><b>Nome</b></th>
          <th><b>%</b></th>
          <th><b>Telefone</b></th>
          <th><b>Tipo</b></th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Jose Aprecido</td>
          <td>10</td>
          <td>1198940033</td>
          <td><span className="status status__active">Ativo</span></td>
          <td>
            <div className="button__container">
              <button
                className="button button__view"
              >
                <i className="fas fa-eye"></i> VER
              </button>
              <a className="button button__edit">
                <i className="fas fa-edit"></i> Editar
              </a>
            </div>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>Jose Aprecido</td>
          <td>10</td>
          <td>1198940033</td>
          <td><span className="status status__inactive">Inativo</span></td>
          <td>
            <div className="button__container">
              <button
                className="button button__view"
              >
                <i className="fas fa-eye"></i> VER
              </button>
              <a className="button button__edit">
                <i className="fas fa-edit"></i> Editar
              </a>
            </div>
          </td>
        </tr>

        <tr>
          <td>3</td>
          <td>Jose Aprecido</td>
          <td>10</td>
          <td>1198940033</td>
          <td><span className="status status__maintenance">Manutenção</span></td>
          <td>
            <div className="button__container">
              <button
                className="button button__view"
              >
                <i className="fas fa-eye"></i> VER
              </button>
              <a className="button button__edit">
                <i className="fas fa-edit"></i> Editar
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}
