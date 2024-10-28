import { useSetRecoilState } from "recoil";
import { ToastContainer } from "react-toastify";
import { stateOpenModal } from "src/store/atom";
import { LinkItem, Main } from "src/common/styles/componentStyles";
import Header from "src/components/Header";
import Title from "src/components/Title";
import SearchFilterGerenciarUsuario from "./SearchFilterGerenciarUsuario";
import TableGerenciarUsuario from "./TableGerenciarUsuario";
import ModalsGerenciarUsuario from "./ModalsGerenciarUsuario";

export default function GerenciarUsuario() {
  const setOpenModal = useSetRecoilState(stateOpenModal);

  return (
    <section>
      <Header>
        <h2>
          <ion-icon name="accessibility-sharp" role="img" class="md hydrated"></ion-icon>
          Gerenciar Usuario
        </h2>
        
        <LinkItem className="button-new" onClick={() => setOpenModal('new')}>
          <i className="fas fa-plus"></i> Novo
        </LinkItem>
      </Header>

      <Main>
        <Title title="Filtros de Busca" />
        <SearchFilterGerenciarUsuario />
        <TableGerenciarUsuario />
      </Main>

      <ModalsGerenciarUsuario />

      <ToastContainer />
    </section>
  )
}
