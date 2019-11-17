import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import programs from '../programs';
import Radio from '@material-ui/core/Radio';
import SignOutHeader from './SignOutHeader'

function SelectProgram() {
  const [selectedValue, setSelectedValue] = React.useState('1');
  const handleChange = event => {
    setSelectedValue(event.target.value);
  };
  const renderPrograms = () => {
    let i = 0;
    return programs.map((program) => {
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
            <strong>{program.title}:</strong> {program.description}
          </label>
        </Li>
        )
    })
  }
  return (
    <Div>
      <SignOutHeader />
      <Content>
      <div>
      <H2>Select Program</H2>
        <h4>Welcome William Smith</h4>
        <h3>Select from your available Training Programs:</h3>
        <form>
          <ul>
            {renderPrograms()}
          </ul>
        </form>
        <Link to='/program' style={{ textDecoration: 'none' }}>
          <SButton>
            <Button variant="contained" color="primary">
              Begin Program
            </Button>
          </SButton>
        </Link>
        </div>
      </Content>
    </Div>

  );
}

export default SelectProgram;

const Li = styled.li`
  margin-bottom: 10px;
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
