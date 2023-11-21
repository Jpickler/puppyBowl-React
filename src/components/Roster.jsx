import { useEffect, useState } from "react"
// import Details from "./Details";


const Roster =({singlePuppyData, setSinglePuppyData, setRosterView})=> {
  const [puppyData, setPuppyData] = useState([]);


  useEffect(() => {
    const getTheData = async() => {
      const fetchResponse = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`);
      const response = await fetchResponse.json();
      setPuppyData(response.data.players);
    }
    getTheData();
  },[]); // end useEffect

const handleClicked = (event) => {

  // event.preventDefault();
  setRosterView(false);

} // end handleClicked


  return(
    <>
      <h1> Roster </h1>
      <div>
        {
          puppyData.map((puppy) => {
            return (
              <> 
              <div className = "card">
              <div 
                className="internalInfo" 
                 key = {puppy.id}
                 id={puppy.id}
                onClick= {(event) => {
                  setSinglePuppyData(puppy.id)

                  //event.preventDefault();
                  //console.log(puppy.id `   was clicked`);
                  handleClicked(event);
                }}
               >                 
              <p className= "name" key = {puppy.name} > {puppy.name} </p>
              <img  src= {puppy.imageUrl} alt = "picture of somepuppy" key = {puppy.imageUrl}/> 
            </div>
            </div>
            </>
          )})
          } </div>
          </>
          )

        }; // end roster

export default Roster