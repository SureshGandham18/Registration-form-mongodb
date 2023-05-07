import React from 'react'
import { useLocation,useNavigation } from 'react-router-dom'
import styled from 'styled-components'
function Home() {
    const location = useLocation()
  return (
    <Homes className='homepage'>
        <h1>Hello {location.state.id} and Welcome to the home</h1>
    </Homes>
  )
}

export default Home
const Homes  = styled.div`
  text-align:center;
  margin-top:20%;
`