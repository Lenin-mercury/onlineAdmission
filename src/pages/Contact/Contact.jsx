import React from "react";

import "./contact.scss";

function Index(props) {
  return (
    <>
    <div className="contact">
      <div className="contact__header">
      <h1 className="contact__header--text">Contact Us</h1>

      </div>
      <div className="contact__container">
        <div className="contact__left">
            <h2 className="contact__left--text">Campus Address</h2>
            <div className="contact__file">
                <i className="fas fa-envelope contact__file--icon"></i>
                <p className="contact__file--text">22, 1st Main Road, Vadapalani, Chennai-600026</p>
                </div>
            <div className="contact__file">
            <i className="fa fa-phone-square contact__file--icon"></i>
                <p className="contact__file--text">044 - 2662 3377, 044 - 2662 3045</p>
                </div>
            <h2 className="contact__left--text">Information Centre</h2>
            <div className="contact__file flex-column">
                <p className="contact__file--text">Phone: +91-44-2745 6510, +91-44-4743 6500 </p>
                <p className="contact__file--text">infodesk@college.edu.in</p>
                <p className="contact__file--text">Science & Humanities and Medicine and Health Sciences Helpline: 044 6738 0900</p>
            </div>
        </div>

      <div className="contact__right">
       <h1 className="contact__right--heading text-center" >Quick Enquiry</h1>
       <form action="submit" className="contact__form">
         
         <div className="contact__form--group">
           <label htmlFor="name"> Name <span className="contact__form--req" >*</span> </label>
           <input type="text" className="contact__form--input" name="name" placeholder="Your Name"/>
         </div>

         <div className="contact__form--group">
           <label htmlFor="email"> Email <span className="contact__form--req" >*</span> </label>
           <input type="text" className="contact__form--input" name="Email" placeholder="Your Email Address"/>
         </div>

         <div className="contact__form--group">
           <label htmlFor="Phone"> Phone <span className="contact__form--req" >*</span> </label>
           <input type="text" className="contact__form--input" name="Phone" placeholder="Enter Your Phone"/>
         </div>

         <div className="contact__form--group">
           <label htmlFor="email"> Message <span className="contact__form--req" >*</span> </label>
           <textarea name="Message" className="contact__form--input" id="" cols="15" rows="3" placeholder="Tell us a few lines about your enquiry...."></textarea>
         
         </div>

         <button type="submit" className="contact__form--button">
           Get Connected
         </button>



       </form>

      </div>

      </div>


    </div>
    </>
  );
}

export default Index;
