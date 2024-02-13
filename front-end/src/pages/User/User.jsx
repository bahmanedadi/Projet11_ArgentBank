import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from '../../components/Account/Account';
import auth_service from '../../actions/userAction';
import EditName from '../../components/EditName/EditName';

const User = () => {
  document.title = "Argent Bank - User Page";
  const user = useSelector(state => state.user); 
  // Assurez-vous que la clé correcte est utilisée ici
  console.log(user)
  const token = useSelector(state => state.login.token || localStorage.getItem('token') || null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth_service.userProfile(token));
    if (token === null) {
      navigate('/');
      sessionStorage.clear();
    }
  }, [token, dispatch, navigate]);

  return (
    <main className='main bg-dark'>
      <EditName /> {/* Passez l'objet utilisateur au composant EditName */}
      <h2 className="sr-only">Accounts</h2>
      <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance' />
      <Account title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance' />
      <Account title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance' />
    </main>
  );
};

export default User;
