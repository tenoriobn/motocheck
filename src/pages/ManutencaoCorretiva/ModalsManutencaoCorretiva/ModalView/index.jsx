import { ModalViewInfoContainer } from "../../../../common/styles/modalsStyles";

export default function ModalView() {
  return (
    <ModalViewInfoContainer>
      <tbody>
        <tr>
          <td className="maintenance__info-title">ID:</td>
          <td><p name="pedidoID" id="pedidoID">3852</p></td>
        </tr>
        <tr>
          <td className="maintenance__info-title">Data: </td>
          <td><p name="pedidoData" id="pedidoData">26/10/24 03:57:56</p></td>
        </tr>
        <tr>
          <td className="maintenance__info-title">Modelo: </td>
          <td><p name="pedidoCustomer" id="pedidoCustomer">YAMAHA MT-07</p></td>
        </tr>

        <tr>
          <td className="maintenance__info-title">Status:</td>
          <td>
            <span
              className={`status status__maintenance`}
            >
              Manutenção
            </span>
          </td>
        </tr>

        <tr>
          <td className="maintenance__info-title">Descrição: </td>
          <td>
            <div className="maintenance__description">Descrição da manutenção grande para que seja possível 
              testar e ver como está a disposição dos elementos. Assim, podendo ser realizado
              ajustes pontuais Descrição da manutenção grande para que seja possível 
              testar e ver como está a disposição dos elementos. Assim, podendo ser realizado
              ajustes pontuais
            </div>
          </td>
        </tr>
      </tbody>
    </ModalViewInfoContainer>
  );
}
