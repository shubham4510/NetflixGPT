import React, { useEffect, useState } from 'react'
import Login from './Login'
import Browse from './Browse'
import {Routes,Route, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import {addUser,removeUser} from '../utils/userSlice'


const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{

   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,email,displayName} = user;

        dispatch(addUser(uid,email,displayName))

        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())

        navigate("/")
      }


      // Unsubscibe when component unmounts
      return () => unsubscribe();
    },[]);
      })

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/browse' element={<Browse/>}/>
        </Routes>
       

</div>

  )
}

export default Body