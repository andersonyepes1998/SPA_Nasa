import { useState, useEffect } from "react";

const Cards = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetchData();
    }, [])

      // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async() => {
        try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`) 
        if (!res.ok) {
            throw "Error al conectar la API";
        }
        const data = await res.json()
        setUsers(data)
        } catch (error) {
        console.log(error);
        setUsers([]);
        }
    }
    
    return (
        <div className="flex flex-wrap justify-center">
          {
            users.map((user) => (
              <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 mx-2" key={user.id}>
                <img 
                  className="wFull" 
                  src="https://www.nasa.gov/wp-content/uploads/2023/05/as11-40-5875large.jpg?resize=1485,1536" 
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h5 className="font-bold text-xl mb-2">{user.name}</h5>
                  <p className="font-bold mb-2">{user.address.suite}</p>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
              </div>
            ))
          } 
        </div>
    )
}

export default Cards