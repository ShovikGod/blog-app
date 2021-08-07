import React from 'react'

function Profile() {
    return (
        <>
            <div className="container mt-3 px-5">
                <h2 className="page-name">Profile</h2>
                <hr/>
                <form className="blog-form py-3 px-4 mb-5">
                    <div class="form-group">
                        <label for="fname">First Name</label>
                        <input className="form-control" type="text" id="fname" name="fname" value="Dipan" disabled/>
                    </div>
                    <div class="form-group">
                        <label for="lname">Last Name</label>
                        <input className="form-control" type="text" id="lname" name="lname" value="Roy" disabled/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input className="form-control" type="email" id="email" name="email" value="dipanroy@mindwebs.org" disabled/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" id="password" name="password" value="123456" disabled/>
                    </div>
                    <div class="form-group">
                        <label for="role">Role</label>
                        <input className="form-control" type="text" id="role" name="role" value="Guest" disabled/>
                    </div>
                    <div className="d-flex justify-content-end m-3 mt-4">
                        <button type="button" class="btn btn-primary">Edit</button>
                    </div>
                </form> 
            </div>            
        </>
    )
}

export default Profile
