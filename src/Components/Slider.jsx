import React from 'react'
import styled from 'styled-components'
import Updates from './Updates'

const Container = styled.div`
    background: url('https://www.blogtyrant.com/wp-content/uploads/2020/03/free-images-for-blog.png');
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export default function Slider() {
  return (
    <Container>
        <Updates/>
    </Container>
  )
}
