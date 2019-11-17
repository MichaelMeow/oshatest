import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SignInHeader from './SignInHeader'

function Home() {
  return (
    <Div>
      <SignInHeader />
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Back>
          Back
        </Back>
      </Link>
      <Content>
      <div>
      <H2>Certification Sign In:</H2>
        <h4>Use the access code provided by your employer to access your training and test material</h4>
        <TextField
          id="outlined-basic"
          label="Full Name"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Access Code"
          margin="normal"
          variant="outlined"
        />
        <Link to='/selectprogram' style={{ textDecoration: 'none' }}>
          <SButton>
            <Button variant="contained" color="primary">
              Sign In
            </Button>
          </SButton>
        </Link>
        </div>
      </Content>
      <Content>
      <div>
        <H2>Admin Sign In:</H2>
        <h4>Manage and purchase licenses</h4>
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          margin="normal"
          variant="outlined"
        />
        <Link to='/employer' style={{ textDecoration: 'none' }}>
          <SButton>
            <Button variant="contained" color="default">
              Sign In
            </Button>
          </SButton>
        </Link>
      </div>
      </Content>
    </Div>

  );
}

export default Home;

const H1 = styled.h1`
`
const H2 = styled.h2`
  margin-bottom: 0;
  margin-top: 40px;
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  padding: 50px;
`
const Content = styled.div`
  border-radius: 4px;
  background-color: whitesmoke;
  padding: 20px 50px 40px 50px;
  width: 300px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Back = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  color: white;
  z-index: 2000;
`
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const SButton = styled.div`
  margin-top: 20px;
`
