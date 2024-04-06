import { useEffect } from "react";
import { useFetch } from '../hooks/useFetch';
import { Link, useSearchParams } from 'react-router-dom'

const Noticias = () => {

    const [ data, loading, error, fetchGetData ] = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    )

    const [searchParams, setSearchParams] = useSearchParams();

    // useEffect(()=>{
    //     setSearchParams({ filter: 'ander' })
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[searchParams])

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

    const handleChange = (event) => {
        let filter = event.target.value
        if(filter){
            setSearchParams( {filter:filter } )
        }else{
            setSearchParams({})
        }
        console.log('Loading data...');
    }

    return (
        <>
        <input 
            type="text" 
            id="default-search" 
            className="mx-auto block mt-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  cursor-pointer" 
            placeholder="Search Mockups, Logos..." 
            onChange={handleChange} 
            value={searchParams.get('filter') || ""}
        />
        <div className="flex justify-center mt-10">
            <ul className="w-96 text-sm font-medium bg-white border border-gray-200 rounded-lg dark:border-gray-600 dark:text-white">
                {data
                .filter((item)=>{
                    const filter = searchParams.get('filter');
                    if (!filter) return true;
                    let name = item.title.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map(item => (
                    <li key={item.id} className="border-b border-gray-200 dark:border-gray-600">
                        <Link 
                            to={`/noticias/${item.id}`} 
                            className="block px-2 py-2 text-gray-900 hover:bg-gray-400"
                        >
                            {item.id} - {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Noticias