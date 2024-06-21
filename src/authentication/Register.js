import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import './Register.css';
// import image from '../assets/image.png';
import mind from '../assets/mind.png';
import eduskillsLogo from '../assets/eduskillslogo.png';

const Register = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const handleSmoothScroll = () => {
            const registerContainer = document.getElementById('register-container');
            if (registerContainer) {
                registerContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        const registerButton = document.getElementById('register-button');
        if (registerButton) {
            registerButton.addEventListener('click', handleSmoothScroll);
        }

        return () => {
            if (registerButton) {
                registerButton.removeEventListener('click', handleSmoothScroll);
            }
        };
    }, []);

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="admin-candidate-register-main-container">
            <div className='register-left-main-container'>
                <div className='register-left-side-logo-and-name-outside-container'>
                    <div className='register-left-side-logo-and-name-main-container'>
                        <div className='register-left-side-logo-and-name-main-content-container'>
                            <div className='register-left-side-logo-container'>
                                <img className='register-left-side-logo' src={eduskillsLogo} alt='Company Logo' />
                            </div>
                        </div>
                        <div className='register-signup-signin-text'>
                            <h2><span id="register-button">Sign Up</span> to join the EduSkills community.</h2>
                        </div>
                    </div>
                </div>
                <div className='register-left-mind-image-component-content-container'>
                    <div className='register-left-mind-image-main-container'>
                        <img className='register-left-mind-image' src={mind} alt='MindImage' />
                    </div>
                </div>
            </div>
            <div className='register-right-main-container' id="register-container">
                <div className='register-right-main-form-container'>
                    <form className='register-right-main-form-content-container' onSubmit={handleSubmit(onSubmit)}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Controller
                                name="fullName"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Full Name is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Full Name"
                                        variant="outlined"
                                        fullWidth
                                        error={!!errors.fullName}
                                        helperText={errors.fullName ? errors.fullName.message : ''}
                                    />
                                )}
                            />
                            <Controller
                                name="organisationName"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Organisation Name is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Organisation Name"
                                        variant="outlined"
                                        fullWidth
                                        error={!!errors.organisationName}
                                        helperText={errors.organisationName ? errors.organisationName.message : ''}
                                    />
                                )}
                            />
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
                                className='register-btn'
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
                                Register
                            </Button>
                            <Typography align="center" mt={2}>
                                Already have an account? <MuiLink component={Link} to="/login">Login</MuiLink>
                            </Typography>
                        </Box>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
