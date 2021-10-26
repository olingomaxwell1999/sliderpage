import React from 'react';
import styled from 'styled-components';
import Logo from '../../logo.svg'

const Container = styled.div`
    height: 250px;
    width: 100%;
    display: flex;
    align-items: center;
`;

const Col = styled.div`
    flex:1;
    padding: 10px 20px;
    display: flex;
    flex-direction:column;
    align-items:left;
`;

const Img = styled.img`
    height: 100px;
    width: 70%;
    object-fit:cover;
`;

const Coltitle = styled.h3`
    font-size:20px;
    text-transform: uppercase;
    font-weight:600;
    color:red;
    text-align:centre;
`; 

const Links = styled.p`
    font-size:15px;
    color:white;
    font-weight:400;
    text-transform: capitalize;
`;

const Footer = () => {
    return (
        <Container>
            <Col>
                <Img  src={Logo} alt="logo" />
            </Col>
            <Col>
                <Coltitle>quick links </Coltitle>
                <Links>home</Links>
                <Links>kids</Links>
                <Links>movies</Links>
                <Links>series</Links>
            </Col>
            <Col>
                <Coltitle>genre</Coltitle>
                <Links>action</Links>
                <Links>drama</Links>
                <Links>saga</Links>
                <Links>comedy</Links>
            </Col>
        </Container>
    )
}

export default Footer;
