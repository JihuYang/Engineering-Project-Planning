import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { type, title, value };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add New Field</h2>
      <form onSubmit={handleSubmit}>
        <label>Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="int">int</option>
          <option value="text">text</option>
          <option value="date">date</option>
          <option value="email">email</option>
          <option value="file">file</option>
          <option value="image">image</option>
          <option value="radio">radio</option>
          <option value="password">password</option>
          <option value="reset">reset</option>
          <option value="search">search</option>
          <option value="time">time</option>
          <option value="url">url</option>
          <option value="button">button</option>
          <option value="color">color</option>
          <option value="date">date</option>
        </select>

        <label>Field Name:</label>
        <textarea
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <label>Placeholder:</label>
        <input 
          type="text" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add Field</button>
      </form>
    </div>
  );
}
 
export default Create;