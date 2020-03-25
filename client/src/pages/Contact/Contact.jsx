import React from 'react';

import './Contact.scss';

function Contact() {
  return (
    <div className="contact-page">
      <div>
        <h1 className="title">CONTACT PAGE</h1>

        <h2 className="label">Name</h2>
        <p className="text">Yode</p>

        <h2 className="label">Phone Number</h2>
        <p className="text">+1 555 555 5555</p>

        <h2 className="label">Location</h2>
        <p className="text">Unknown</p>
      </div>
    </div>
  );
}

export default Contact;
