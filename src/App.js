import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Route, Routes } from "react-router";
import { SingleUser } from "./components/SingleUser/SingleUser";
import { SingleRepo } from "./components/SingleRepo/SingleRepo";
import "./App.scss";


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/:user" element={<SingleUser />} />
          <Route path="/:user/:id" element={<SingleRepo />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
