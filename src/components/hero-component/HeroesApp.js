import React, { useEffect, useReducer } from 'react';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/authContext';
import { authReducer } from '../../auth/authReducer';
import './heroes-app.css';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const HeroesApp = () => {

  // When refresh the code is executed, then useReducer calls init function, after that
  // init functions reads from localStorage and returns the user object that is the new state {}
  // If the user object is not in localStorage, then it returns the initial state {}
  
  const [ user, dispatch ] = useReducer( authReducer, {}, init );

  useEffect(() => {
    if( !user ) return;
    localStorage.setItem('user', JSON.stringify( user ))
  }, [user]);

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
};
