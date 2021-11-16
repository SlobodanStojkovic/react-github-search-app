import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import Search from "./components/Search/Search";
import { Navigate, Route, Routes } from "react-router";
import "./App.scss";
import { SingleUser } from "./components/SingleUser/SingleUser";



function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <Header />
      <Search setSearchResults={setSearchResults} />
      <Routes>
        <Route path="/home" element={<Main searchResults={searchResults} />} />
        <Route path="/:user" element={<SingleUser />} />
        <Route path="/" element={<Navigate to="home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
