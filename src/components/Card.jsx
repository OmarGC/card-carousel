import React, { Fragment, useState, useEffect } from 'react'


const Card = ({pokemon}) => {
 
  const [image, setImage] = useState("");
  const [namePokemon, setNamePokemon] = useState("");
  const imageError="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiOG8evpw5vOWmGp4qSbNK6JvMyxIgbPRo-Ymnb53FazX3VGVW";

  const getData = name => {
    
    fetch(`http://pokeapi.co/api/v2/pokemon/${name}`)
      .then( resp => resp.json() )
      .then( resJson => {
        console.log(resJson);
        
        setNamePokemon(resJson.name);
        setImage(resJson.sprites.front_default);
      })
      .catch( error => console.log(`Error UseEfect: ${error}`))
  }

  useEffect(
    () => {
      setNamePokemon(pokemon)
      if(namePokemon === "") return;
      getData(namePokemon);
    }, [pokemon,namePokemon]
  );
  
  // let componet;
  // if(image !== "") {
  //   componet = <img src={image} alt="Imagen Pokemon" />  
  // } else {
  // componet = <img src={imageError} style={{width: '100%', height: '100%'}} alt="Imagen Error"  />
  // }
    
  return(
    <Fragment>
      {
        <img
          src={
            image !== undefined && image !== null && image.length > 0 ? image : imageError
          }
          style={
            image !== undefined && image !== null && image.length > 0 ? null : { width: '100%', height: '100%' }
          }
          alt="Imagen Pokemon"
        />  
      }
    </Fragment>
  );
  
}

export default Card;


