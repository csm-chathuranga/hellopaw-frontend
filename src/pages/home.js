import Header   from "../components/Header";
function Home() {
    return (
        <div className="main-wrapper">
        <div className="main_header">
             <div className="custom-container-fluid">
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
             </div>   
         </div>

      <div className="main_header fixed">
       <div className="custom-container-fluid">
         <div className="main_top_bar">
               <h1><figure><img src="/assets/images/top-logo01.png"/></figure></h1>
                <ul className="navigation">
                   <li><a >Home</a>
                     <ul className="sub-menu">
                        <li><a href="index.html">main home</a></li>
                       <li><a href="index-02.html">Home 02</a></li>
                     </ul>
                   </li>
                   <li><a >Pages<i className="fa fa-caret-down"></i></a>
                     <ul className="sub-menu">
                        <li><a href="about-us.html">about us</a></li>
                        <li><a href="team-page.html">team page</a></li>
                        <li><a href="team-detail.html">team detail</a></li>
                        <li><a href="gallery.html">gallery page</a></li>
                        <li><a href="gallery01.html">gallery02</a></li>
                        <li><a href="404-page.html">404 page</a></li>
                        <li><a href="appointment.html">appointment</a></li>
                     </ul>
                   </li>
                   <li><a >Services<i className="fa fa-caret-down"></i></a>
                     <ul className="sub-menu">
                        <li><a href="service-grid.html">service grid</a></li>
                        <li><a href="service-grid02.html">service 02</a></li>
                        <li><a href="service-grid03.html">service 03</a></li>
                        <li><a href="service-detail.html">service detail</a></li>
                     </ul>
                   </li>
                   <li><a >Blog</a>
                      <ul className="sub-menu">
                        <li><a href="blog-post.html">blog page</a></li>
                        <li><a href="blog-post-full.html">blog post </a></li>
                        <li><a href="blog-post-sidebar.html">blog sidebar</a></li>
                        <li><a href="blog-detail.html">blog detail</a></li>
                     </ul>
                   </li>
                   <li><a > Shop<i className="fa fa-caret-down"></i></a>
                      <ul className="sub-menu">
                        <li><a href="shop-page.html">shop page</a></li>
                        <li><a href="shop-detail.html">Shop detail</a></li>
                      </ul>
                     </li>
                   <li><a href="contact-us.html"> Contact Us</a></li>
               </ul>
               <div id="responsive-navigation" className="dl-menuwrapper">
                 <button className="dl-trigger">Open Menu</button>
                 <ul className="dl-menu">
                   <li><a className="active" >Home</a>
                     <ul className="dl-submenu">
                          <li><a href="index.html">main home</a></li>
                       <li><a href="index-02.html">Home 02</a></li>
                     </ul>
                   </li>
                   <li className="menu-item kode-parent-menu"><a >Pages</a>
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
                   <li className="menu-item kode-parent-menu"><a >Services</a>
                     <ul className="dl-submenu">
                         <li><a href="service-grid.html">service grid</a></li>
                        <li><a href="service-grid02.html">service 02</a></li>
                        <li><a href="service-grid03.html">service 03</a></li>
                        <li><a href="service-detail.html">service detail</a></li>
                     </ul>
                   </li>
                   <li className="menu-item kode-parent-menu"><a >blog</a>
                     <ul className="dl-submenu">
                         <li><a href="blog-post.html">blog page</a></li>
                        <li><a href="blog-post-full.html">blog post </a></li>
                        <li><a href="blog-post-sidebar.html">blog sidebar</a></li>
                        <li><a href="blog-detail.html">blog detail</a></li>
                     </ul>
                   </li>
                   <li className="menu-item kode-parent-menu"><a >Shop</a>
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
       </div>   
     </div>

     <div className="main_banner top_banner">
       <div className="bg_layer">
         <div className="custom-container-fluid">
             <div className="main_banner_row">
                 <div className="mian_banner_text">
                      <h2>Your Pet</h2>
                      <h1>Our Priority</h1>
                      <p>Grooming & Supply provides grooming services for all dog and<br/> 
                         cat breeds. We are fully committed to the health.</p> 
                     <ul className="banner_video">
                         <a className="main_button btn2 hover-affect" >Learn More</a>
                         <a className="play_btn" href="https://www.youtube.com/watch?v=Yzv0gXqoCkc"><i className="fa fa-play-circle"></i>Play Video</a>
                     </ul>
                 </div>
                 <div className="banner_fig_slider">
                     <div>
                       <div className="mian_banner_fig">
                         <figure>
                            <img src="/assets/images/banner-fig01.png"/>
                        </figure>
                       </div>
                     </div>
                     {/* <div>
                       <div className="mian_banner_fig">
                         <figure>
                            <img src="/assets/images/banner-fig.png"/>
                        </figure>
                       </div>
                     </div> */}
                     {/* <div>
                       <div className="mian_banner_fig">
                         <figure>
                            <img src="/assets/images/banner-fig01.png"/>
                        </figure>
                       </div>
                     </div> */}
                 </div>
             </div>        
         </div>
           <div id="divider_id" className="website-divider-container-500113">

              <svg xmlns="http://www.w3.org/2000/svg" className="divider-img-500113" viewBox="0 0 1080 137" preserveAspectRatio="none">
             <path d="M 0,137 V 59.03716 c 158.97703,52.21241 257.17659,0.48065 375.35967,2.17167 118.18308,1.69101 168.54911,29.1665 243.12679,30.10771 C 693.06415,92.25775 855.93515,29.278599 1080,73.61449 V 137 Z" ></path>
           </svg>   

           </div>
        </div> 
     </div>

     <section className="pet_service">
         <div className="custom-container">
                 <div className="pet_service_row">
                   <div className="pet_service_column">
                       <figure>
                           <img src="/assets/images/service_bg.png" alt="image"/>
                           <img className="hover_img" src="/assets/images/service_bg_hover.png" alt="image"/>
                           <a className="icon_img" ><img src="/assets/images/icon-img.png" alt="image"/></a>
                       </figure>
                       <h6>Dog</h6>
                   </div>
                  <div className="pet_service_column">
                       <figure>
                           <img src="/assets/images/service_bg.png" alt="image"/>
                           <img className="hover_img" src="/assets/images/service_bg_hover.png" alt="image"/>
                           <a className="icon_img" ><img src="/assets/images/icon-img01.png" alt="image"/></a>
                       </figure>
                       <h6>Cat</h6>
                   </div>
                  <div className="pet_service_column">
                       <figure>
                           <img src="/assets/images/service_bg.png" alt="image"/>
                           <img className="hover_img" src="/assets/images/service_bg_hover.png" alt="image"/>
                           <a className="icon_img" ><img src="/assets/images/icon-img02.png" alt="image"/></a>
                       </figure>
                       <h6>Parrots</h6>
                   </div>
                   <div className="pet_service_column">
                       <figure>
                           <img src="/assets/images/service_bg.png" alt="image"/>
                           <img className="hover_img" src="/assets/images/service_bg_hover.png" alt="image"/>
                           <a className="icon_img" ><img src="/assets/images/icon-img03.png" alt="image"/></a>
                       </figure>
                       <h6>Fish</h6>
                   </div>
                   <div className="pet_service_column">
                       <figure>
                           <img src="/assets/images/service_bg.png" alt="image"/>
                           <img className="hover_img" src="/assets/images/service_bg_hover.png" alt="image"/>
                           <a className="icon_img" ><img src="/assets/images/icon-img04.png" alt="image"/></a>
                       </figure>
                       <h6>Live Stock</h6>
                   </div>
                   <div className="pet_service_column">
                       <figure>
                           <img src="/assets/images/service_bg.png" alt="image"/>
                           <img className="hover_img" src="/assets/images/service_bg_hover.png" alt="image"/>
                           <a className="icon_img" ><img src="/assets/images/icon-img05.png" alt="image"/></a>
                       </figure>
                       <h6>Other Animals</h6>
                   </div>
               </div>
          </div>               
     </section>                

     <section className="pet_about_wrap">
         <div className="custom-container">
             <div className="pet_about_row">
                <div className="pet_about_fig">
                     <figure>
                       <img src="/assets/images/about-fig.png" alt="image"/>
                     </figure>  
                 </div>
                 <div className="pet_about_text">
                     <h3>About Us</h3>
                     <h2>We'll Make Your Pets<br/>
                     Really Awesome</h2>
                     <p>Pawscare is the largest specialty pet retailer of services and solutions for the lifetime needs of pets. At Pawscare, we love pets, and we believe pets make us better people.</p>
                     <a className="main_button btn2 bdr-clr hover-affect" >Learn More</a>
                 </div>
             </div>
         </div>
     </section> 

     <section className="pet_sevice02_wrap">
         <div className="custom-container">
             <div className="mian_heading">
                 <h2 className="clr_white">Our Services</h2>
                 <h3 className="clr_white">We are best in</h3>
             </div>
             <div className="pet_service02_row">

                 <div className="pet_service02_column">
                   <figure>
                     <img src="/assets/images/service-fig.png" alt=""/>
                   </figure>
                   <h5>Veterinary Service</h5>
                   <p>Phallus mattie curses orca, in mollie maurist laconia et. The Vestibule outrun libero tor sit amen Phallus mattie curses orca, in mollie maurist laconia et.</p>
                   <a className="main_button btn2 hover-affect" >Learn More</a>
                 </div>
         
                 <div className="pet_service02_column">
                   <figure>
                     <img src="/assets/images/service-fig01.png" alt=""/>
                   </figure>
                   <h5>Veterinary Service</h5>
                   <p>Phallus mattie curses orca, in mollie maurist laconia et. The Vestibule outrun libero tor sit amen Phallus mattie curses orca, in mollie maurist laconia et.</p>
                   <a className="main_button btn2 hover-affect" >Learn More</a>
                 </div>
           
                 <div className="pet_service02_column">
                   <figure>
                     <img src="/assets/images/service-fig02.png" alt=""/>
                   </figure>
                   <h5>Veterinary Service</h5>
                   <p>Phallus mattie curses orca, in mollie maurist laconia et. The Vestibule outrun libero tor sit amen Phallus mattie curses orca, in mollie maurist laconia et.</p>
                   <a className="main_button btn2 hover-affect" >Learn More</a>
                 </div>
                   
                 <div className="pet_service02_column">
                   <figure>
                     <img src="/assets/images/service-fig03.png" alt=""/>
                   </figure>
                   <h5>Veterinary Service</h5>
                   <p>Phallus mattie curses orca, in mollie maurist laconia et. The Vestibule outrun libero tor sit amen Phallus mattie curses orca, in mollie maurist laconia et.</p>
                   <a className="main_button btn2 hover-affect" >Learn More</a>
                 </div>
               
                 <div className="pet_service02_column">
                   <figure>
                     <img src="/assets/images/service-fig04.png" alt=""/>
                   </figure>
                   <h5>Veterinary Service</h5>
                   <p>Phallus mattie curses orca, in mollie maurist laconia et. The Vestibule outrun libero tor sit amen Phallus mattie curses orca, in mollie maurist laconia et.</p>
                   <a className="main_button btn2 hover-affect" >Learn More</a>
                 </div>
        
                 <div className="pet_service02_column">
                   <figure>
                     <img src="/assets/images/service-fig02.png" alt=""/>
                   </figure>
                   <h5>Veterinary Service</h5>
                   <p>Phallus mattie curses orca, in mollie maurist laconia et. The Vestibule outrun libero tor sit amen Phallus mattie curses orca, in mollie maurist laconia et.</p>
                   <a className="main_button btn2 hover-affect" >Learn More</a>
                 </div>
              
             </div>  
          </div> 
          <div className="custom-shape-divider-top-1687264903">
             <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                 <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
             </svg>
         </div>
      </section>      

     <section className="pet_counter_wrap">
       <div className="pet_counter_bg">
         <div className="custom-container">
            <div className="pet_counter_row">
               <div className="pet_counter_column">
                 <span><i className="fa fa-user-md"></i></span>
                 <div className="pet_counter_text">
                   <h3 className="counter">550</h3>
                   <p>Happy Clients</p>
                 </div>
               </div>
               <div className="pet_counter_column">
                 <span><i className="fa fa-user-md"></i></span>
                 <div className="pet_counter_text">
                   <h3 className="counter">80</h3>
                   <p>Professional</p>
                 </div>
               </div>
               <div className="pet_counter_column">
                 <span><i className="fa fa-paw"></i></span>
                 <div className="pet_counter_text">
                   <h3 className="counter">820</h3>
                   <p>EVENT DONE</p>
                 </div>
               </div>
               <div className="pet_counter_column">
                 <span><i className="fa fa-medkit"></i></span>
                 <div className="pet_counter_text">
                   <h3 className="counter">820</h3>
                   <p>Pets Products</p>
                 </div>
              </div>
            </div> 
         </div>
         <div className="custom-shape-divider-bottom-1687266093">
             <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                 <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
             </svg>
         </div> 
       </div>                 
     </section> 

     <section className="pet_exercise_wrap">
         <div className="custom-container">
           <div className="pet_exercise_row">
             <div className="pet_exercise_fig">
                 <figure>
                   <img src="/assets/images/exercise-fig.png" alt=""/>
                 </figure>
             </div>
             <div className="pet_exercise_text">
               <h3>Activities and Exercise</h3>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
               <ul className="pet_service_list">
                 <li>
                   <figure>
                      <img src="/assets/images/exercise-list-fig.png" alt=""/>
                     <span>01</span>
                   </figure>
                   <div className="pet_exercise_list_text">
                     <h5>Play fetch and chase games</h5>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                   </div>
                 </li>
                 <li>
                   <figure>
                      <img src="/assets/images/exercise-list-fig.png" alt=""/>
                     <span>02</span>
                   </figure>
                   <div className="pet_exercise_list_text">
                     <h5>Follow them for a stroll</h5>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                   </div>
                 </li>
                 <li>
                    <figure>
                      <img src="/assets/images/exercise-list-fig.png" alt=""/>
                     <span>03</span>
                   </figure>
                   <div className="pet_exercise_list_text">
                     <h5>Obedience training</h5>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                   </div>
                 </li>
                 <li>
                    <figure>
                      <img src="/assets/images/exercise-list-fig.png" alt=""/>
                     <span>04</span>
                   </figure>
                   <div className="pet_exercise_list_text">
                     <h5>Make them climb the stairs</h5>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                   </div>
                 </li>
                 <li>
                   <a className="main_button btn2 bdr-clr hover-affect" >Book Appointment</a>
                 </li>
               </ul>
             </div>
           </div>
         </div> 
     </section>


     <section className="pet_gallery_wrap">
         <div className="mian_heading text-center">
           <h2>See Our</h2>
           <h3>Really Awesome <br/> Gallery</h3>
         </div>
         <div className="pet_gallery_row">
           <div className="pet_gallery_fig">
             <figure className="image-layer-affect">
               <img src="extra-/assets/images/gallery-fig.jpg" data-src="extra-/assets/images/gallery-popup.jpg" alt="prettyPhoto"/>
             </figure>
           </div>
           <div className="pet_gallery_fig">
              <figure className="image-layer-affect">
               <img src="extra-/assets/images/gallery-fig1.jpg" data-src="extra-/assets/images/gallery-popup.jpg" alt=""/>
             </figure>
             <figure className="image-layer-affect">
               <img src="extra-/assets/images/gallery-fig2.jpg" data-src="extra-/assets/images/gallery-popup.jpg" alt=""/>
             </figure>
           </div>
           <div className="pet_gallery_fig margin-top">
              <figure className="image-layer-affect">
               <img src="extra-/assets/images/gallery-fig3.jpg" data-src="extra-/assets/images/gallery-popup.jpg" alt=""/>
             </figure>
              <figure className="image-layer-affect">
               <img src="extra-/assets/images/gallery-fig4.jpg" data-src="extra-/assets/images/gallery-popup.jpg" alt=""/>
             </figure>
           </div>
           <div className="pet_gallery_fig">
             <figure className="image-layer-affect">
               <img src="extra-/assets/images/gallery-fig5.jpg"  data-src="extra-/assets/images/gallery-popup.jpg" alt=""/>
             </figure>
             <figure className="image-layer-affect">
               <img src="extra-/assets/images/gallery-fig6.jpg" data-src="extra-/assets/images/gallery-popup.jpg" alt=""/>
             </figure>
           </div>
           <div className="pet_gallery_fig margin-top">
              <figure className="image-layer-affect">
               <img src="extra-/assets/images/gallery-fig7.jpg"  data-src="extra-/assets/images/gallery-popup.jpg"alt=""/>
             </figure>
              <figure className="image-layer-affect">
               <img src="extra-/assets/images/gallery-fig8.jpg" data-src="extra-/assets/images/gallery-popup.jpg" alt=""/>
             </figure>
           </div>
           <div className="pet_gallery_fig">
              <figure className="image-layer-affect">
               <img src="extra-/assets/images/gallery-fig9.jpg" data-src="extra-/assets/images/gallery-popup.jpg" alt=""/>
             </figure>
              <figure className="image-layer-affect">
               <img src="extra-/assets/images/gallery-fig10.jpg" data-src="extra-/assets/images/gallery-popup.jpg" alt=""/>
             </figure>
           </div>
           <div className="pet_gallery_fig">
              <figure className="image-layer-affect">
               <img src="extra-/assets/images/gallery-fig11.jpg" data-src="extra-/assets/images/gallery-popup.jpg" alt=""/>
             </figure>
           </div>
         </div>  
     </section>             

     <section className="pet_client_wrap">
       <div className="custom-container">
         <div className="pet_client_row">
             <div className="pet_client_fig">
                <figure>
                 <img src="/assets/images/client-text-fig.png" alt=""/>
                    <h2 className="pet_clien_text">what <br/>our client say <br/> about us</h2>
               </figure>
             </div>
             <div className="pet_client_list">
               <div className="mian_heading">
                 <h2 className="clr_white">Our Services</h2>
                 <h3 className="clr_white">What Our Client Say</h3>
               </div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
              <div className="pet_client_detail">
                 <figure>
                   <img src="/assets/images/client-fig.png" alt=""/>
                 </figure>
                 <div className="pet_client_detail_text">
                   <h6>Wesley Delgado</h6>
                   <h6 className="clr_white">Pet lover</h6>
                 </div>
              </div> 
            </div>
             <div id="modal-box">
               <span className="close">&times;</span>
               <img id="modal-image" src=""/>
           </div>
         </div>
         <div className="custom-shape-divider-bottom-1687357859">
           <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
               <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
           </svg>
       </div>
       </div>
     </section>

     <section className="pet_price_table_wrap">
       <div className="custom-container">
         <div className="mian_heading text-center">
           <h2>Choose Your</h2>
           <h3>Pricing Table</h3>
         </div> 
         <div className="pet_price_table_row">
             <div className="pet_price_table_column">
               <figure className="image-layer-affect">
                   <img src="extra-/assets/images/table-fig.jpg" alt=""/>
               </figure>
               <div className="pet_price_text">
                 <h2>$99</h2>
                 <h5>Regular Session</h5>
                 <ul className="pet_price_list">
                   <li><a ><i className="fa fa-check"></i>Pet Shower</a></li>
                   <li><a ><i className="fa fa-check"></i>Fitness Checkup</a></li>
                   <li><a ><i className="fa fa-check"></i>Pet Grooming</a></li>
                   <li><a ><i className="fa fa-check"></i>Hair And Nail Cut</a></li>
                   <li><a ><i className="fa fa-check"></i>Control Hair Falling</a></li>
                   <li><a ><i className="fa fa-check"></i>Brush & Blow Dry</a></li>
                   <li><a ><i className="fa fa-check"></i>Pet Park And Games</a></li>
                 </ul>
                 <a className="main_button btn2 bdr-clr hover-affect" >Chosse a plan</a>
               </div>
             </div>
             
             <div className="pet_price_table_column">
                <figure className="image-layer-affect">
                   <img src="extra-/assets/images/table-fig1.jpg" alt=""/>
               </figure>
               <div className="pet_price_text">
                 <h2>$99</h2>
                 <h5>Regular Session</h5>
                 <ul className="pet_price_list">
                   <li><a ><i className="fa fa-check"></i>Pet Shower</a></li>
                   <li><a ><i className="fa fa-check"></i>Fitness Checkup</a></li>
                   <li><a ><i className="fa fa-check"></i>Pet Grooming</a></li>
                   <li><a ><i className="fa fa-check"></i>Hair And Nail Cut</a></li>
                   <li><a ><i className="fa fa-check"></i>Control Hair Falling</a></li>
                   <li><a ><i className="fa fa-check"></i>Brush & Blow Dry</a></li>
                   <li><a ><i className="fa fa-check"></i>Pet Park And Games</a></li>
                 </ul>
                 <a className="main_button btn2 bdr-clr hover-affect" >Chosse a plan</a>
               </div>
             </div>
             <div className="pet_price_table_column">
                <figure className="image-layer-affect">
                   <img src="extra-/assets/images/table-fig2.jpg" alt=""/>
               </figure>
               <div className="pet_price_text">
                 <h2>$99</h2>
                 <h5>Regular Session</h5>
                 <ul className="pet_price_list">
                   <li><a ><i className="fa fa-check"></i>Pet Shower</a></li>
                   <li><a ><i className="fa fa-check"></i>Fitness Checkup</a></li>
                   <li><a ><i className="fa fa-check"></i>Pet Grooming</a></li>
                   <li><a ><i className="fa fa-check"></i>Hair And Nail Cut</a></li>
                   <li><a ><i className="fa fa-check"></i>Control Hair Falling</a></li>
                   <li><a ><i className="fa fa-check"></i>Brush & Blow Dry</a></li>
                   <li><a ><i className="fa fa-check"></i>Pet Park And Games</a></li>
                 </ul>
                 <a className="main_button btn2 bdr-clr hover-affect" >Chosse a plan</a>
               </div>
             </div>
         </div>  
       </div>  
     </section>    


     <section className="pet_company_wrap instagram-fig">
       <div className="custom-container-fluid">
         <div className="pet_company_row">
           <div className="pet-ccompany-slider">
             <div>
               <div className="pet_company_column">
                   <figure className="image-layer-affect">
                     <img src="extra-/assets/images/instagram-fig.jpg" alt=""/>
                   </figure>
               </div>
             </div>
             <div>
               <div className="pet_company_column">
                   <figure className="image-layer-affect">
                     <img src="extra-/assets/images/instagram-fig1.jpg" alt=""/>
                   </figure>
               </div>
           </div>
           <div>
             <div className="pet_company_column">
                 <figure className="image-layer-affect">
                     <img src="extra-/assets/images/instagram-fig2.jpg" alt=""/>
                   </figure>
             </div>
           </div>
           <div>
             <div className="pet_company_column">
                 <figure className="image-layer-affect">
                     <img src="extra-/assets/images/instagram-fig3.jpg" alt=""/>
                   </figure>
             </div>
           </div>
           <div>  
             <div className="pet_company_column">
                 <figure className="image-layer-affect">
                     <img src="extra-/assets/images/instagram-fig4.jpg" alt=""/>
                   </figure>
             </div>
           </div>
           <div>  
             <div className="pet_company_column">
                <figure className="image-layer-affect">
                     <img src="extra-/assets/images/instagram-fig5.jpg" alt=""/>
                   </figure>
             </div>
           </div>
           <div>  
             <div className="pet_company_column">
                 <figure className="image-layer-affect">
                     <img src="extra-/assets/images/instagram-fig3.jpg" alt=""/>
                   </figure>
             </div>
           </div>  
         </div>
       </div>
       <div className="custom-shape-divider-top-1687358087">
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
         </svg>
     </div>
     </div>
   </section> 
         
   <div className="pet_widget">
         <div className="custom-container">
           <div className="main_widget_row">
             <div className="widget_contact">
                <h6 className="widget_title">Contacts Us</h6>
               <div className="main_widget_column">
                 <span><img src="/assets/images/phone-fig.png"/></span>
                 <div className="main_widget_contact">
                   <a >+880-176-1111-456</a>
                   <a >+880-170-1111-000</a>
                 </div>
               </div>
               <div className="main_widget_column">
                 <span><img src="/assets/images/envelope-fig.png"/></span>
                 <div className="main_widget_contact">
                   <a >info@pawsome.com</a>
                   <a >Support@pawsome.com</a>
                 </div>
               </div>
               <div className="main_widget_column">
                 <span><img src="/assets/images/map-fig.png"/></span>
                 <div className="main_widget_contact">
                   <a >168/170, Avenue 01, Newland,<br/>
                   New york, USA</a>
                 </div>
               </div>
             </div>

             <div className="pet_widget_column">
               <figure><img src="/assets/images/top-logo.png"/></figure>
               <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis </p>
               <ul className="widget_social_share">
                 <li><a className="hover-affect" ><i className="fa fa-facebook"></i></a></li>
                 <li><a className="hover-affect" ><i className="fa fa-twitter"></i></a></li>
                 <li><a className="hover-affect" ><i className="fa fa-camera"></i></a></li>
                 <li><a className="hover-affect" ><i className="fa fa-youtube"></i></a></li>
               </ul>
               <a className="main_button btn2 bdr-clr hover-affect" >Book Book Now</a>
             </div>
             <div className="pet_widget_column widtget-hours">
                <h6 className="widget_title">Opening Hours</h6>
                 <ul className="pet_widget_link">
                   <li><a >Monday </a><span>09:00 am - 06:00 pm</span></li>
                   <li><a >Tuesday </a><span>09:00 am - 06:00 pm</span></li>
                   <li><a >Wednesday</a><span>09:00 am - 06:00 pm</span></li>
                   <li><a >Wednesday</a><span>09:00 am - 06:00 pm</span></li>
                   <li><a >Friday</a><span>09:00 am - 06:00 pm</span></li>
                   <li><a >Saturday</a><span>09:00 am - 06:00 pm</span></li>
                   <li><a >Sunday</a><span>09:00 am - 06:00 pm</span></li>
                 </ul>
           </div>
         </div>
     </div>
     <div className="pet_copyright">
         <div className="container">
           <div className="pet_copyright_text">
               <p>@ 2019 All Rights Reserved and Registered</p>
           </div>
         </div>
       </div> 
   </div>
 </div> 
    );
}

export default Home;