import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err, "error details");

  return (
    <>
      <h2>Oops!!</h2>
      <h3>{`${err.status}:${err.statusText}`}</h3>
    </>
  );
};
export default Error;
