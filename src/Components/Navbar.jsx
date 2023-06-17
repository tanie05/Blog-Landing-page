import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  
  background-color: #edf7f6;
  display: flex;
  padding: 5px;
  /* box-shadow: 2px 2px #e2dbdb; */
  height: max-content;
  
`
const Left = styled.div`
  flex: 1;
  
`
const Center = styled.div`
  
  flex:1;
  display: flex;
  padding: 5px;
`
const Menuitem = styled.div`
  
  padding: 10px;
  font-size: 15px;
  text-align: center;
  flex: 1;
  cursor: pointer;
  
`
const Right = styled.div`
  flex:1;
  display: flex;
  justify-content: flex-end;
`
const Logo = styled.h1`
  margin: 0;
  cursor: pointer;
`
const About = styled.div`
  width: 25%;
  text-align: center;
  padding: 10px;
  cursor: pointer;
`


export default function Navbar() {
  return (
    <Container>
      <Left>
        <Logo>OST</Logo>
      </Left>
      <Center>
        <Menuitem>HOME</Menuitem>
        <Menuitem>JOBS</Menuitem>
        <Menuitem>BLOGS</Menuitem>
      </Center>
      <Right>
        <About>ABOUT US</About>
      </Right>
    </Container>
  )
}
