import React from "react";

export default function Login() {
  // const getToken = () => {
  //   const request = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   };
  //   fetch('/auth/github', request)
  //     .then
  // };

  return (
    <div>
      <h1>Sign Into GitEmployed</h1>
      <button>
        <a href="/auth/github">Login with GitHub</a>
      </button>
    </div>
  );
}
