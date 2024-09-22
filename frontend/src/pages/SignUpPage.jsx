import React from 'react';
import Signup from '../featurs/auth/Signup';
import SignupSide from '../featurs/auth/SignupSide';

const SignUpPage = () => {



  return (
    <section className="bg-white">
      <div className="grid grid-cols-2">
        <Signup/>
        <SignupSide/>
      </div>
    </section>
  );
};

export default SignUpPage;
