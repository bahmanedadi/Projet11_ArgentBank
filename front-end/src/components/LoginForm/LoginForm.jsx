import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import auth_service from '../../Redux/services/apiServices';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const token = useSelector((state)=> state.login.token)
  const error = useSelector((state)=> state.login.error)
  
  useEffect(() => {
    if (rememberMe && localStorage.getItem('userEmail')) {
      const savedEmail = localStorage.getItem('userEmail');
      setEmail(savedEmail);
    }
  }, [rememberMe]);

  useEffect(() => {
    if (rememberMe && localStorage.getItem('userPassword')) {
      const savedPassword = localStorage.getItem('userPassword');
      setPassword(savedPassword);
    }
  }, [rememberMe]);

  const submitForm = (e) => {
    e.preventDefault();
    rememberMe ? localStorage.setItem("userEmail", email) : localStorage.removeItem("userEmail");
    rememberMe ? localStorage.setItem("userPassword", password) : localStorage.removeItem("userPassword");
    dispatch(auth_service.login(email, password, rememberMe));
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  useEffect(() => {
    if (token !== null || localStorage.getItem('token') !== null) {
      navigate('/profile');
    }
  }, [token, navigate]);

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={submitForm}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMe} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type='submit'>Sign In</button>
        {error !== null ? <label className='error'>{error}</label> : ""}
      </form>
    </section>
  );
};

export default LoginForm;