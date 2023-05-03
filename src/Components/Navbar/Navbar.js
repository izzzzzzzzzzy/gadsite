import './Navbar.css';
import React from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBContainer,
    MDBBtn
} from 'mdb-react-ui-kit';
import "mdb-react-ui-kit/dist/scss/free/_variables.scss"

function Navbar() {

    return (
        <MDBNavbar expand='lg' light bgColor='success' sticky>
            <MDBContainer fluid>
                <MDBNavbarNav right className='mb-2 mb-lg-0'>
                    <MDBNavbarItem active>
                        <MDBNavbarLink aria-current='page' href='#'>
                            Home
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='#'>News</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='#'>Issues</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='#'>About</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='#'>Join</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='#'>More</MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>

                <form className='d-flex input-group w-auto'>
                    <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                    <MDBBtn color='primary'>Search</MDBBtn>
                </form>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Navbar;