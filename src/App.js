import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import UsersOrder from './pages/Dashboard/Orders/UsersOrder/UsersOrder';
import Payment from './pages/Dashboard/Payment/Payment';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';


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

          <Route path="dashboard" element={<DashboardHome />} >

            <Route path="usersOrder" element={
              <PrivateRoute>
                <UsersOrder />
              </PrivateRoute>} />

            <Route path="payment" element={<Payment />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
