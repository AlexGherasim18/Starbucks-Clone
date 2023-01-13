import { useState } from "react";
import { SignUpContainer, FormContainer} from "./sign-up-form.styles";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, {firstName, lastName})
      // console.log(result)
      resetFormFields()
    } catch(error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
  }
  return (
    <SignUpContainer>
      <h2>Create an account</h2>
      <br /> <br />
      <span>Starbucks&copy; Rewards</span>
      <br />
      <span>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and <a href="/">more</a></span>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <span>* indicates required field</span>
          <br /> <br />
          <h3>Personal Information</h3>
          <FormInput label="* First Name" name="firstName" required type="text" onChange={handleChange} value={firstName}/>
          <FormInput label="* Last Name" name="lastName" required type="text" onChange={handleChange} value={lastName}/>
          <h3>Account security</h3>
          <FormInput label="* Email address" name="email" required type="email" onChange={handleChange} value={email}/>
          <FormInput label="* Password" name="password" required type="password" onChange={handleChange} value={password}/>

          <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.signUpButton}>Create Account</Button>
        </form>
      </FormContainer>
    </SignUpContainer>
  )
};

export default SignUp;