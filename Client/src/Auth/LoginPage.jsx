import React from 'react';
import FancyAuth from './FancyAuth';
import NormalLogin from './NormalLogin';

const LoginPage = () => {
  return (
    <>
    <div className='login-page-container hidden md:block'>
        <FancyAuth />
    </div>
    <div className='login-page-container block md:hidden'>
        <NormalLogin />
    </div>
    </>
  )
}

export default LoginPage;