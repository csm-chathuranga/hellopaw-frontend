
import { Link, useLocation } from "react-router-dom";

function Header() {
    return (
            <>
            <div className="main_header">
                        <div className="custom-container-fluid">
                        <div className="main_top_bar">
                              <h1><figure><img src="/assets/images/logo2.jpg" style={{height:'80px',color:'#ffff'}}/></figure></h1>
                              <ul className="navigation">
                                  <li>
                                  <Link  to={'/'}>Home</Link>
                                    {/* <a href="#"> </a> */}
                                  </li>
                                  <li><a href="#">Pages<i className="fa fa-caret-down"></i></a>
                                    <ul className="sub-menu">
                                      <li><Link  to={'/about'}>About Us</Link></li>
                                      <li><Link  to={'/gallery'}>gallery page</Link></li>
                                    </ul>
                                  </li>
                                  <li><a href="#">Services<i className="fa fa-caret-down"></i></a>
                                    <ul className="sub-menu">
                                    <li><a href="service-grid.html"></a> Service </li>
                                    <li><Link  to={'/service-broading'}> Broading service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Grooming service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Pet training service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Veterinarian service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Pet Cloths service</Link></li>
                                    </ul>
                                  </li>
                                  <li><a href="#">Blog <i className="fa fa-caret-down"></i></a>
                                    <ul className="sub-menu">
                                      <li><Link  to={'/'}>blog sidebar</Link></li>
                                      <li><Link  to={'/'}>blog detail</Link></li>
                                    </ul>
                                  </li>
                                  <li><Link  to={'/contact'}>Contact</Link></li>
                              </ul>
                              <div id="kode-responsive-navigation" className="dl-menuwrapper">
                                <button className="dl-trigger">Open Menu</button>
                                <ul className="dl-menu">
                                  <li><a className="active" href="#">Home</a>
                                    <ul className="dl-submenu">
                                        <li><Link  to={'/'}>main home</Link></li>
                                    </ul>
                                  </li>
                                  <li className="menu-item kode-parent-menu"><a href="#">Pages</a>
                                      <ul className="dl-submenu">
                                        <li><Link  to={'/about'}>About Us</Link></li>
                                        <li><Link  to={'/'}>gallery page</Link></li>
                                        <li><Link  to={'/'}>appointment</Link></li>
                                      </ul>
                                  </li>
                                  <li className="menu-item kode-parent-menu"><a href="#">Services</a>
                                    <ul className="dl-submenu">
                                    <li><a href="service-grid.html"></a> Service </li>
                                    <li><Link  to={'/about'}>About Us</Link></li>
                                    <li><Link  to={'/service-broading'}>  Grooming service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Pet training service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Veterinarian service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Pet Cloths service</Link></li>
                                    </ul>
                                  </li>
                                  <li className="menu-item kode-parent-menu"><a href="#">blog</a>
                                    <ul className="dl-submenu">
                                      <li><Link  to={'/'}>blog sidebar</Link></li>
                                      <li><Link  to={'/'}>blog detail</Link></li>
                                    </ul>
                                  </li>
                                  <li className="menu-item kode-parent-menu"><a href="#">Shop</a>
                                  </li>
                                  <li><Link  to={'/contact'}>Contact Us</Link></li>
                                </ul>
                              </div>
                          <a className="main_button hover-affect" href="https://app.happybaw.com">Login</a>
                              
                          </div>
                        </div>   
                    </div>

                  <div className="main_header fixed">
                  <div className="custom-container-fluid">
                    <div className="main_top_bar">
                          <h1><figure><img src="/assets/images/logo2.jpg" width={50} height={50}/></figure></h1>
                            <ul className="navigation">
                            <li>
                                  <Link  to={'/'}>Home</Link>
                                    {/* <a href="#"> </a> */}
                                  </li>
                              <li><a >Pages<i className="fa fa-caret-down"></i></a>
                                <ul className="sub-menu">
                                    <li><Link  to={'/about'}>About Us</Link></li>
                                    <li><Link  to={'/'}>gallery page</Link></li>
                                </ul>
                              </li>
                              <li><a >Services<i className="fa fa-caret-down"></i></a>
                                <ul className="sub-menu">
                                <li><a href="service-grid.html"></a> Service </li>
                                    <li><Link  to={'/service-broading'}> Broading service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Grooming service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Pet training service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Veterinarian service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Pet Cloths service</Link></li>
                                </ul>
                              </li>
                              <li><a >Blog</a>
                                  <ul className="sub-menu">
                                    <li><Link  to={'/'}>blog sidebar</Link></li>
                                    <li><Link  to={'/'}>blog detail</Link></li>
                                </ul>
                              </li>
                              <li><a > Shop<i className="fa fa-caret-down"></i></a>
                                </li>
                                <li><Link  to={'/contact'}>contact</Link></li>
                          </ul>
                          <div id="responsive-navigation" className="dl-menuwrapper">
                            <button className="dl-trigger">Open Menu</button>
                            <ul className="dl-menu">
                              <li><a className="active" >Home</a>
                                <ul className="dl-submenu">
                                      <li><Link  to={'/'}>main home</Link></li>
                                </ul>
                              </li>
                              <li className="menu-item kode-parent-menu"><a >Pages</a>
                                  <ul className="dl-submenu">
                                      <li><Link  to={'/about'}>About Us</Link></li>
                                      <li><Link  to={'/'}>gallery page</Link></li>
                                  </ul>
                              </li>
                              <li className="menu-item kode-parent-menu"><a >Services</a>
                                <ul className="dl-submenu">
                                <li><a href="service-grid.html"></a> Service </li>
                                    <li><Link  to={'/service-broading'}> Broading service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Grooming service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Pet training service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Veterinarian service</Link></li>
                                    <li><Link  to={'/service-broading'}>  Pet Cloths service</Link></li>
                                </ul>
                              </li>
                              <li className="menu-item kode-parent-menu"><a >blog</a>
                                <ul className="dl-submenu">
                                    <li><Link  to={'/'}>blog sidebar</Link></li>
                                    <li><Link  to={'/'}>blog detail</Link></li>
                                </ul>
                              </li>
                              <li className="menu-item kode-parent-menu"><a >Shop</a>
                              </li>
                              <li><Link  to={'/contact'}>contact</Link></li>
                            </ul>
                          </div>
                          <a className="main_button hover-affect" href="https://app.happybaw.com">Login</a>
                      </div>
                  </div>   
                </div>
            </>
    );
}

export default Header;