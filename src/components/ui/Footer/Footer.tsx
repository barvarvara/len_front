import React from 'react';
import './Footer.scss'
import Logo from '../Logo';

export type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="container-footer">
      <Logo addStyle="footer__logo" />

      <p className="copyright">
        &copy; 2023 Гончарная Студия "Лён"
      </p>

      <ul className="footer__contacts">
        <li><p className="footer__contact-link footer__contact-link_phone">8-980-394-75-30</p></li>
        <li><a href="https://vk.com/len_goncharka" className="footer__contact-link">Вконтакте</a></li>
        <li><a href="https://wa.me/79803947530" className="footer__contact-link">WhatsApp</a></li>
        <li><a href="https://t.me/len_goncharka" className="footer__contact-link">Telegram</a></li>
      </ul>
    </footer>
  );
}

export default Footer;