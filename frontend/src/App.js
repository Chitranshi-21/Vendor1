import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import VendorSigninScreen from './screens/VendorSigninScreen';
import VendorRegisterScreen from './screens/VendorRegisterScreen';
import { useSelector } from 'react-redux';
function App() {

  const userSignin = useSelector(state=>state.userSignin);
  const { userInfo } = userSignin;
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
  <BrowserRouter>
    <div id="root">
         <div className="grid-container">
<header className="header">
<div className="brand">
 <button onClick={openMenu}>
   &#9776;
 </button>
<Link to ="/">Vendor Management</Link>
</div>
<div className="header-links">
 <a href="cart.html">Cart</a>
 {
   userInfo && <Link to="/profile">{userInfo.name}</Link>
 }
 <Link to="/signIn">Sign In</Link>
</div>
</header>
<aside className="sidebar">
<h3>Shopping Categories</h3>
<button className="sidebar-close-button" onClick={closeMenu}>x</button>
<ul className="categories">
 <li>
 <Link to="/category/Pants">Deturgant</Link>
 </li>

 <li>
 <Link to="/category/Shirts">Washing Soap</Link>
 </li>
</ul>
</aside>
<main className="main">
<div className="content">
<Route path="/signIn" component={SigninScreen}/>
<Route path="/vendorSignin" component={VendorSigninScreen}/>
<Route path="/products/:id" component={ProductScreen} />
<Route path="/" exact={true} component={HomeScreen} />
<Route path="/register" component={RegisterScreen}/>
<Route path="/vendorRegister" component={VendorRegisterScreen}/>
</div>
</main>
<footer className="footer">
All right reserved.
</footer>
</div>
</div>
</BrowserRouter>
  );
}
export default App;
