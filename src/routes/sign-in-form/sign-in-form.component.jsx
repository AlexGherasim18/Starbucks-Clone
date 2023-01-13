import { SignUpContainer, FormContainer } from "../sign-up-form/sign-up-form.styles";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button.component";
import { CreateAccount } from "./sign-in-form.styles";
import { useState } from "react";
import { signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: '',
  password: ''
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  };
  
  const handleSubmit = async(event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      window.location.reload(false);
      resetFormFields()
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this Email')  
          break;
        default:
          console.log(error);  
      }
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
  }

  return (
    <SignUpContainer>
      <h2>Sign in or create an account</h2>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <span>* indicates required field</span>
          <br />
          <FormInput type="email" label="* Email address" name="email" value={email} onChange={handleChange}/>
          <FormInput type="password" label="* Password" name="password" value={password} onChange={handleChange}/>
          <br /><br />
          <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.signUpButton}>Sign In</Button>
        </form>
      </FormContainer>
      <CreateAccount>
        <h3>JOIN STARBUCKS® REWARDS</h3>
        <span>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</span>
        <a href="sign-up"><Button buttonType={BUTTON_TYPE_CLASSES.joinNowButton}>Join Now</Button></a>
      </CreateAccount>
    </SignUpContainer>
  )
};

export default SignIn;