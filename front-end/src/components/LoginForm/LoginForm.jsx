import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router";
import { getToken } from '../../actions/loginAction'; // Utilisez exactement la même casse que le nom du fichier


function LoginForm() {
  useEffect(() => { document.title = "Argent Bank - Connexion" });
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const message = useSelector((state) => state.getUser.user.status)
  const rememberMe = document.getElementById("remember-me");
  useEffect(() => {
    if (localStorage.length > 0) {
      navigate('/profile');
    }
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (email === '' || password === '') {
      // Gérer le cas où l'email ou le mot de passe est vide
    } else {
      dispatch(getToken(email, password,rememberMe))
      
    }
  }

  if (message === 200) {
    navigate(`/profile`)
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">Sign In</button>
      </form>
    </section>
  )
}

export default LoginForm;
