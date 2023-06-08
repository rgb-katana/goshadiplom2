import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Index from './Pages/Index/Index';
import Authors  from './Pages/Authors/Authors'
import Contacts from './Pages/Contacts/Contacts'
import FunctionsInfoStore from "./Store/FunctionsInfoStore";
import Header from './Components/Header/Header';
import AuthorsStore from './Store/AuthorsStore';
function App() {
  FunctionsInfoStore.loadFunctionsInfo()
  AuthorsStore.loadAuthors()
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
