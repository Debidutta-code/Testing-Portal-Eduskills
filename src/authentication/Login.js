import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import './Login.css';
// import image from '../assets/image.png';
import mind from '../assets/mind.png';
import eduskillsLogo from '../assets/eduskillslogo.png';

const Login = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const handleSmoothScroll = () => {
            const loginContainer = document.getElementById('login-container');
            if (loginContainer) {
                loginContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        const signInButton = document.getElementById('signin-button');
        if (signInButton) {
            signInButton.addEventListener('click', handleSmoothScroll);
        }

        return () => {
            if (signInButton) {
                signInButton.removeEventListener('click', handleSmoothScroll);
            }
        };
    }, []);

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div className="admin-candidate-login-main-container">
            <div className='login-left-main-container'>
                <div className='login-left-side-logo-and-name-outside-container'>
                    <div className='login-left-side-logo-and-name-main-container'>
                        <div className='login-left-side-logo-and-name-main-content-container'>
                            <div className='login-left-side-logo-container'>
                                <img className='login-left-side-logo' src={eduskillsLogo} alt='Company Logo' />
                            </div>
                        </div>
                        <div className='login-signup-signin-text'>
                            <h2><span id="signin-button">Sign In</span> to elevate your academic performance.</h2>
                        </div>
                    </div>
                </div>
                <div className='login-left-mind-image-component-content-container'>
                    <div className='login-left-mind-image-main-container'>
                        <img className='login-left-mind-image' src={mind} alt='MindImage' />
                    </div>
                </div>
            </div>
            <div className='login-right-main-container' id="login-container">
                <div className='login-right-main-form-container'>
                    <form className='login-right-main-form-content-container' onSubmit={handleSubmit(onSubmit)}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid email address"
                                    }
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        error={!!errors.email}
                                        helperText={errors.email ? errors.email.message : ''}
                                    />
                                )}
                            />
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Password is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        error={!!errors.password}
                                        helperText={errors.password ? errors.password.message : ''}
                                    />
                                )}
                            />
                            <Button
                                className='login-btn'
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#0c619e',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#07425e',
                                    },
                                }}
                            >
                                Sign In
                            </Button>
                            <Typography align="center" mt={2}>
                                Don't have an account? <MuiLink component={Link} to="/register">Register</MuiLink>
                            </Typography>
                        </Box>
                        <div> <Link to='/admin'>Admin</Link> </div>
                        <div> <Link to='/candidate'>Candidate</Link> </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
