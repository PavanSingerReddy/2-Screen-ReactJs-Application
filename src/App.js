import './App.css';
import Home from "./pages/Home"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./components/Header/Header"
import Show from "./pages/Show"
import Payment from  "./pages/Payment"
function App() {
  return (
      
      <Router>
          <Header />
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/show/:id/:t" element={<Show />}/>
          <Route path="/pay/:imgDir/:img" element={<Payment />}/>
          </Routes>
      </Router>


  );
}

export default App;
