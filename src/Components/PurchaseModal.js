import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import TextField from '@material-ui/core/TextField';

function Purchase() {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();
  return (
    <Div>
      <Link to='/purchase' style={{ textDecoration: 'none' }}>
        <GreyDiv>
        </GreyDiv>
      </Link>
      <Modal>
        <h2>
          Purchase Modal
        </h2>
        <div>
        Purchase Summary
        </div>
        <div>
          <STextField
            id="outlined-basic"
            label="Name on Card"
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <STextField
            id="outlined-basic"
            label="Address"
            margin="normal"
            variant="outlined"
          />
        </div>
        <InputDiv>
          <PaymentInputsWrapper {...wrapperProps}>
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps()} />
            <input {...getExpiryDateProps()} />
            <input {...getCVCProps()} />
          </PaymentInputsWrapper>
        </InputDiv>
        <Button variant="contained" color="primary">
          Process Payment
        </Button>
      </Modal>
    </Div>

  );
}

export default Purchase;

const H1 = styled.h1`
`
const H2 = styled.h2`
`
const Div = styled.div`
  background-color: grey;
  width: 100vw;
  height: 100vh;
`
const Modal = styled.div`
  text-align: center;
  position: fixed;
  top: 20%;
  left: 30%;
  background-color: white;
  width: 500px;
  height: 500px;
`
const GreyDiv = styled.div`
  height: 100%;
  opacity: .3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  padding: 50px;
`
const Content = styled.div`
  width: 600px;
`
const STextField = styled(TextField)`
  width: 335px;
  padding-top: 0;
`
const InputDiv = styled.div`
  margin: 16px;
`
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
