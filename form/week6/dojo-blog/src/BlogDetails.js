import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";


const BlogDetails = () => {

  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClickDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }
  const handleUpdateDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    })
  }

  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  const handleClickUpdate = (e) => {
    e.preventDefault();
    const blog = { type, title, value };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      history.go(-1);
      //history.push('/');
    })
  }

  let c1 = document.querySelector('.create');

  const handleShowUpdate = () => {
    c1.addEventListener('click', function () {
      c1.classList.toggle('flipped');
    });
  }

  return (

    <div className="blog-details">
      { isPending && <div>Loading...</div>}
      { error && <div>{error}</div>}
      { blog && (
        <article>
          <h2>Field Name: {blog.title}</h2>
          <p>Type: {blog.type}</p>
          <div>Value: {blog.value}</div>
          <div class="text-center">
          <button class="mr-3" onClick={handleUpdateDelete}>
            <Link to="/update" style={{
            color: 'white'
          }}>Update</Link></button>
          <button onClick={handleClickDelete}>Delete</button>
          </div>
        </article>

      )}
    </div>
  );
} 

export default BlogDetails;