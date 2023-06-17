import styled from "styled-components";
import React from "react";  
  
  const Container = styled.div`
    display: flex;
    background-color: #a28089;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
 
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
 
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
   
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>OST.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
        </Left>
        
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            622 sector 25 , Chandigarh, 160015
          </ContactItem>
          <ContactItem>
            +91 234 56 78
          </ContactItem>
          <ContactItem>
            contact@ost.com
          </ContactItem>
          
        </Right>
      </Container>
    );
  };
  
  export default Footer;