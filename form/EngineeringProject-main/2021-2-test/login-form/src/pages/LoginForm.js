import React from 'react';
import '../components/LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
    return (
      <div className="App d-flex justify-content-center">
        <form>
          <img class="mb-4" src="https://getbootstrap.com/docs/4.6/assets/brand/bootstrap-solid.svg" style={{width:"70px"}}></img>
          <h2 class="mb-3 fw-normal">Please sign in</h2>
          <input type="email" id="email" class = "form-control" placeholder ="Email address"></input>
          <input type="password" id="password" class = "form-control mb-3" placeholder ="Password" required></input>
          <div class="form-check">
            <label class="mb-3">
            <input type="checkbox" value="Remember-me" class="form-check-input"/>
            Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-muted">© 2017-2021</p>
        </form>
      </div>
    );
  };
  
  export default LoginForm; //외부에서 import로 불러오기 위해 export

