import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import '../styles/Contact.css'

const ContactInfo = () => {
  return (
    <section id='contact' className="contact-info">
        <div className='title'>
            <span>CONTACT</span>
            <h2>Let's Connect</h2>
            <img className='divider' src='divider.svg'/>
        </div>
        <div className="info-items">
          <InfoItem icon={<MapPin className="icon" />} text="CA, USA 99544" />
          <InfoItem icon={<Mail className="icon" />} text="hey@iammaishaleonard.com" />
          <InfoItem icon={<Phone className="icon" />} text="112-444-3900" />
        </div>
        <div className="social-icons">
          <SocialIcon icon={<Facebook />} href="https://facebook.com" />
          <SocialIcon icon={<Twitter />} href="https://x.com" />
          <SocialIcon icon={<Instagram />} href="https://instagram.com" />
          <SocialIcon icon={<Linkedin />} href="https://linkedin.com" />
        </div>
    </section>
  );
};

const InfoItem = ({ icon, text }) => (
  <div className="info-item">
    <div className="icon-wrapper">{icon}</div>
    <span className="info-text">{text}</span>
  </div>
);

const SocialIcon = ({ icon, href }) => (
  <a href={href} className="social-icon">
    {React.cloneElement(icon, { size: 24 })}
  </a>
);

export default ContactInfo;