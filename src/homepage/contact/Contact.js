import React from 'react';
import './contact.css';



function Contact(){
  
return(

<div className="contact_us">
            <div className="contact_title">
                <h2>SAZINĀTIES AR MUMS</h2>
            </div>
            <form action="/" className="contact_us_form">
                <div className="form_group"  id="name_email">
                    <input type="text" className="name" name="name" placeholder="Vārds, Uzvārds*" />
                    <input type="email" className="email" name="email" placeholder="E-pasts*" />
                </div>
                <div className="form_group">
                    <input type="number" className="phonenumber" name="number" placeholder="Telefons*" />
                </div>
                <div className="form_group">
                <textarea name="contact_area" className="contact_area" id="contact_area" cols="50" rows="0"
                          placeholder="Jautājums, vai komentārs*"></textarea>
                 
                </div>
                <div className="form_group" id="ob_star">   <p>* obligāti aizpildāmie lauki</p></div>
                <div className="form_group" style={{marginTop:"32px"}}>
                <input type="checkbox"/>
                    <p> Piekrītu, ka mani dati tiks izmantoti likumdošanā noteiktā kārtībā un tiks
                        saglabāti līdz brīdim, kamēr tas būs nepieciešams.</p>
                </div>

               
                    <button className="contact_btn">
                        <a href="/">Sūtīt</a>
                    </button>
               
            </form>
        </div>
       
    )
}


export default Contact;