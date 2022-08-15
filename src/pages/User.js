import { useLocation } from "react-router-dom";

const User = () => {
  const { search } = useLocation();
  console.log(new URLSearchParams(search).getAll("key"));

  return (
    <>
      <h1>User</h1>
    </>
  )
};

export default User;