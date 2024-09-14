const firebaseErrors = [{
  //https://firebase.google.com/docs/reference/js/auth#autherrorcodes
  key: 'auth',
  value: {
    'auth/email-already-in-use':`Email address already in use.`,
    'auth/invalid-email':`Email address is invalid.`,
    'auth/operation-not-allowed':`Error during sign up.`,
    'auth/weak-password':'Password is not strong enough. Add additional characters including special characters and numbers.',
    'auth/wrong-password':'Your password is wrong. Please, try again',
    'auth/invalid-phone-number':'You entered a invalid phone number. Please, try again.'
  },
}];

export default firebaseErrors;