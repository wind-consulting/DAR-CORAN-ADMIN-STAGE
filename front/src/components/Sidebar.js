import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as IconName  from "react-icons/im";

import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Login from '../pages/Login';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: left;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 180px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav style={{    width: '100%'}}>
          <NavIcon to='#'>
          <FaIcons.FaBars onClick={showSidebar} />
     
          </NavIcon>
          <div style={{display: 'flex',    width: '90%',
    flexDirection: 'row',    justifyContent: 'flex-end'}}><NavIcon to='#'>
            
          <div className="search">
                  <form class="form-inline">
                   <input class="form-control mr-sm-2" type="search" placeholder="Search " aria-label="Search"/>
                  
                  </form>
                </div>    
                </NavIcon>
                
                <NavIcon to='Login'>
      
            <form class="form-center" >
            <ul className="login">
              
          <IconName.ImUsers onClick={Login} />
          </ul>
          </form>
            
          </NavIcon>
        </div>
        
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;