import React, { useRef, useEffect, useCallback } from "react";
import { GrClose } from "react-icons/gr";
import { RiMailCheckLine } from "react-icons/ri";
import { AiOutlineDownload } from "react-icons/ai";

export default function ContactModal({
  showContactModal,
  setShowContactModal,
}) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowContactModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showContactModal) {
        setShowContactModal(false);
      }
    },
    [setShowContactModal, showContactModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showContactModal ? (
        <div className="modal-background" onClick={closeModal} ref={modalRef}>
          <div className="modal-wrapper" showContactModal={showContactModal}>
            <div className="modal-img">
              <div>
                <p>Andrewbith@gmail.com</p>
                <p>
                  <a href="mailto:andrewbith@gmail.com" target="blank">
                    <RiMailCheckLine size="2em" />
                  </a>
                </p>
              </div>
              <div>
                <p>Resume</p>
                <p>
                  <a href="mailto:andrewbith@gmail.com" target="blank">
                    <AiOutlineDownload size="2em" />
                  </a>
                </p>
              </div>
            </div>
            <div className="modal-content">
              <form action="#" className="contact-form">

                <div className="name-email">

                  <div className="name">
                    <label for="name"></label>
                    <input
                      type="text"
                      placeholder="MY NAME IS"
                      name="name"
                      id="name_input"
                      required
                    />
                  </div>

                  <div className="email">
                    <label for="email"></label>
                    <input
                      type="email"
                      placeholder="MY EMAIL IS"
                      name="email"
                      id="email_input"
                      required
                    />
                  </div>

                </div>

                <div className="subject">
                  <input type="text" placeholder="SUBJECT" className="subject" id="subject_input" required/>
                </div>

                <div className="message">
                  <label for="message"></label>
                  <textarea
                    name="message"
                    placeholder="I'D LIKE TO CHAT ABOUT"
                    id="message_input"
                    cols="30"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div className="submit">
                  <input type="submit" value="Send Message" id="form_button" />
                </div>

              </form>
            </div>
            <button
              className="close-modal-btn"
              onClick={() => setShowContactModal((prev) => !prev)}
            >
              <GrClose />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
