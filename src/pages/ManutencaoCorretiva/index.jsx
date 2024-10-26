import { LinkItem, Main } from "src/common/styles/componentStyles";
import Header from "src/components/Header";
import { useSetRecoilState } from "recoil";
import { stateOpenModal } from "src/store/atom";
import Title from "src/components/Title";
import SearchFilterManutencaoCorretiva from "./SearchFilterManutencaoCorretiva";
import TableManutencaoCorretiva from "./TableManutencaoCorretiva";
import ModalsManutencaoCorretiva from "./ModalsManutencaoCorretiva";

export default function ManutencaoCorretiva() {
  const setOpenModal = useSetRecoilState(stateOpenModal);

  return (
    <section>
      <Header>
        <h2>
          <ion-icon name="accessibility-sharp" role="img" class="md hydrated"></ion-icon>
          Manutenção Corretiva
        </h2>
        
        <LinkItem className="button-new" onClick={() => setOpenModal('new')}>
          <i className="fas fa-plus"></i> Novo
        </LinkItem>
      </Header>

      <Main>
        <Title title="Filtros de Busca" />
        <SearchFilterManutencaoCorretiva />
        <TableManutencaoCorretiva />
      </Main>

      <ModalsManutencaoCorretiva />
    </section>
  )
}
