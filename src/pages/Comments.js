import React from 'react'
import { commentData } from '../components/commentData'
import CommentArray from '../components/CommentArray'

function Comments() {
    return (
        <>
            <div className="container mt-3 px-5">
                <h2 className="page-name">Comments</h2>
                <hr />
                <div className="post-group px-5 my-5">
                    <h3><b>Title 1</b></h3>
                    <CommentArray comments={commentData} />
                </div>
                <hr />
                <div className="post-group px-5 my-5">
                    <h3><b>Title 2</b></h3>
                    <CommentArray comments={commentData} />
                </div>
                <hr />
            </div>
        </>
    )
}

export default Comments
