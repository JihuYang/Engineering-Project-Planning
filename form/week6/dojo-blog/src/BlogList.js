import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <div class="input-group my-2">
            <Link to={`/blogs/${blog.id}`}>
              <div class="input-group-prepend">
                <span class="input-group-text">{blog.title}</span>
              </div>
            </Link>
            <input type={blog.type} placeholder={blog.value} aria-label={blog.title} class="form-control"></input>
          </div>
        </div>
      ))}
    </div>
  );
}


export default BlogList;