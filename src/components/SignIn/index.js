import React from 'react';
import {
  Container,
  FormInput,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormButton,
  Text,
  FormTextArea,
} from './SignInElements';
import logo from '../../images/websiteLogo.svg';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>
            <img src={logo} alt='' style={{ width: '190px' }} />
          </Icon>
          <FormContent>
            <Form name='contact' method='POST' data-netlify='true'>
              <FormH1>Want to contact me? ⬇️</FormH1>
              <input type='hidden' name='form-name' value='contact' />
              <FormLabel htmlFor=''>Email</FormLabel>
              <FormInput
                type='email'
                placeholder='Enter Email'
                name='email'
                id='email'
                required
              />
              <FormLabel htmlFor=''>Message</FormLabel>
              <FormTextArea
                placeholder='Your message here....'
                type='textarea'
                name='message'
                id='message'
                required
              />
              <FormButton type='submit'> Send </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
