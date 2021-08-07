import React from 'react';
import Modal from '../components/Modal'

function AddEditBlog() {
    return (
        <>
            <div className="container mt-3 px-5">
                <h2 className="page-name">Write your blog</h2>
                <hr />
                <form className="blog-form py-3 px-4 mb-5">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input className="form-control" type="text" id="title" name="title" placeholder="Enter blog title" />
                    </div>
                    <div class="form-group">
                        <label for="thumb">Thumbnail Image</label>
                        <input className="form-control" type="file" id="thumb" name="thumb" placeholder="Enter blog description" accept="image/*" />
                    </div>
                    <div class="form-group">
                        <label for="body">Body</label>
                        <textarea className="form-control" type="textarea" id="body" name="body" placeholder="Enter blog description" />
                    </div>
                    <div className="d-flex justify-content-end m-3 mt-4">
                        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#confirmation-modal">Discard</button>
                        <button type="submit" class="btn btn-primary ml-3">Save</button>
                    </div>
                </form>     
            </div>
            
            <Modal buttonId='confirmation-modal' modalHeading='You have unsaved changes' modalMessage='Do you want to discard changes?' btn1='No' btn2='Yes'/>
        </>
    );
}

export default AddEditBlog