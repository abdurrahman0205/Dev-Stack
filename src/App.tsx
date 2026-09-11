
import { Suspense, useState } from 'react'
import Banner from './components/Banner'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection'
import type { TechDataType } from './components/types/type'


const fetchTechnologiesData = async (): Promise<TechDataType[]> => {
  const res = await fetch('/public/data.json');
  const data = await res.json();

  return data;
}

function App() {

  const [TechnologiesDataPromise] = useState(fetchTechnologiesData())

  return (
    <>
      <NavBar />
      <Banner />
      
    <Suspense>
        <TechnologiesSection TechnologiesDataPromise={TechnologiesDataPromise} />
    </Suspense>

      <Footer/>
    </>
  )
}

export default App
