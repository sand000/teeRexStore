import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductsListing from './Components/ProductsListing';
import SearchBar from './Components/SearchBar';
import AllRoutes from './AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
