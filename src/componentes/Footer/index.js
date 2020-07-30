import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.Qwerty.com.br/">
        <img src="https://www.Qwerty.com.br/assets/img/Qwerty-logo-white.1570550707.svg" alt="Logo Qwerty" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.Qwerty.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
