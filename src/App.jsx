import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import Spinner from './components/Spinner';


function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);




  async function fechData() {
    setLoading(true);
    try {
      const respose = await fetch(apiUrl);
      const output = await respose.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Failed to fetch");
    }

    setLoading(false);

  }

  useEffect(() => {
    fechData();
  }, [])


  return (
    <div className='font-pop min-h-screen flex flex-col bg-[#403c55cf]  '>
      <div><Navbar /></div>

      <div className=''>
        <div><Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>

        <div className=' w-11/12 max-w-[1200px]  mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>
    </div>
  )
}

export default App
