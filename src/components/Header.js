
function Home() {
    return (
<>
<div class="main_top_bar">
                  <h1><figure><img src="images/top-logo.png"/></figure></h1>
                  <ul class="navigation">
                      <li><a href="#">Home <i class="fa fa-caret-down"></i></a>
                        <ul class="sub-menu">
                          <li><a href="index.html">main home</a></li>
                          <li><a href="index-02.html">Home 02</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Pages<i class="fa fa-caret-down"></i></a>
                        <ul class="sub-menu">
                           <li><a href="about-us.html">about us</a></li>
                           <li><a href="team-page.html">team page</a></li>
                           <li><a href="team-detail.html">team detail</a></li>
                           <li><a href="gallery.html">gallery page</a></li>
                           <li><a href="gallery01.html">gallery02</a></li>
                           <li><a href="404-page.html">404 page</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Services<i class="fa fa-caret-down"></i></a>
                        <ul class="sub-menu">
                           <li><a href="service-grid.html">service grid</a></li>
                           <li><a href="service-grid02.html">service 02</a></li>
                           <li><a href="service-grid03.html">service 03</a></li>
                           <li><a href="service-detail.html">service detail</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog <i class="fa fa-caret-down"></i></a>
                         <ul class="sub-menu">
                           <li><a href="blog-post.html">blog page</a></li>
                           <li><a href="blog-post-full.html">blog post </a></li>
                           <li><a href="blog-post-sidebar.html">blog sidebar</a></li>
                           <li><a href="blog-detail.html">blog detail</a></li>
                        </ul>
                      </li>
                      <li><a href="#"> Shop<i class="fa fa-caret-down"></i></a>
                         <ul class="sub-menu">
                           <li><a href="shop-page.html">shop page</a></li>
                           <li><a href="shop-detail.html">Shop detail</a></li>
                         </ul>
                        </li>
                      <li><a href="contact-us.html"> Contact Us</a></li>
                  </ul>
                  <div id="kode-responsive-navigation" class="dl-menuwrapper">
                    <button class="dl-trigger">Open Menu</button>
                    <ul class="dl-menu">
                      <li><a class="active" href="#">Home</a>
                        <ul class="dl-submenu">
                             <li><a href="index.html">main home</a></li>
                             <li><a href="index-02.html">Home 02</a></li>
                        </ul>
                      </li>
                      <li class="menu-item kode-parent-menu"><a href="#">Pages</a>
                          <ul class="dl-submenu">
                             <li><a href="about-us.html">about us</a></li>
                             <li><a href="team-page.html">team page</a></li>
                             <li><a href="team-detail.html">team detail</a></li>
                             <li><a href="gallery.html">gallery page</a></li>
                             <li><a href="gallery01.html">gallery02</a></li>
                             <li><a href="404-page.html">404 page</a></li>
                             <li><a href="appointment.html">appointment</a></li>
                          </ul>
                      </li>
                      <li class="menu-item kode-parent-menu"><a href="#">Services</a>
                        <ul class="dl-submenu">
                            <li><a href="service-grid.html">service grid</a></li>
                           <li><a href="service-grid02.html">service 02</a></li>
                           <li><a href="service-grid03.html">service 03</a></li>
                           <li><a href="service-detail.html">service detail</a></li>
                        </ul>
                      </li>
                      <li class="menu-item kode-parent-menu"><a href="#">blog</a>
                        <ul class="dl-submenu">
                            <li><a href="blog-post.html">blog page</a></li>
                           <li><a href="blog-post-full.html">blog post </a></li>
                           <li><a href="blog-post-sidebar.html">blog sidebar</a></li>
                           <li><a href="blog-detail.html">blog detail</a></li>
                        </ul>
                      </li>
                      <li class="menu-item kode-parent-menu"><a href="#">Shop</a>
                        <ul class="dl-submenu">
                            <li><a href="shop-page.html">shop page</a></li>
                           <li><a href="shop-detail.html">Shop detail</a></li>
                        </ul>
                      </li>
                      <li><a href="contact-us.html">contact Us</a></li>
                    </ul>
                  </div>
                  <a class="main_button hover-affect" href="appointment.html">Book Appointment</a>
              </div>
</>
    );
}

export default Home;