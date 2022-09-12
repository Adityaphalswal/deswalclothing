import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/signUp/SignUp'
import './sign.scss'
const Sign = () => {
  return (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
  )
}

export default Sign