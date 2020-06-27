import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './style.css';
import "bootstrap/dist/css/bootstrap.css";



export default class Home extends Component {
    render() {
      const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
      };
      const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
      };
      
        return (
            <div>
               <BrowserRouter>
                    <div class="grid-container">
        <header class="header">
          <div class="brand">
            <button onclick="openMenu()">
              &#9776;
            </button>
            <a href="index.html">Vendor Management</a>
          </div>
          <div class="header-links">
            <a href="cart.html">Cart</a>
            <a href="/login">Sign In</a>
          </div>
        </header>
        <aside class="sidebar">
          <h3>Shopping Categories</h3>
          <button class="sidebar-close-button" onclick="closeMenu()">x</button>
          <ul className="categories">
            <li>
            <Link to="/category/Pants">Pants</Link>
            </li>
    
            <li>
            <Link to="/category/Shirts">Shirts</Link>
            </li>
          </ul>
        </aside>
        <main class="main">
          <div class="content">
            <ul class="products">
              <li>
                <div class="product">
                  <img class="product-image" src="/img/1.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Washing Deturgant</a>
                  </div>
                  <div class="product-brand">Surf Excel</div>
                  <div class="product-price">20 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/2.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Washing Deturgant</a>
                  </div>
                  <div class="product-brand">Surf Excel</div>
                  <div class="product-price">50 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/3.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Washing Deturgant</a>
                  </div>
                  <div class="product-brand">Rin</div>
                  <div class="product-price">60 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/4.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Washing Deturgant</a>
                  </div>
                  <div class="product-brand">Active</div>
                  <div class="product-price">40 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/5.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Body Soap</a>
                  </div>
                  <div class="product-brand">Lux</div>
                  <div class="product-price">30 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/6.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Body Soap</a>
                  </div>
                  <div class="product-brand">Dettol</div>
                  <div class="product-price">40 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/7.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Body Soap</a>
                  </div>
                  <div class="product-brand">Dove</div>
                  <div class="product-price">50 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/8.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Body Soap</a>
                  </div>
                  <div class="product-brand">Neustar</div>
                  <div class="product-price">20 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/9.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Deturgant Soap</a>
                  </div>
                  <div class="product-brand">Ghadi</div>
                  <div class="product-price">10 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/10.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Toothpaste</a>
                  </div>
                  <div class="product-brand">Patanjali</div>
                  <div class="product-price">60 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/11.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Deturgant Soap</a>
                  </div>
                  <div class="product-brand">Rin</div>
                  <div class="product-price">50 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/12.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Deturgant Soap</a>
                  </div>
                  <div class="product-brand">Fena</div>
                  <div class="product-price">30 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/13.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Sun Flower Oil</a>
                  </div>
                  <div class="product-brand">Fortune</div>
                  <div class="product-price">160 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/16.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Sun Flower Oil</a>
                  </div>
                  <div class="product-brand">Dalda</div>
                  <div class="product-price">60 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div class="product">
                  <img class="product-image" src="/img/15.jpg" alt="product" />
                  <div class="product-name">
                    <a href="product.html">Soyabeen Oil</a>
                  </div>
                  <div class="product-brand">Mahakosh</div>
                  <div class="product-price">90 Rs.</div>
                  <div class="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
            </ul>
          </div>
        </main>
        <footer class="footer">
          All right reserved.
        </footer>
      </div>
  
      </BrowserRouter>
            </div>
        )
    }
}
