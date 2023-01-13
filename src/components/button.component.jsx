import { BaseButton, DarkButton, LightGreen, DarkGreen, SignUpButton, JoinNowButton, ErrorRed, TrueGreen } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  dark: 'dark',
  lightGreen: 'lightGreen',
  darkGreen: 'darkGreen',
  signUpButton: 'signUpButton',
  joinNowButton: 'joinNowButton',
  errorRed: 'errorRed',
  trueGreen: 'trueGreen'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.dark]: DarkButton,
    [BUTTON_TYPE_CLASSES.lightGreen]: LightGreen,
    [BUTTON_TYPE_CLASSES.darkGreen]: DarkGreen,
    [BUTTON_TYPE_CLASSES.signUpButton]: SignUpButton,
    [BUTTON_TYPE_CLASSES.joinNowButton]: JoinNowButton,
    [BUTTON_TYPE_CLASSES.errorRed]: ErrorRed,
    [BUTTON_TYPE_CLASSES.trueGreen]: TrueGreen
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>{children}</CustomButton>
  )
};

export default Button;