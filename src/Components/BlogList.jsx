import React from 'react'
import { blogs } from '../data'
import styled from 'styled-components'
import Blog from './Blog'
const Container = styled.div`
  
`

export default function BlogList() {
  return (
    <Container>
      {blogs.map((item) => (
        <Blog item={item} key={item.id} />
      ))}

    </Container>
      
  )
}
