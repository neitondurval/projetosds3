import BarChart from "components/BarChart/Index";
import DataTable from "components/DataTable/Index";
import DonutChart from "components/DonutChart/Index";
import Footer from "components/Footer/Index";
import NavBar from "components/NavBar/Index";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
              <div className="col-sm-6">
                  <h5 className="text-center text-secondary">Taxa de Sucesso(%)</h5>
                  <BarChart />

              </div>

          <div className="row px-3">
              <div className="col-sm-6">
              <h5 className="text-center text-secondary">Todas as Vendas</h5>
                  <DonutChart />

              </div>

          </div>
          
          </div>
          <div className="py-3">
            <h2 className="text-primary">Todas Vendas </h2>
          </div>

        <DataTable />
      </div>
    <Footer />
    </>
  );
}

export default App;
