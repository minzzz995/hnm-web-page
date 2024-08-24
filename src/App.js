import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import LoginPage from './page/LoginPage';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


// 1. 전체상품페이지, 로그인페이지, 상품상세페이지
  // 1-1. NavBar생성하기
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있음
// 3. 로그인 버튼을 누르면 로그인 페이지가 나옴
// 4. 상품 디테일을 눌렀으나, 로그인이 안되어있을 경우엔 로그인 페이지가 먼저 나옴
// 5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있음
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다
// 7. 로그아웃이 되면 상춤 디테일 페이지를 볼 수 없다, 다시 로그인 페이지가 보임
// 8. 로그인을 하면 로그아웃이 보이고 로그아웃응ㄹ 하면 로그인이 보임
// 9. 상품을 검색할 수 있음

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(()=>{
    console.log("Authentication status:",authenticate);
  },[authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
};

export default App;