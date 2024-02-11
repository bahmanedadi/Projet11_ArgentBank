import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from '../../components/Account/Account';
import auth_service from '../../actions/loginAction';

/**
 * Creates User page component
 * @returns { HTMLElement}
 */
const User = () => {
  document.title = "Argent Bank - User Page";
  const token = useSelector((state) => state.login.token !== null ? state.login.token : localStorage.getItem('token') !== null ? localStorage.getItem('token') : null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(auth_service.userProfile(token));

  useEffect(() => {
    if (token === null) {
      navigate('/')
      sessionStorage.clear()
    }
  }, [token, navigate])

  return (
    <main className='main bg-dark'>
      <h2 className="sr-only">Accounts</h2>
      <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance' />
      <Account title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance' />
      <Account title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance' />
    </main>
  )
}
export default User;