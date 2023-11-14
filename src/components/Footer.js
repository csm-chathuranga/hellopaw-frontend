
function Footer() {
    return (
            <>
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
               <figure><img src="/assets/images/top-logo01.png"/></figure>
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
</>
    );
}

export default Footer;