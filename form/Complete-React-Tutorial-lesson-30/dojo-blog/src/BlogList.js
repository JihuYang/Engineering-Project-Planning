import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >

            <div class="input-group my-2">
            <div class="input-group-prepend">
              <span class="input-group-text">{blog.fieldname}</span>
            </div>
            <input type={blog.type} value={blog.value} aria-label={blog.fieldname} class="form-control"></input>
          </div>
        </div>
      ))}
      <button></button>
    </div>
  );
}
 
export default BlogList;