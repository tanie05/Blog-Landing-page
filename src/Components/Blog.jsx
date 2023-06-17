import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    /* background-color: #faf8f8; */
    padding: 10px;
    margin: 30px;
`
const Title = styled.div`
    
    padding: 5px;
    font-size: 50px;
    
`
const Description = styled.div`
    
    padding: 10px;
    font-size: 30px;
`
const Image = styled.img`
   
   width: 600px;
   height: 500px;
   margin: 10px 0px;
   padding: 10px;
   object-fit: cover;
`
const InfoContainer = styled.div`
    
    display: flex;
`
const Info = styled.div`
   
    padding: 5px;
    font-size: 20px;
    flex: 1;
`

const BlogText = styled.div`
    
    padding: 10px;
    font-size: 20px;
    height: 200px;
    overflow: hidden;
`
export default function Blog({item}) {
  return (
    <Container>
      <Title>
        {item.title}
      </Title>
      <Description>{item.desc}
      </Description>
      <InfoContainer>
      <Info>{item.author} | {item.date}</Info>
      </InfoContainer>
      
      <Image src= {item.image} />
      
      <BlogText>
        {item.content}
      </BlogText>
      <hr/>
    </Container>
  )
}
