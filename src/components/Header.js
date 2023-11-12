
import { Link, useLocation } from "react-router-dom";

function Header() {
    return (
            <>
            <div className="main_header">
                        <div className="custom-container-fluid">
                        <div className="main_top_bar">
                              <h1><figure><img src="/assets/images/logo.png" style={{height:'80px',color:'#ffff'}}/></figure></h1>
                              <ul className="navigation">
                                  <li>
                                  <Link  to={'/'}>Home</Link>
                                    {/* <a href="#"> </a> */}
                                  </li>
                                  <li><a href="#">Pages<i className="fa fa-caret-down"></i></a>
                                    <ul className="sub-menu">
                                      <li><a href="about-us.html">about us</a></li>
                                      <li><a href="gallery.html">gallery page</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="#">Services<i className="fa fa-caret-down"></i></a>
                                    <ul className="sub-menu">
                                    <li><a href="service-grid.html"></a> Service </li>
                                    <li><a href="service-grid02.html"> Broading service</a></li>
                                    <li><a href="service-grid02.html"> Grooming service</a></li>
                                    <li><a href="service-grid03.html"> Pet training service</a></li>
                                    <li><a href="service-detail.html"> Veterinarian service</a></li>
                                    <li><a href="service-detail.html"> Pet Cloths service</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="#">Blog <i className="fa fa-caret-down"></i></a>
                                    <ul className="sub-menu">
                                      <li><a href="blog-post-sidebar.html">blog sidebar</a></li>
                                      <li><a href="blog-detail.html">blog detail</a></li>
                                    </ul>
                                  </li>
                                  {/* <li><a href="#"> Shop<i className="fa fa-caret-down"></i></a>
                                    <ul className="sub-menu">
                                      <li><a href="shop-page.html">shop page</a></li>
                                      <li><a href="shop-detail.html">Shop detail</a></li>
                                    </ul>
                                    </li> */}
                                  <li><Link  to={'/contact'}>Contact</Link></li>
                              </ul>
                              <div id="kode-responsive-navigation" className="dl-menuwrapper">
                                <button className="dl-trigger">Open Menu</button>
                                <ul className="dl-menu">
                                  <li><a className="active" href="#">Home</a>
                                    <ul className="dl-submenu">
                                        <li><a href="index.html">main home</a></li>
                                        {/* <li><a href="index-02.html">Home 02</a></li> */}
                                    </ul>
                                  </li>
                                  <li className="menu-item kode-parent-menu"><a href="#">Pages</a>
                                      <ul className="dl-submenu">
                                        <li><a href="about-us.html">about us</a></li>
                                        {/* <li><a href="team-page.html">team page</a></li>
                                        <li><a href="team-detail.html">team detail</a></li> */}
                                        <li><a href="gallery.html">gallery page</a></li>
                                        {/* <li><a href="gallery01.html">gallery02</a></li> */}
                                        {/* <li><a href="404-page.html">404 page</a></li> */}
                                        <li><a href="appointment.html">appointment</a></li>
                                      </ul>
                                  </li>
                                  <li className="menu-item kode-parent-menu"><a href="#">Services</a>
                                    <ul className="dl-submenu">
                                    <li><a href="service-grid.html"></a> Service </li>
                                    <li><a href="service-grid02.html"> Broading service</a></li>
                                    <li><a href="service-grid02.html"> Grooming service</a></li>
                                    <li><a href="service-grid03.html"> Pet training service</a></li>
                                    <li><a href="service-detail.html"> Veterinarian service</a></li>
                                    <li><a href="service-detail.html"> Pet Cloths service</a></li>
                                    </ul>
                                  </li>
                                  <li className="menu-item kode-parent-menu"><a href="#">blog</a>
                                    <ul className="dl-submenu">
                                        {/* <li><a href="blog-post.html">blog page</a></li>
                                      <li><a href="blog-post-full.html">blog post </a></li> */}
                                      <li><a href="blog-post-sidebar.html">blog sidebar</a></li>
                                      <li><a href="blog-detail.html">blog detail</a></li>
                                    </ul>
                                  </li>
                                  <li className="menu-item kode-parent-menu"><a href="#">Shop</a>
                                    {/* <ul className="dl-submenu">
                                        <li><a href="shop-page.html">shop page</a></li>
                                      <li><a href="shop-detail.html">Shop detail</a></li>
                                    </ul> */}
                                  </li>
                                  <li><a href="contact-us.html">contact Us</a></li>
                                </ul>
                              </div>
                              {/* <a className="main_button hover-affect" href="appointment.html">Book Appointment</a> */}
                          <a className="main_button hover-affect" href="https://app.happybaw.com">Login</a>
                              
                          </div>
                        </div>   
                    </div>

                  <div className="main_header fixed">
                  <div className="custom-container-fluid">
                    <div className="main_top_bar">
                          <h1><figure><img src="/assets/images/top-logo01.png"/></figure></h1>
                            <ul className="navigation">
                              <li>
                              <li><Link  to={'/'}>Home</Link></li>
                                <ul className="sub-menu">
                                    <li><a href="index.html">main home</a></li>
                                  {/* <li><a href="index-02.html">Home 02</a></li> */}
                                </ul>
                              </li>
                              <li><a >Pages<i className="fa fa-caret-down"></i></a>
                                <ul className="sub-menu">
                                    <li><a href="about-us.html">about us</a></li>
                                    {/* <li><a href="team-page.html">team page</a></li>
                                    <li><a href="team-detail.html">team detail</a></li> */}
                                    <li><a href="gallery.html">gallery page</a></li>
                                    {/* <li><a href="gallery01.html">gallery02</a></li> */}
                                    {/* <li><a href="404-page.html">404 page</a></li>
                                    <li><a href="appointment.html">appointment</a></li> */}
                                </ul>
                              </li>
                              <li><a >Services<i className="fa fa-caret-down"></i></a>
                                <ul className="sub-menu">
                                <li><a href="service-grid.html"></a> Service </li>
                                    <li><a href="service-grid02.html"> Broading service</a></li>
                                    <li><a href="service-grid02.html"> Grooming service</a></li>
                                    <li><a href="service-grid03.html"> Pet training service</a></li>
                                    <li><a href="service-detail.html"> Veterinarian service</a></li>
                                    <li><a href="service-detail.html"> Pet Cloths service</a></li>
                                </ul>
                              </li>
                              <li><a >Blog</a>
                                  <ul className="sub-menu">
                                    {/* <li><a href="blog-post.html">blog page</a></li>
                                    <li><a href="blog-post-full.html">blog post </a></li> */}
                                    <li><a href="blog-post-sidebar.html">blog sidebar</a></li>
                                    <li><a href="blog-detail.html">blog detail</a></li>
                                </ul>
                              </li>
                              <li><a > Shop<i className="fa fa-caret-down"></i></a>
                                  {/* <ul className="sub-menu">
                                    <li><a href="shop-page.html">shop page</a></li>
                                    <li><a href="shop-detail.html">Shop detail</a></li>
                                  </ul> */}
                                </li>
                              <li><a href="contact-us.html"> Contact Us</a></li>
                          </ul>
                          <div id="responsive-navigation" className="dl-menuwrapper">
                            <button className="dl-trigger">Open Menu</button>
                            <ul className="dl-menu">
                              <li><a className="active" >Home</a>
                                <ul className="dl-submenu">
                                      <li><a href="index.html">main home</a></li>
                                  {/* <li><a href="index-02.html">Home 02</a></li> */}
                                </ul>
                              </li>
                              <li className="menu-item kode-parent-menu"><a >Pages</a>
                                  <ul className="dl-submenu">
                                      <li><a href="about-us.html">about us</a></li>
                                      {/* <li><a href="team-page.html">team page</a></li> */}
                                      {/* <li><a href="team-detail.html">team detail</a></li> */}
                                      <li><a href="gallery.html">gallery page</a></li>
                                      {/* <li><a href="gallery01.html">gallery02</a></li> */}
                                      {/* <li><a href="404-page.html">404 page</a></li> */}
                                      {/* <li><a href="appointment.html">appointment</a></li> */}
                                  </ul>
                              </li>
                              <li className="menu-item kode-parent-menu"><a >Services</a>
                                <ul className="dl-submenu">
                                <li><a href="service-grid.html"></a> Service </li>
                                    <li><a href="service-grid02.html"> Broading service</a></li>
                                    <li><a href="service-grid02.html"> Grooming service</a></li>
                                    <li><a href="service-grid03.html"> Pet training service</a></li>
                                    <li><a href="service-detail.html"> Veterinarian service</a></li>
                                    <li><a href="service-detail.html"> Pet Cloths service</a></li>
                                </ul>
                              </li>
                              <li className="menu-item kode-parent-menu"><a >blog</a>
                                <ul className="dl-submenu">
                                    {/* <li><a href="blog-post.html">blog page</a></li>
                                    <li><a href="blog-post-full.html">blog post </a></li> */}
                                    <li><a href="blog-post-sidebar.html">blog sidebar</a></li>
                                    <li><a href="blog-detail.html">blog detail</a></li>
                                </ul>
                              </li>
                              <li className="menu-item kode-parent-menu"><a >Shop</a>
                                {/* <ul className="dl-submenu">
                                    <li><a href="shop-page.html">shop page</a></li>
                                    <li><a href="shop-detail.html">Shop detail</a></li>
                                </ul> */}
                              </li>
                              <li><Link  to={'/contact'}>contact</Link></li>
                            </ul>
                          </div>
                          {/* <a className="main_button hover-affect" href="appointment.html">Book Appointment</a> */}
                          <a className="main_button hover-affect" href="https://app.happybaw.com">Login</a>
                      </div>
                  </div>   
                </div>
            </>
    );
}

export default Header;