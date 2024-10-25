import { LinkItem, Main } from "src/common/styles/componentStyles";
import Header from "src/components/Header";
import Title from "src/components/Title";
import SearchFilterManutencaoCorretiva from "./SearchFilterManutencaoCorretiva";
import TableManutencaoCorretiva from "./TableManutencaoCorretiva";

export default function ManutencaoCorretiva() {
  return (
    <section>
      <Header>
        <h2>
          <ion-icon name="accessibility-sharp" role="img" class="md hydrated"></ion-icon>
          Manutenção Corretiva
        </h2>
        <LinkItem className="button-new"><i className="fas fa-plus"></i> Novo</LinkItem>
      </Header>

      <Main>
        <Title title="Filtros de Busca" />
        <SearchFilterManutencaoCorretiva />
        <TableManutencaoCorretiva />
      </Main>
    </section>
  )
}
