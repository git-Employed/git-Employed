import React from "react"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
export default function Login() {

  const navigate = useNavigate();
  //this will need to change to a on submit or something with oAuth
  useEffect(() => {
    navigate('/homepage');
  })
  return (
    <h1>hellooooo</h1>
  )
}