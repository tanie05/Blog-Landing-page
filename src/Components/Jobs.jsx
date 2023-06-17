import React from 'react'
import {jobs} from '../data'
import styled from 'styled-components'

const Container = styled.div`
  
`
const Job = styled.div`
  
  text-align: left;
  margin: 0px;
`
const Heading = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0;
`
const joblist = jobs.map((job) => {

  return (
    <Job>
      <h3 style={{margin: "0px 25px",}}>{job.role}</h3>
      <ul>
        <li>{job.type}</li>
        <li>{job.stripend}</li>
        <li>{job.location}</li>
      </ul>
      
      <hr/>
    </Job>
    
  )

})
export default function Jobs() {
  return (
    <Container>
      <Heading>JOBS</Heading>
      <hr/>
      {joblist}
    </Container>
    
  )
}
