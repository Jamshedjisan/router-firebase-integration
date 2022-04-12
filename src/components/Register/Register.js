import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Please Register Now</h2>

      <input type="text" placeholder="Your Name"></input>
      <br />
      <input type="email" placeholder="your email"></input>
      <br />
      <input type="password" placeholder="your password"></input>
      <br />
      <input type="submit" value="Register" />
    </div>
  );
};

export default Register;
