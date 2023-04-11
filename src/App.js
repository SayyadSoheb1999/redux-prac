import { Home } from "./Components/Home";
// import {EmpData} from './Components/EmpData/EmpData';
import One from "./Components/InputSuggession/One";
import "./App.css";
import { AuthProvider } from "./context/ContextHolder";
import { QuotesPage } from "./Components/Models/quotesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Models/header";
import { Footer } from "./Components/Models/footer";
import { Loader } from "./Components/loader/Loader";
function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <EmpData/> */}
          <Route path="/" Component={QuotesPage} />
          <Route path="/home" Component={Home} />
          <Route path="/one" Component={One} />
          <Route path="/loader" Component={Loader} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
