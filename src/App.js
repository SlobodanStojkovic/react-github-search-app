import { Routes, Route, Navigate } from "react-router";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { SingleUser } from "./components/SingleUser/SingleUser";
import { SingleRepo } from "./components/SingleRepo/SingleRepo";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/:user" element={<SingleUser />} />
        <Route path="/:user/:id" element={<SingleRepo />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
