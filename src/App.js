import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ProductSearch from "./pages/searchproduct";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="Navbar">
          <ul className="Nav-links">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/searchproduct">Search Product</Link>
            </li>
          </ul>
        </nav>

        <header className="App-header">
          <h1>Traceit webpage</h1>
        </header>

        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/searchproduct" element={<ProductSearch />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
