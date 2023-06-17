import React from 'react'
import styled from 'styled-components'
import {updates} from '../data'
export default function Updates() {

  const Container = styled.div`
    
    padding: 20px;
    margin-top: 0;
    
  `

  const UpdateContainer = styled.div`
    text-decoration: underline;
    font-size: 15px;
    
    
  
  `
  
  const updateList = updates.map((item) => {
    return (
      <UpdateContainer>
        <h3> {item.text}</h3>
       
      </UpdateContainer>
    )
  })
  return (
    <Container>
      {/* <Heading>Updates</Heading> */}
      {updateList}
    </Container>
  )
}
