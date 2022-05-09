import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);


    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const [email, setEmail] = useState('')

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'


    if (loading || GoogleLoading) {
        return <Loading />
    }
    if (sending) {
        // toast.success('Reset Email Sent')
    }
    // navigate after login
    if (user || googleUser) {
        navigate(from, { replace: true })
    }
    else if (user || googleUser) {
        navigate('/')
    }

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)


    }
    const handleResetPass = () => {
        if (email) {
            sendPasswordResetEmail(email)
        }
        // toast.error('Please Enter your email')
    }

    return (
        <section className='signup py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form-container">
                            <h2 className='text-success text-center mb-4'>Log in Here</h2>
                            <Form onSubmit={handleLogin}>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onBlur={handleEmail} name='email' type="email" placeholder="Enter email address" required />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" required />
                                </Form.Group>

                                <Button variant="primary" className='w-25' type="submit">
                                    Login
                                </Button>
                            </Form>
                            <div className='mt-3'>
                                <p><Link to="#" onClick={handleResetPass} className='text-primary pe-auto text-decoration-none'>Forgetted Password?</Link> </p>
                            </div>
                            <div className='mt-3'>
                                <p>Are you new here? <Link to="/signup" className='text-primary pe-auto text-decoration-none'>Please Sign up</Link> </p>
                            </div>

                            <div className='text-center mt-5'>
                                <button className='btn btn-primary w-100' onClick={() => signInWithGoogle()}><FaGoogle className='me-3' /> Log in with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;