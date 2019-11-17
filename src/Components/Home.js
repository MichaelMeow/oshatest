import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import programs from '../programs';
import logo from '../images/logo.jpg'
import SignInHeader from './SignInHeader'

function Home() {
  const renderPrograms = () => {
    return programs.map((program) => {
      return (<li>{program.title}: {program.description}</li>)
    })
  }
  return (
    <Div>
      <SignInHeader />
      <Logo>
        <div>
          <img src={logo} alt="OSHA compliance services logo"/>
        </div>
        <div>
          <H1>OSHA Compliance Services</H1>
          <H2>Training and Certification Programs</H2>
        </div>
      </Logo>
      <Content>
        <h3>Available Programs:</h3>
        <h4>Each program includes both training and exams</h4>
        <ul>
          {renderPrograms()}
        </ul>
        <ButtonsContainer>
          <Link to='/purchase' style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Purchase Licenses
            </Button>
          </Link>
        </ButtonsContainer>

      </Content>
      <Content>
      <h3>Already have a License?</h3>
        <Link to='/signin' style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Sign In
          </Button>
        </Link>
      </Content>
    </Div>

  );
}

export default Home;

const H1 = styled.h1`
margin: 0;
`
const H2 = styled.h2`
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  padding: 50px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 60px;
`
const Content = styled.div`
  border-radius: 4px;
  background-color: whitesmoke;
  padding: 20px 50px 40px 50px;
  width: 600px;
  margin: 10px;
`
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 20px 20px 20px;
`
