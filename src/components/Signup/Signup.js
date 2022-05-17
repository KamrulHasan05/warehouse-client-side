import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate, Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import useToken from '../useToken';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createUserError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);

    const [token] = useToken(user || googleUser)

    const navigate = useNavigate()
    if (createUserError || GoogleError || updateError) {
        toast.error(`${createUserError ? createUserError.message : ''}${GoogleError ? GoogleError.message : ''}${updateError ? updateError.message : ''}`)
    }
    if (loading || updating || GoogleLoading) {
        return <Loading />;
    }

    if (token) {
        navigate('/')
    }
    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            toast.success('email verification is sent, please, check your email inbox or spam folder')
            setError('');
        }
        else {
            setError("password no match")

        }
    }

    return (
        <section className='signup py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form-container">
                            <h2 className=' text-center mb-4'>Sign Up Here</h2>
                            <Form onSubmit={handleRegister}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' type="text" placeholder="Enter your name" required />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email address" required />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" required />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control name='confirmPassword' type="password" placeholder="Retype your Password" required />
                                    {error &&
                                        <Form.Text className=" text-danger ">
                                            <p className='mt-3'>{error}</p>
                                        </Form.Text>
                                    }
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Check onClick={() => setAgree(!agree)} name='agree' type="checkbox" label="Agree with terms and conditions" />
                                </Form.Group>

                                <Button disabled={!agree} variant="primary" className='w-25' type="submit">
                                    Sign up
                                </Button>
                            </Form>
                            <div>
                                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>
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

export default Signup;