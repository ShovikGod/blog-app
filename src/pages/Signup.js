import React from 'react'

function Signup() {
    return (
        <>
            <div className="container signup-container">
                <form className="login-signup py-3 px-4 mx-5">
                    <h4 className="page-name text-center">Signup</h4>
                    <div class="form-group">
                        <label for="fname">First Name</label>
                        <input className="form-control" type="text" id="fname" name="fname" placeholder="Enter first name" required />
                    </div>
                    <div class="form-group">
                        <label for="lname">Last Name</label>
                        <input className="form-control" type="text" id="lname" name="lname" placeholder="Enter last name" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input className="form-control" type="email" id="email" name="email" placeholder="Eg: johndoe@gmail.com" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" id="password" name="password" required />
                    </div>
                    <div class="form-group">
                        <label for="conf-password">Confirm Password</label>
                        <input className="form-control" type="password" id="conf-password" name="conf-password" required />
                    </div>
                    <p>Already registered? <a href="/login">Login</a></p>
                    <div className="d-flex justify-content-center mt-3">
                        <button type="button" class="btn btn-primary">Signup</button>
                    </div>
                </form> 
            </div>
        </>
    )
}

export default Signup
