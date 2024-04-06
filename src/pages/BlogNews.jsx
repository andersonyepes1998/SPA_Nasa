import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogNews = () => {

    const params = useParams();
    console.log(params);

    const {data, loading, error, fetchGetData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    useEffect(()=> {
        fetchGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if (loading) {
        return <p>Loading data...</p>
    }

    if (error) {
        return <p>Error...</p>
    }

    return(
        <>
           
            <h1>{data.id}-{data.title}</h1>
            <p>{data.body}</p>
            <p>nana</p>
            
        </>
    )
}

export default BlogNews