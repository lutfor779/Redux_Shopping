import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import AllProducts from './pages/Products/AllProducts/AllProducts';
import TargetProduct from './pages/Products/TargetProduct/TargetProduct';
import NotFound from './pages/Shared/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';
import AddProduct from './pages/AdminPanel/AddProduct/AddProduct';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="products/product/:productId" element={<TargetProduct />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
