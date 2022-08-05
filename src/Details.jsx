import { useParams, useLocation, Link } from "react-router-dom";
import { tw } from "twind";

const Details = () => {
  const { id } = useParams();

  const location = useLocation();

  return (
    <div className={tw`p-4`}>
      <Link
        className={tw`p-2 rounded border-2 border-blue-500 mb-4 text-blue-500`}
        to="/"
      >
        Go back to home
      </Link>
      <div className={tw`mt-2`}>
        <h1>Details</h1>
        <p>id: {id}</p>
      </div>

      <pre>{JSON.stringify(location?.state, null, 2)}</pre>
    </div>
  );
};

export default Details;
