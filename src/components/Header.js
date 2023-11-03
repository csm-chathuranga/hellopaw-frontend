
function Home() {
    return (
<>
<div className="main_top_bar">
                  <h1><figure><img src="images/top-logo.png"/></figure></h1>
                  <ul className="navigation">
                      <li><a href="#">Home <i className="fa fa-caret-down"></i></a>
                        <ul className="sub-menu">
                          <li><a href="index.html">main home</a></li>
                          <li><a href="index-02.html">Home 02</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Pages<i className="fa fa-caret-down"></i></a>
                        <ul className="sub-menu">
                           <li><a href="about-us.html">about us</a></li>
                           <li><a href="team-page.html">team page</a></li>
                           <li><a href="team-detail.html">team detail</a></li>
                           <li><a href="gallery.html">gallery page</a></li>
                           <li><a href="gallery01.html">gallery02</a></li>
                           <li><a href="404-page.html">404 page</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Services<i className="fa fa-caret-down"></i></a>
                        <ul className="sub-menu">
                           <li><a href="service-grid.html">service grid</a></li>
                           <li><a href="service-grid02.html">service 02</a></li>
                           <li><a href="service-grid03.html">service 03</a></li>
                           <li><a href="service-detail.html">service detail</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog <i className="fa fa-caret-down"></i></a>
                         <ul className="sub-menu">
                           <li><a href="blog-post.html">blog page</a></li>
                           <li><a href="blog-post-full.html">blog post </a></li>
                           <li><a href="blog-post-sidebar.html">blog sidebar</a></li>
                           <li><a href="blog-detail.html">blog detail</a></li>
                        </ul>
                      </li>
                      <li><a href="#"> Shop<i className="fa fa-caret-down"></i></a>
                         <ul className="sub-menu">
                           <li><a href="shop-page.html">shop page</a></li>
                           <li><a href="shop-detail.html">Shop detail</a></li>
                         </ul>
                        </li>
                      <li><a href="contact-us.html"> Contact Us</a></li>
                  </ul>
                  <div id="kode-responsive-navigation" className="dl-menuwrapper">
                    <button className="dl-trigger">Open Menu</button>
                    <ul className="dl-menu">
                      <li><a className="active" href="#">Home</a>
                        <ul className="dl-submenu">
                             <li><a href="index.html">main home</a></li>
                             <li><a href="index-02.html">Home 02</a></li>
                        </ul>
                      </li>
                      <li className="menu-item kode-parent-menu"><a href="#">Pages</a>
                          <ul className="dl-submenu">
                             <li><a href="about-us.html">about us</a></li>
                             <li><a href="team-page.html">team page</a></li>
                             <li><a href="team-detail.html">team detail</a></li>
                             <li><a href="gallery.html">gallery page</a></li>
                             <li><a href="gallery01.html">gallery02</a></li>
                             <li><a href="404-page.html">404 page</a></li>
                             <li><a href="appointment.html">appointment</a></li>
                          </ul>
                      </li>
                      <li className="menu-item kode-parent-menu"><a href="#">Services</a>
                        <ul className="dl-submenu">
                            <li><a href="service-grid.html">service grid</a></li>
                           <li><a href="service-grid02.html">service 02</a></li>
                           <li><a href="service-grid03.html">service 03</a></li>
                           <li><a href="service-detail.html">service detail</a></li>
                        </ul>
                      </li>
                      <li className="menu-item kode-parent-menu"><a href="#">blog</a>
                        <ul className="dl-submenu">
                            <li><a href="blog-post.html">blog page</a></li>
                           <li><a href="blog-post-full.html">blog post </a></li>
                           <li><a href="blog-post-sidebar.html">blog sidebar</a></li>
                           <li><a href="blog-detail.html">blog detail</a></li>
                        </ul>
                      </li>
                      <li className="menu-item kode-parent-menu"><a href="#">Shop</a>
                        <ul className="dl-submenu">
                            <li><a href="shop-page.html">shop page</a></li>
                           <li><a href="shop-detail.html">Shop detail</a></li>
                        </ul>
                      </li>
                      <li><a href="contact-us.html">contact Us</a></li>
                    </ul>
                  </div>
                  <a className="main_button hover-affect" href="appointment.html">Book Appointment</a>
              </div>
</>
    );
}

export default Home;