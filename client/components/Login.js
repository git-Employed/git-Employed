import React from "react";

export default function Login() {
  const getToken = () => {
    const request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };
    fetch("https://github.com/login/oauth/authorize", request)
      .then
  };

  return (
    <div>
      <h1>Sign Into GitEmployed</h1>
      <button onClick={getToken}>Sign In with GitHub</button>
    </div>
  );
}
