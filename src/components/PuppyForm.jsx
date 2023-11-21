import { useState } from "react"

const PuppyForm = () => {

  const [newPuppyName, setNewPuppyName] = useState(``);
  const [newPuppyBreed, setNewPuppyBreed] = useState(``);
  const [newPuppyStatus, setNewPuppyStatus] = useState(``);
  const [newPuppyImage, setNewPuppyImage] = useState(``);



  const handleSubmit = async (event)=> {
    event.preventDefault();

    try {
      const response = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: newPuppyName,
            breed: newPuppyBreed,
            status: "bench",
            ImageUrl: newPuppyImage,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }


  }



return (
  <>
  <h1> Puppy Form</h1>
  <form onSubmit={handleSubmit}>
    <label>Name: <input onChange={(event) => setNewPuppyName(event.target.value)} /> </label>
    <br/>
    <label>Breed: <input onChange={(event) => setNewPuppyBreed(event.target.value)} /></label>
    <br/>
    <label>Status: <input onChange={(event) => setNewPuppyStatus(event.target.value)} /></label>
    <br/>
    <label>Image URL: <input onChange={(event) => setNewPuppyImage(event.target.value)} /></label>
    <br/>
    <button>submit</button>

  </form>
  </>
)

}

export default PuppyForm