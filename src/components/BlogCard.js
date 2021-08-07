import React from 'react'
import { AiOutlineDelete, AiOutlineComment, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';

function BlogCard({
    title,
    body,
    image
}) {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="card blog-card">
                    <img className="card-img-top blog-card-img" src={image} alt="card-hero" />
                    <div class="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{body}</p>
                    </div>
                    <div className="card-footer blog-card-footer">
                        <a href="/add" className="card-link"><AiOutlineEye /></a>
                        <a href="/delete" className="card-link"><AiOutlineEdit /></a>
                        <a href="/post-comment" className="card-link"><AiOutlineComment /></a>
                        <a href="/delete" className="card-link"><AiOutlineDelete /></a>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default BlogCard
