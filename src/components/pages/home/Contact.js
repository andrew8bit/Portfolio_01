import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ContactModal } from "../../partials";

export default function Contact() {
  const [showContactModal, setShowContactModal] = useState(false);

  const openContactModal = () => {
    setShowContactModal((prev) => !prev);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_izq149d",
        "template_imyjhzg",
        e.target,
        "user_dX0kwQ7s8pvhU698ZTJjA"
      )
      .then(
        (result) => {
          e.target.reset()
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
        );

       
  }

  return (
    <>
      <div className="contact-me">
        
        
        {!showContactModal ? <div className="thankyou"> <h1> Interested in working together? </h1> <h3>Click the prism!</h3> </div>: <div className="thankyou" ><h1>Thanks for reaching out!</h1> <h3> I will get back to you as soon as possible! {'<3'} </h3></div>}

        <div className="contact-container">
        <ContactModal
            showContactModal={showContactModal}
            setShowContactModal={setShowContactModal}
            sendEmail={sendEmail}
          />
          <div className="call-to-action">
        
          <div onClick={openContactModal} className="contact-button">
            ▲
          </div>
            </div>
        </div>
      </div>
    </>
  );
}
