import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
    return (
        <div style={{ borderBottom: '5px #ccc solid' }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="http://localhost:3000/">Jeff's Board of Scores</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <NavbarContainer className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">NBA <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">NFL <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">MLB <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">MLS <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">NHL <span className="sr-only">(current)</span></a>
      </li>
      <div className="divider" />
      <li className="nav-item active">
        <a className="nav-link" href="#">Source Code <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
      </li>
    </ul>
  </NavbarContainer>
</nav>
        </div>
    )
}

export default Navbar

// Navbar Container
const NavbarContainer = styled.div`
.nav-link {
    &:hover {
        background: var(--light-green);
    }
}
.divider {
    border-left: 3px solid #277;
    height: 40px;
}
`;