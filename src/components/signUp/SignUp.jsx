import React from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import {auth,creatUserProfileDocument} from '../../firebase/firebase.utils';
import {createUserWithEmailAndPassword } from 'firebase/auth';

import './SignUp.scss'

class SignUp extends React.Component{
    constructor() {
        super();
        this.state= {
           displayName:'',
           email: '',
           password: '',
           confirmPassword: '' 
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Password do not match");
            return;
        } 

        try {
            const {user} = await createUserWithEmailAndPassword(auth, email,password)
            await creatUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email: '',
                password: '',
                confirmPassword: '' 
             })
        } catch(error){
            console.log(error);
        }
    }

    handleChange = (e) => {
        const {name,value} = e.target;

        this.setState({[name]:value})
    }
    render () {
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label= 'Display Name'
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label= 'Email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label= 'Confirm Password'
                    required
                    />
                    <CustomButton type='submit'> SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp