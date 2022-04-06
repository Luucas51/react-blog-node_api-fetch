import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GetPostsId = () => {
    
    const [postData, setPostData] = useState();
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();

    const getPostsData = async () => {
        const res = await fetch(`http://localhost:8000/api/posts/${id}`)
            .then((res) => res.json());
            console.log(res.posts)
            setPostData(res.posts)
            setLoaded(true)
    };


    useEffect(() => {
        getPostsData()
    }, [setPostData])
 

    if(loaded){
        return(
            <div>
                <h1>{postData.title}</h1>
                <p>{postData.description}</p>
                <p>Par : {postData.author}</p>
                <p>Posté le : {postData.date.slice(0, 10)}</p>
            </div>
        )
    } else {
        return (
            <div>
                
            </div>
        );
    }
};

export default GetPostsId;


