import React from 'react'
import styled from 'styled-components';

const Main = () => {
    return (
        <div className="main">
        <MainContainer>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                <button className="button">NBA</button>
                <div className="divider" />
                <button className="button">NFL</button>
                <div className="divider" />
                <button className="button">MLB</button>
                <div className="divider" />
                <button className="button">MLS</button>
                <div className="divider" />
                <button className="button">NHL</button>
                <div className="divider" />
                </li>
            </ul>
        </MainContainer>
        </div>
    )
}

export default Main

// Main Container
const MainContainer = styled.div`
margin: 0;
position: absolute;
top: 50%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%);

.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    &:hover {
        background: var(--light-green);
    }
  }
  .divider{
    width:5px;
    height:auto;
    display:inline-block;
}
.main {
        margin: 0;
        background: yellow;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%); 
} 
`;
