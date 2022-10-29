import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Search from "./components/Search";


function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>

      <Header/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <Search/>
        </div>
        <div className="d-flex">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
