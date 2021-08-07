import React from 'react';
import BlogCard from '../components/BlogCard'

function MyBlogs() {
    return (
        <>
            <div className="container mt-3 px-5">
                <h2 className="page-name">My Blogs</h2>
                <hr />
                <div className="row">
                    <BlogCard title="Post Title 1" body="Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content." image="./images/image.jpg"/>
                    
                    <BlogCard title="Post Title 2" body="Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content." image="./images/image1.jpg"/>
                    
                    <BlogCard title="Post Title 3" body="Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content." image="./images/image2.jpg"/>
                </div>               
            </div>
        </>
    )
}

export default MyBlogs
