import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import programs from '../programs'
import SignInHeader from './SignInHeader'

const licenses = [
  {
    title: "OCS-1",
    description: "How to Survive an OSHA Inspection",
    licenses: "50"
  },
  {
    title: "OCS-2",
    description: "30 Common OSHA Citations you can easily avoid (Cal/OSHA - Construction)",
    licenses: "40"
  },
]

function Employer() {
  const renderPrograms = () => {
    return programs.map((program) => {
      return (
        <Program>
          <Number>
            <TextField
              id="standard-number"
              type="number"
              margin="normal"
              defaultValue="0"
            />
          </Number>
          <ProgramDetails>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <DescriptionButton>
              <Button variant="contained" color="default">Program Description</Button>
            </DescriptionButton>
          </ProgramDetails>
      </Program>
    )
    })
  }
  const renderLicenses = () => {
    return licenses.map((license) => {
      return (
        <Program>
          <Number>
            <strong>{license.licenses}</strong>
          </Number>
          <ProgramDetails>
            <h3>{license.title}</h3>
            <p>{license.description}</p>
            <DescriptionButton>
              <Button variant="contained" color="default">Program Description</Button>
            </DescriptionButton>
          </ProgramDetails>
      </Program>
    )
    })
  }
  return (
    <Div>
      <SignInHeader />
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Back>
          Back
        </Back>
      </Link>
      <Content>
        <h3>Current Licenses</h3>
        <ul>
          {renderLicenses()}
        </ul>
      </Content>
      <Content>
        <h3>Purchase More Licenses</h3>
        <h4>Each license allows one person to train, take a test, and recieve a certification</h4>
        Please enter the amount of Licenses to purchase:
        <ul>
          {renderPrograms()}
        </ul>
        <ButtonsContainer>
          <Link to='/purchasemodal' style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Open Purchase Window
            </Button>
          </Link>
        </ButtonsContainer>

      </Content>
    </Div>

  );
}

export default Employer;

const H1 = styled.h1`
`
const H2 = styled.h2`
`
const Program = styled.div`
  display: flex;
  background-color: whitesmoke;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
`
const Number = styled.div`
  padding: 15px;
  width: 45px;
`
const DescriptionButton = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
`
const ProgramDetails = styled.div`
  width: 400px;
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  padding: 50px;
`
const Content = styled.div`
  width: 600px;
`
const Back = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  color: white;
  text-decoration: none;
  z-index: 2000;
`
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`
