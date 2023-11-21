
import { useState } from 'react'
import './App.css'
import Roster from './components/Roster';
import Details from './components/Details';


function App() {
  const [rosterView, setRosterView] = useState(true);
  const [singlePuppyData, setSinglePuppyData] = useState(``);


  return (
    <>
      <h1> Puppy Bowl</h1>
  
      {rosterView ? <Roster singlePuppyData={singlePuppyData} setSinglePuppyData = {setSinglePuppyData} setRosterView={setRosterView}/> : <Details singlePuppyData={singlePuppyData} rosterView={rosterView} setRosterView = {setRosterView}/> }

    </>
  )
}

export default App
