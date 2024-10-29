import Modal from "src/components/Modal";
import ModalNew from "./ModalNew";
import ModalView from "./ModalView";
import ModalEdit from "./ModalEdit";
import { useRecoilValue } from "recoil";
import { stateOpenModal } from "src/store/atom";

export default function ModalsGerenciarUsuario() {
  const openModal = useRecoilValue(stateOpenModal);

  return (
    <>
      <Modal title="Adicionar Usuário" openModal={openModal === 'new'}>
        <ModalNew />
      </Modal>

      <Modal title="Detalhes Usuário" maxWidth={{ maxWidth: '400px' }} openModal={openModal === 'view'}>
        <ModalView />
      </Modal>

      <Modal title="Editar Usuário" openModal={openModal === 'edit'}>
        <ModalEdit />
      </Modal>
    </>
  )
}
