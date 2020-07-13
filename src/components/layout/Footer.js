import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <div>
            <FooterContainer>
            <ul className="navbar-nav mc-auto">
      <li className="nav-item active">
        <a className="nav-link" href="https://www.linkedin.com/in/jephtey-adolphe-160166147/">LinkedIn <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="https://github.com/JephteyAdolphe">GitHub <span className="sr-only">(current)</span></a>
      </li>
    </ul>
        </FooterContainer>
        </div>
    )
}

export default Footer

// Footer Container
const FooterContainer = styled.footer`
    background: #344;
    height: 4rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%
`;
