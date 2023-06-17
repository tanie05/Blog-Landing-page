import React from 'react'
import styled from 'styled-components'
import { news } from '../data'

const Container = styled.div`
  padding: 10px;
`

const Heading = styled.h1`
  text-align: center;
  text-decoration: underline;
  margin-top: 0;
`
const NewsContainer = styled.div`
  display: flex;
  height: 160px;
  flex: 2;
`
const ContentContainer = styled.div`
  
  margin: 0px 10px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Image = styled.img`
  width: 150px;
  height: 150px;
  flex: 1;
  
`
const Title= styled.div`
  font-size: 25px;
  font-weight: bold;
  
`
const Author = styled.div`
  font-size: 15px;
  
  
`
const newlist = news.map((obj) =>{
  return (
    <div>
      <NewsContainer>
      <Image src={obj.image} />
      <ContentContainer>
          <Title>
            {obj.title}
          </Title>
          <Author>
            {obj.author} | {obj.date}
          </Author>
      </ContentContainer>
      
    </NewsContainer>
    <hr/>
    </div>
    
  )
})
export default function Newsfeed() {
  return (
    <Container>
      <Heading>
        Newsfeed
      </Heading>
      {newlist}
    </Container>
  )
}

