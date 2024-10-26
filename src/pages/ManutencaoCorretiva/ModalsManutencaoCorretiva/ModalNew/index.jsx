import { ModalForm } from "../../../../common/styles/modalsStyles";

export default function ModalNew() {
  const handleSaveChanges = async (event) => {
    event.preventDefault();

    try {
      // lógica aqui

    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <ModalForm id="frmAddPack" onSubmit={handleSaveChanges}>
      <label htmlFor="frm_add_price">
        Telefone do Afiliado
        <input
          format="(##) #####-####"
          type="text"
          name="cellphone"
          required
        />
      </label>

      <label htmlFor="porcentagem">
        Porcentagem
        <input
          type="text"
          className="tax"
          name="service_charge"
          id="tax"
        />
      </label>

      <label htmlFor="frm_add_most_popular">
        Mais Popular
        <select 
          id="frm_add_most_popular" 
          name="type"
        >
          <option value="afiliado">Afiliado</option>
        </select>
      </label>
      
      <button type="submit">Adicionar</button>
    </ModalForm>
  );
}
