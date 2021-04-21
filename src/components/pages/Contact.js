import React, { useState } from "react";

export default function Contact() {
    const [ email, setEmail ] = useState('')

    const handleEmail = (e) => { setEmail(e.target.value)}

  return (
    <>
      <div className="contact-me">
        <div className="form-popup myForm">
          <form>
            <label>
              Email
              <input
                type="text"
                value={email}
                onChange={handleEmail}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <h1>Let's work together!</h1>
        <p>We can make the world a better place</p>
        <p>If they gave us the source code!</p>
      </div>
    </>
  );
}
