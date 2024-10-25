import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { stateMenuActive, stateUserDate } from "src/store/atom.js";
import links from "./links.json";
import { removerToken } from "src/http/http";

const ContainerSidebar = styled.div`
  background: #20202a;
  box-sizing: border-box;
  box-shadow: .1875rem .0625rem .625rem -0.5625rem #000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.$menuActive ? "0px" : "-304px")};
  padding: .5rem;
  overflow-x: auto;
  transition: .5s;
  width: 300px;
  z-index: 99;

  span {
    float: right;
    padding: .5rem;
  }

  @media (min-width: 992px) {
    left: 0px;

    span {
      display: none;
    }
  }
`;

const MenuHeader = styled.div`
  background: #20202a;
  text-align: center;
  line-height: 1.125rem;
  margin-top: 2.5rem;
  padding-bottom: 2.125rem;
  border-bottom: .0625rem solid #100f0f;
  border-bottom-left-radius: .625rem;
  border-bottom-right-radius: .625rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #f5f5f5;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info-site {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 228px;
    text-align: center;
  }
`;

const MenuBody = styled.div`
  margin-top: 2.1875rem;

  ul li a {
    cursor: pointer;
    display: block;
    background: #20202a;
    padding: 1rem 1rem 1rem 1.875rem;
    border-top-left-radius: .625rem;
    border-bottom: .125rem solid #2a2b37;
    border-bottom-left-radius: .625rem;
    border-bottom-right-radius: .625rem;
    text-transform: uppercase;
  }

  ul li a:hover {
    background-color: #1f3349;
    border-right: .4375rem solid #275680;
    border: none;
  }

  .active {
    background-color: #428534!important;
    border-right: .4375rem solid #4eac3a!important;
    border: none;
  }

  .dropdown__item {
    display: flex;
    justify-content: space-between;
    gap: .375rem;
  }

  .dropdown__item div {
    text-wrap: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .dropdown {
    display: none;
  }

  .dropdown__active {
    display: block;
  }

  .menu-config {
    padding-left: 3rem;
  }
`;

export default function Sidebar() {
  const [menuActive, setMenuActive] = useRecoilState(stateMenuActive);
  const [submenuActive, setSubmenuActive] = useState('');
  const navigate = useNavigate();
  const userDate = useRecoilValue(stateUserDate);

  const handleLogout = () => {
    removerToken();
    navigate('/');
  }
  
  return (
    <ContainerSidebar $menuActive={menuActive}>
      <span onClick={() => setMenuActive(!menuActive)}>X</span>

      <MenuHeader>
        <button onClick={handleLogout}>
          <i className="fas fa-external-link-alt" aria-hidden="true"></i> Sair
        </button>
        <div className="user-info">
          <p>Cliente: {userDate.id} - {userDate.name}</p>
          <p className="info-site">Site: {userDate.id} - {userDate.email}</p>
        </div>
      </MenuHeader>

      <MenuBody>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              {link.subOptions ? (
                <div key={index}>
                  <a className="dropdown__item" onClick={() => setSubmenuActive(index === submenuActive ? '' : index)}>
                    <div>
                      <i className={link.iconClassCategory}></i> {link.text} 
                    </div>
                    <i className={`fa-solid ${submenuActive === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </a>

                  <ul className={`${submenuActive === index ? 'dropdown__active' : 'dropdown'}`}>
                    {link.subOptions.map((subLink, index) => (
                      <li key={index} >
                        <NavLink className="menu-config" to={subLink.href} end onClick={() => setMenuActive(!menuActive)}>
                          <i className={subLink.iconClass}></i> {subLink.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink to={link.href} end 
                  onClick={() => {
                    setMenuActive(!menuActive);
                    setSubmenuActive('');
                  }}
                >
                  {link.ionIcon ? (
                    <ion-icon name={link.ionIcon} role="img" className="md hydrated"></ion-icon>
                  ) : (
                    <i className={link.iconClass}></i>
                  )}{" "}
                  {link.text}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </MenuBody>
    </ContainerSidebar>
  );
}
