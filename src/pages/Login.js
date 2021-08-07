import React from 'react'



function Login() {
    return (
        <>
            <div className="container login-container">
                <form className="login-signup py-3 px-4 mx-5">
                    <h4 className="page-name text-center">Login</h4>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input className="form-control" type="email" id="email" name="email" placeholder="Eg: johndoe@gmail.com" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" id="password" name="password" required />
                    </div>
                    <p>Not registered? <a href="/signup">Signup</a></p>
                    <div className="d-flex justify-content-center mt-3">
                        <button type="button" class="btn btn-primary">Login</button>
                    </div>
                </form> 
            </div>
        </>
    )
}

export default Login
