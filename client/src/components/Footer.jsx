import React, { Component } from 'react';
import { Navbar, Container, NavbarBrand } from 'reactstrap';


class Footer extends Component {
    render() {
        return (
            <div className='mt-5'>
                <Navbar color='dark'>
                    <Container>
                        <NavbarBrand className='col-4' href="/"><img className='img-fluid' src='https://upload.wikimedia.org/wikipedia/commons/1/13/Persona_PSP_logo.svg' alt=''/></NavbarBrand>
                        <p style={{fontSize:'2vw', textAlign:'center', color:'white'}}>©2019 </p>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Footer;