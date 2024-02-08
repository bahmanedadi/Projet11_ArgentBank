import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../../services/ApiService";
import { useDispatch } from "react-redux";
import { connectUser } from "../../store/store";

function LoginForm() {
  useEffect(() => { document.title = "Argent Bank - Connexion" });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.length > 0) {
      navigate('/profile');
    }
  })

  const rememberMe = document.getElementById("remember-me");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      let actualData = await login(email, password);

      // check for error response
      if (!actualData.body) {
        // get error message from body or default to response status
        const error = (actualData && actualData.message) || actualData.status;
        return Promise.reject(error);
      }

      dispatch(connectUser(actualData.body.token));

      if (rememberMe.checked) {
        localStorage.setItem("userToken", actualData.body.token);
      }
      navigate(`/profile`)
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  return (


    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>
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
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>


  )
}

export default LoginForm;