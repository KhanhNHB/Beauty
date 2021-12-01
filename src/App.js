import './App.css';
import {
  Checkout,
  Detail,
  Header,
  Home
} from './components';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route
            path="/detail"
            element={<Detail />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
