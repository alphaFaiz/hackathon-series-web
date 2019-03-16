import React from 'react';
import {Navbar, Container} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
          <Navbar color = 'dark' className='mb-3'>
            <Container>
              <Link to={'/'} className = 'col-4'>
                <div style={{color: 'yellow'}}>HOME</div>
              </Link>
              <Link to={'/posts/'} className = 'col-4'>
                <div style={{color: 'yellow'}}>GAMES</div>
              </Link>
              <Link to={`/about/`} className = 'col-4'>
                <div style={{color: 'yellow'}}>ABOUT</div>
              </Link>
            </Container>
          </Navbar>
      </div>
    );
};

export default NavBar;