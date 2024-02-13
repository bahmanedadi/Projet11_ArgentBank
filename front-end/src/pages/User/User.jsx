import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from '../../components/Account/Account';
import { userProfile } from '../../actions/loginAction';

/**
 * Creates User page component
 * @returns { HTMLElement}
 */
const User = () => {
  document.title = "Argent Bank - User Page";
  const token = useSelector((state) => state.login.token !== null ? state.login.token : localStorage.getItem('token') !== null ? localStorage.getItem('token') : null);
  const user = useSelector((state) => state.login.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
         dispatch(userProfile(token));
      } catch (error) {
        // Gérer les erreurs si nécessaire
        console.error('Error fetching user profile:', error);
      }
    };

    if (token === null) {
      navigate('/');
      sessionStorage.clear();
    } else {
      fetchUserProfile();
    }
  }, [token, dispatch, navigate]);

  return (
    <main className='main bg-dark'>
      <div className="header">
        <h1>Welcome back<br />{user && user.name}!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance' />
      <Account title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance' />
      <Account title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance' />
    </main>
  );
};

export default User;
