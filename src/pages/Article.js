import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Article {id} </h1>
    </>
  )
};

export default Article;