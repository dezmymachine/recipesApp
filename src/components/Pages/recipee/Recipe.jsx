import { useParams } from "react-router-dom";

const Recipee = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Recipe Page: {id}</h1>
    </div>
  );
};

export default Recipee;
