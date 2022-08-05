import { useParams, useLocation } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const location = useLocation();

  return (
    <>
      <h1>Details</h1>
      <p>id: {id}</p>

      <pre>{JSON.stringify(location?.state, null, 2)}</pre>
    </>
  );
};

export default Details;
