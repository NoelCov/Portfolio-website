import React, { useState } from "react";
import emailjs from "emailjs-com";
import Success from "./Success";

function Contact() {
    const [success, Setsuccess] = useState(false);
    const [error, Seterror] = useState(false);

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_j999cxb', 'template_7egnoad', e.target, 'user_4FICbE7bqdEZNokpVB33i')
          .then((result) => {
              console.log(result.text);
              Setsuccess(true);
          }, (error) => {
              console.log(error.text);
              Setsuccess(false);
              Seterror(true);
          });
          e.target.reset()
    }

    return (
        <div className="contact-container">
            {success ? 
                <Success />
              : 
                <div>
                    {error ? <h2 className="contact-title">Message could not be sent. Try again please</h2> :<h2 className="contact-title">Thank you for your interest!</h2>}
                    <hr style={{width: "15%"}} />
                    <form onSubmit={sendEmail} autoComplete="off" className="form">
                    <div className="contact-form">
                        <input required type="text" className="form-control" placeholder="Your name" name="name"/>
                        <input required type="email" className="form-control" placeholder="Your email" name="email" />
                        <input required type="text" className="form-control" placeholder="Subject" name="subject" />
                        <textarea required className="form-control" rows="10" placeholder="Your message" name="message"></textarea>
                        <button type="submit" className="btn btn-outline-light" style={{width: "200px"}}>Send message</button>
                    </div>
                    </form>
                </div>
                }
        </div>
    )
};

export default Contact;