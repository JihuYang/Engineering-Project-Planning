import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>Field Name: { blog.title }</h2>
          <p>Type: { blog.type }</p>
          <div>Value: { blog.value }</div>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;