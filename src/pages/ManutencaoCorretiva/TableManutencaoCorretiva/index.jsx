import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import { Table } from "src/common/styles/tableStyle";
import { stateAllCorrectiveMaintenances } from "src/store/atom.js";
import { formatDateToBRL } from "src/hooks/formatters/formatDateToBRL";

export default function TableManutencaoCorretiva() {
  const allCorrectiveMaintenances = useRecoilValue(stateAllCorrectiveMaintenances);

  useEffect(() => {
    console.log('allCorrectiveMaintenances', allCorrectiveMaintenances)
  }, [allCorrectiveMaintenances]);

  return (
    <>
      {allCorrectiveMaintenances.length > 0 &&
        <Table>
          <thead>
            <tr>
              <th>#</th>
              {/* <th>ID</th> */}
              {/* <th>Descrição</th> */}
              <th>Modelo</th>
              <th>Placa</th>
              <th>Agendamento</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>

            {allCorrectiveMaintenances.map((maintenance) => (
              <tr key={maintenance.id}>
                <td>{maintenance.id}</td>
                {/* <td>{maintenance.idVeiculo}</td> */}
                {/* <td>{maintenance.descricaoManutencao}</td> */}
                <td>{maintenance.modelo}</td>
                <td>{maintenance.placa}</td>
                <td>{formatDateToBRL(maintenance.dataManutencao)}</td>
                <td>
                  <span 
                    className={`status status__${maintenance.statusVeiculo === "Manutenção" 
                      ? "maintenance" : maintenance.statusVeiculo === "Disponivel"? "inactive" : "active"
                    }`}
                  >
                    {maintenance.statusVeiculo}
                  </span>
                </td>
                <td>
                  <div className="button__container">
                    <button className="button button__view">
                      <i className="fas fa-eye"></i> Ver
                    </button>
                    <button className="button button__edit">
                      <i className="fas fa-edit"></i> Editar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      }
    </>
  )
}
