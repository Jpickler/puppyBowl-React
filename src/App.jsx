
import { useState } from 'react'
import './App.css'
import Roster from './components/Roster';
import Details from './components/Details';
import PuppyForm from './components/PuppyForm';


function App() {
  const [rosterView, setRosterView] = useState(true);
  const [singlePuppyData, setSinglePuppyData] = useState(``);
  const [goToForm, setGoToForm] =useState(false)


  return (
    <>
      <h1> Puppy Bowl</h1>
      <button onClick={() => { setGoToForm(true)}} >Click here to add your puppy!</button>

      {goToForm ? <PuppyForm/> : null}
  
      {rosterView ? <Roster singlePuppyData={singlePuppyData} setSinglePuppyData = {setSinglePuppyData} setRosterView={setRosterView}/> : <Details singlePuppyData={singlePuppyData} rosterView={rosterView} setRosterView = {setRosterView}/> }

    </>
  )
}

export default App
