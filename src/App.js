import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './pages/ProductAll';
import ProductDetail from './pages/ProductDetail';
import Navbar from './component/Navbar';
/* import { PrivateRoute } from './Route/PrivateRoute'; */
import { useAuthContext } from './hooks/useAuthContext';
import { Signup } from './pages/Signup';
import {Login} from './pages/Login'
/* 
  1. 전체상품페이지/상세페이지/로그인
  2. 전체 상품 페이지에서는 모든 유저 사용가능
  3-1. 로그인 버튼을 누르면 로그인 페이지 나온다.
  3-2. 상품상세페이지에서 상품을 클릭하면 로그인이 안되어있을 경우 로그인 페이지로 이동
  4. 로그인 상태-> 상품 디테일 페이지 볼 수 있다.
  5. 로그아웃 버튼 -> 로그아웃
  6. 상품검색 
*/
function App() {
  const { user } = useAuthContext();

  return (
    <div className="wrap">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id"
          element={user ? <ProductDetail /> : <Navigate replace={true} to="/login" />} />

        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />} />
        <Route path ="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
