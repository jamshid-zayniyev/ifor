import React from 'react'
import logo from "../img/45336060.jpg"

const Register = () => {
  return (
    <div className='text-center mt-5'>
      <main class="form-signin w-25 m-auto">
  <form>
  <img class="mb-4 rounded-circle" src={logo} alt="" width="100" height="70" />
    <h1 class="h3 mb-3 fw-normal">Please register</h1>
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="Jamshid"/>
      <label for="floatingInput">Username</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    
    <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Register</button>
  </form>
</main>
    </div>
  )
}

export default Register