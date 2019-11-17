import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const SignOutHeader = () => (
  <Bar>
  <Link to='/signin' style={{ textDecoration: 'none' }}>
    <SignIn>
      Sign Out
    </SignIn>
  </Link>
  </Bar>
)

export default SignOutHeader

const Bar = styled.div`
  z-index: 200;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 64px;
  background-color: #1976d2;
`
const SignIn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  text-decoration: none;
`
