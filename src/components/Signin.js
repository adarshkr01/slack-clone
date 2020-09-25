import React, { Component } from 'react';
import { signInWithGoogle } from '../firebase';

class Signin extends Component {
  render() {
    return (
      <div className="signin-form">
        <h2>Sign Up / Sign In</h2>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <br />
        <button onClick={signInWithGoogle}>Sign up with Google</button>
      </div>
    );
  }
}

export default Signin;
