import { useState, useEffect } from "react";
// import Roster from "./Roster";


const Details = ({singlePuppyData, rosterView, setRosterView}) => {
  const [puppyDetails, setPuppyDetails] = useState([]);


  useEffect(() => {
    const getTheData = async() => {
      const fetchResponse = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players/${singlePuppyData}`);
      const response = await fetchResponse.json();
      setPuppyDetails(response.data.player);
    }
    getTheData();
  },[]); // end useEffect

  
  const handleClicked = (event) => {

    // event.preventDefault();
    setRosterView(true);
  
  } // end handleClicked


  return(
    <>
      <h1> {puppyDetails.name}'s Details</h1>
      <div className="card"
        // onClick={()=>{
        //   console.log(`it was clicked to go back`)
        //   return (setRosterView(true))}}
        >
        <div className="internalInfo">
          <h2>Breed: {puppyDetails.breed}  </h2> 
          <h2>Status: {puppyDetails.status} </h2>
        </div>
        <div className="image">
          <img src={puppyDetails.imageUrl } alt = "picture of ${puppyDetails.name}"/>
        </div>
        
      </div>
      <br/>
      <button onClick={(event) => {handleClicked(event)}} > Click to go back to the Roster </button>
      <button onClick={() => {setRosterView(true)}} > Click to go back to the Roster </button>

    </>
  );
};

export default Details;