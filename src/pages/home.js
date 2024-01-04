import  Header  from "../components/Header";
import  Footer  from "../components/Footer";
import  Search  from "../pages/common/search";
import {Grid,TextField,Button} from '@mui/material';

function Home() {
    return (
        <div className="main-wrapper">
      <Header />


      {/* <section class="pet_gallery_wrap">
            <div class="mian_heading text-center">
              <h2>Our</h2>
              <h3>New <br/> Members</h3>
            </div>
            <div class="pet_gallery_row">
              <div class="pet_gallery_fig">
                <figure class="image-layer-affect">
                  <img src="cimages/logo2.jpg" alt=""//>
                </figure>
              </div>
              <div class="pet_gallery_fig">
                 <figure class="image-layer-affect">
                  <img src="/assets/images/logo2.jpg" alt=""//>
                </figure>
                <figure class="image-layer-affect">
                  <img src="/assets/images/logo2.jpg" alt=""//>
                </figure>
              </div>
              <div class="pet_gallery_fig margin-top">
                 <figure class="image-layer-affect">
                  <img src="/assets/images/logo2.jpg" alt=""//>
                </figure>
                 <figure class="image-layer-affect">
                  <img src="/assets/images/logo2.jpg" alt=""//>
                </figure>
              </div>
              <div class="pet_gallery_fig">
                <figure class="image-layer-affect">
                  <img src="/assets/images/logo2.jpg" alt=""//>
                </figure>
                <figure class="image-layer-affect">
                  <img src="/assets/images/logo2.jpg" alt=""//>
                </figure>
              </div>
              <div class="pet_gallery_fig margin-top">
                 <figure class="image-layer-affect">
                  <img src="/assets/images/logo2.jpg" alt=""//>
                </figure>
                 <figure class="image-layer-affect">
                  <img src="/assets/images/logo2.jpg" alt=""//>
                </figure>
              </div>
              <div class="pet_gallery_fig">
                 <figure class="image-layer-affect">
                  <img src="/assets/images/logo2.jpg" alt=""//>
                </figure>
                 <figure class="image-layer-affect">
                  <img src="/assets/images/logo2.jpg" alt=""//>
                </figure>
              </div>
              <div class="pet_gallery_fig">
                 <figure class="image-layer-affect">
                  <img src="/assets/images/logo2.jpg" alt=""//>
                </figure>
              </div>
            </div>  
        </section>      */}
     <div className="main_banner top_banner">
       <div className="bg_layer">
         <div className="custom-container-fluid">
             <div className="main_banner_row">
                 <div className="mian_banner_text">
                      <h3>Your Pet</h3>
                      <h1>HAPPY BAW</h1>
                      <p>YOUR PAW-FRIENDLY ONLINE SPACE</p>
                      
{/*                        
                     <ul className="banner_video">
                         <a className="main_button btn2 hover-affect" >Learn More</a>
                         <a className="main_button btn2 hover-affect" >Learn More</a>
                         <a className="main_button btn2 hover-affect" >Learn More</a>
                         <a className="play_btn" href="https://www.youtube.com/watch?v=Yzv0gXqoCkc"><i className="fa fa-play-circle"></i>Play Video</a>
                     </ul> */}
                 </div>
                 <div className="banner_fig_slider">
                     <div>
                       <div className="mian_banner_fig">
                         <figure>
                            {/* <img src="/assets/images/banner.png"/> */}
                            {/* <img src=" https://thepet.community/wp-content/uploads/2020/05/bonding-cold-cozy-dog-374845-e1588398801497.jpg"/> */}
                           
                        </figure>
                       </div>
                     </div>
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
        <Grid item xs={12} container display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{mb:5}}>
            <Search/>
        </Grid>
          <section class="child_service_wrap blog-post">
            <div class="container">
                <h4 style={{textAlign:'center',marginBottom:20}}>Find Pet Services <br/>Near You</h4>
              <div class="child_service_row">
          			  <div class="child_service_column">
            				<figure class="image-layer-affect">
            					<img src="/assets/extra-images/child-service-fig01.jpg" alt=""/>
            				</figure>
          				<div class="child_service_text">
                    <figure class="fig-position">
                      <img src="/assets/images/service-top-fig01.png" alt=""/>
                    </figure> 
          					<h5>$Chid Education Always<br/> Ideas For Knoweledge</h5>
          					<ul class="child_service_info">
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					</ul>
          				</div>
          			  </div>
          			
          			  <div class="child_service_column">
            				<figure class="image-layer-affect">
            					<img src="/assets/extra-images/child-service-fig2.jpg" alt=""/>
            				</figure>
          				<div class="child_service_text">
                    <figure class="fig-position">
                      <img src="/assets/images/service-top-fig02.png" alt=""/>
                    </figure> 
          					<h5>$Chid Education Always<br/> Ideas For Knoweledge</h5>
          					<ul class="child_service_info">
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					</ul>
          				</div>
          			  </div>
          		   
          			  <div class="child_service_column">
            				<figure class="image-layer-affect">
            					<img src="/assets/extra-images/child-service-fig02.jpg" alt=""/>
            				</figure>
          				<div class="child_service_text">
                    <figure class="fig-position">
                      <img src="/assets/images/service-top-fig03.png" alt=""/>
                    </figure>
          					<h5>$Chid Education Always<br/> Ideas For Knoweledge</h5>
          					<ul class="child_service_info">
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					</ul>
          				</div>
          			  </div>
          		   
          			  <div class="child_service_column">
            				<figure class="image-layer-affect">
            					<img src="/assets/extra-images/child-service-fig03.jpg" alt=""/>
            				</figure>
          				<div class="child_service_text">
                    <figure class="fig-position">
                      <img src="/assets/images/service-top-fig01.png" alt=""/>
                    </figure>
          					<h5>$Chid Education Always<br/> Ideas For Knoweledge</h5>
          					<ul class="child_service_info">
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					</ul>
          				</div>
          			  </div>
          				<div class="child_service_column">
            				<figure class="image-layer-affect">
            					<img src="/assets/extra-images/child-service-fig04.jpg" alt=""/>
            				</figure>
          				<div class="child_service_text">
                    <figure class="fig-position">
                      <img src="/assets/images/service-top-fig02.png" alt=""/>
                    </figure>
          					<h5>$Chid Education Always<br/> Ideas For Knoweledge</h5>
          					<ul class="child_service_info">
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					</ul>
          				</div>
          			 </div>
          		   
          			   <div class="child_service_column">
              				<figure class="image-layer-affect">
              					<img src="/assets/extra-images/child-service-fig05.jpg" alt=""/>
              				</figure>
          					<div class="child_service_text">
                     <figure class="fig-position">
                        <img src="/assets/images/service-top-fig01.png" alt=""/>
                      </figure>
          						<h5>$Chid Education Always<br/> Ideas For Knoweledge</h5>
          						<ul class="child_service_info">
          						  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          						  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          						</ul>
          					</div>
          				</div>
          		   
          				<div class="child_service_column">
          					<figure class="image-layer-affect">
          						<img src="/assets/extra-images/child-service-fig02.jpg" alt=""/>
          					</figure>
          					<div class="child_service_text">
                     <figure class="fig-position">
                        <img src="/assets/images/service-top-fig03.png" alt=""/>
                      </figure>
          						<h5>$Chid Education Always<br/> Ideas For Knoweledge</h5>
          						<ul class="child_service_info">
          						  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          						  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          						</ul>
          					</div>
          				</div>
                  <div class="child_service_column">
                    <figure class="image-layer-affect">
                      <img src="/assets/extra-images/child-service-fig03.jpg" alt=""/>
                    </figure>
                    <div class="child_service_text">
                     <figure class="fig-position">
                        <img src="/assets/images/service-top-fig01.png" alt=""/>
                      </figure>
                      <h5>$Chid Education Always<br/> Ideas For Knoweledge</h5>
                      <ul class="child_service_info">
                        <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
                        <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="child_service_column">
                    <figure class="image-layer-affect">
                      <img src="/assets/extra-images/child-service-fig01.jpg" alt=""/>
                    </figure>
                    <div class="child_service_text">
                       <figure class="fig-position">
                          <img src="/assets/images/service-top-fig02.png" alt=""/>
                        </figure>
                      <h5>$Chid Education Always<br/> Ideas For Knoweledge</h5>
                      <ul class="child_service_info">
                        <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
                        <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="pet-pagination">
                    <ul>
                      <li><a class="previous-btn" href="#">Pervious</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a class="previous-btn next-btn" href="#">Next</a></li>
                    </ul>
                  </div>
              </div>  
            </div>  
          </section>    
  		

        {/* <section class="child_service_wrap blog-full">
          <div class="container">
          <div class="child_service_row">
          			  <div class="child_service_column">
            				<figure class="image-layer-affect">
            					<img src="/assets/extra-images/child-service-fig01.jpg" alt=""/ />
            				</figure>
          				<div class="child_service_text">
                    <figure class="fig-position">
                      <img src="/assets/images/service-top-fig01.png" alt=""//>
                    </figure> 
          					<h5>$Chid Education Always<br/> Ideas For Knoweledge</h5>
          					<ul class="child_service_info">
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					</ul>
          				</div>
          			  </div>
          			
          			  <div class="child_service_column">
            				<figure class="image-layer-affect">
            					<img src="/assets/extra-images/child-service-fig2.jpg" alt=""//>
            				</figure>
          				<div class="child_service_text">
                    <figure class="fig-position">
                      <img src="/assets/images/service-top-fig02.png" alt=""//>
                    </figure> 
          					<h5>$Chid Education Always<br/> Ideas For Knoweledge</h5>
          					<ul class="child_service_info">
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					</ul>
          				</div>
          			  </div>
          		   
          			  <div class="child_service_column">
            				<figure class="image-layer-affect">
            					<img src="/assets/extra-images/child-service-fig02.jpg" alt=""//>
            				</figure>
          				<div class="child_service_text">
                    <figure class="fig-position">
                      <img src="/assets/images/service-top-fig03.png" alt=""//>
                    </figure>
          					<h5>$Chid Education Always<br/> Ideas For Knoweledge</h5>
          					<ul class="child_service_info">
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					  <li><a href="#"><i class="fa fa-calendar"></i>10 October,2021</a></li>
          					</ul>
          				</div>
          			  </div>
          </div>  
          </div>  
        </section>  */}

         <Footer/>
        </div> 

    );
}

export default Home;