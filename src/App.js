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
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';
import AddProduct from './pages/Dashboard/AdminPanel/AddProduct/AddProduct';
import AllOrders from './pages/Dashboard/AdminPanel/AllOrders/AllOrders';
import AuthProvider from './context/AuthProvider';
import ManageProducts from './pages/Dashboard/AdminPanel/ManageProducts/ManageProducts';
import Footer from './pages/Shared/Footer/Footer';
import Contact from './pages/Contact/Contact/Contact';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <main style={{ minHeight: "80vh" }}>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<Home />} />
              </Route>
              <Route path="home" element={<Home />} />
              <Route path="products" element={<AllProducts />} />

              <Route path="products/product/:productId" element={
                <PrivateRoute><TargetProduct /></PrivateRoute>
              } />

              <Route path="dashboard" element={<DashboardHome />} >

                <Route path="usersOrder" element={
                  <PrivateRoute><UsersOrder /></PrivateRoute>} />

                <Route path="payment" element={
                  <PrivateRoute><Payment /></PrivateRoute>
                } />

                <Route path="addProduct" element={
                  <AdminRoute><AddProduct /></AdminRoute>
                } />

                <Route path="orders" element={
                  <AdminRoute><AllOrders /></AdminRoute>
                } />

                <Route path="products" element={
                  <AdminRoute><ManageProducts /></AdminRoute>
                } />

              </Route>
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
