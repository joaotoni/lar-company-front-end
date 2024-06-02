import CardBox from "../../common/components/form/CardBox";
import Dashboard from "../../common/components/layout/DashBoard";

export default function Home() {

  return (
    <Dashboard>
      <section className="flex gap-4 mt-14 justify-center">
        <CardBox
          title="Cadastrar uma nova pessoa"
          buttonText="Cadastre Aqui"
          navigateTo="/cadastro-de-pessoa"
        />
        <CardBox
          title="Ver lista de pessoas cadastradas"
          buttonText="Visualizar lista"
          navigateTo="/create-phone"
        />
        <CardBox
          title="Cadastrar um novo telefone"
          buttonText="Cadastre Aqui"
          navigateTo="/create-phone"
        />
      </section>
    </Dashboard>
  )
}