import { Navigate } from "react-router-dom";

const Secured = () => {
  const isLoggedIn = false;

  return (
    <>
      {isLoggedIn ? <h1>Secured</h1> : <Navigate to='/' /> }
    </>
  );
};

export default Secured;