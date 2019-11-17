import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import MobileStepper from '@material-ui/core/MobileStepper';
import SignOutHeader from './SignOutHeader'

const options = [
  {
    title: "red",
    value: false
  },
  {
    title: "blue",
    value: false
  },
  {
    title: "green",
    value: true
  },
  {
    title: "yellow",
    value: false
  },
]

function Program() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState('1');
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleChange = event => {
    setSelectedValue(event.target.value);
  };
  const renderOptions = () => {
    let i = 0;
    return options.map((option) => {
      i++;
      return (
        <Li>
          <label>
            <Radio
              checked={selectedValue === `${i}`}
              onChange={handleChange}
              value={`${i}`}
              name="radio-button-demo"
            />
            {option.title}
          </label>
        </Li>
        )
    })
  }
  return (
    <Div>
      <SignOutHeader />
      <MobileStepper
        variant="dots"
        steps={12}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 11}>
            Next
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>
        }
      />
      <Content>
      <div>
        <h4>Chlorophyll</h4>
        <p>Chlorophyll (also chlorophyl) is any of several related green pigments
        found in the mesosomes of cyanobacteria, as well as in the chloroplasts
        of algae and plants.[1] Its name is derived from the Greek words χλωρός,
        khloros ("pale green") and φύλλον, phyllon ("leaf").[2] Chlorophyll is
        essential in photosynthesis, allowing plants to absorb energy from light.
        </p>
        <Img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Plagiomnium_affine_laminazellen.jpeg" alt="chlorophyll" />
        <h3>What color is chlorophyl?</h3>
        <form>
          <ul>
            {renderOptions()}
          </ul>
        </form>
        <Link to='/program' style={{ textDecoration: 'none' }}>
          <SButton>
            <Button variant="contained" color="primary">
              Submit Answer
            </Button>
          </SButton>
        </Link>
        </div>
      </Content>
    </Div>

  );
}

export default Program;

const Li = styled.li`
  margin-bottom: 10px;
  list-style-type: none;
`
const Img = styled.img`
  width: 400px;
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
  width: 500px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const SButton = styled.div`
  margin-top: 20px;
`
