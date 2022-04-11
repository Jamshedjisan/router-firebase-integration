import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h2>This is Login page</h2>
      <br />
      <button onClick={signInWithGoogle}>Google Sign in</button>

      <form>
        <input type="email" placeholder="Your email" />
        <br />
        <input type="password" name="" id="" placeholder="Password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
