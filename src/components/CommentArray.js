import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

function CommentArray({
   comments 
}) {
    console.log(comments);
    return (
        <>
            <ul className="comments-group">
               {comments.map((comment, index) => {
                    return(
                        <li key={index} className="card my-4 comment-card">
                            <div class="card-body pb-0">
                                <b>{comment.name}</b>
                                <p><em>{comment.body}</em></p>
                            </div>
                            <div className="card-footer comment-card-footer pt-0">
                                <a href="/delete" className="card-link"><AiOutlineEdit /></a>
                                <a href="/delete" className="card-link"><AiOutlineDelete /></a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default CommentArray
