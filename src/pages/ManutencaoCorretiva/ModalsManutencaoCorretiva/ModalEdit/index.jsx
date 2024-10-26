import { ModalForm } from "../../../../common/styles/modalsStyles";

export default function ModalEdit() {
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
        Editar
        <input
          format="(##) #####-####"
          type="text"
          name="cellphone"
          required
        />
      </label>

      <label htmlFor="porcentagem">
        Editar
        <input
          type="text"
          className="tax"
          name="service_charge"
          id="tax"
        />
      </label>

      <button type="submit">Editar </button>
    </ModalForm>
  );
}
