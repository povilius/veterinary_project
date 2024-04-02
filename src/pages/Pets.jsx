import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import AddPetButton from "../components/AddPetButton"

const Pets = () => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets')
    .then((res) => res.json())
    .then((response) => {
      setPets(response)
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])

  const handleDelete = (deletingPet) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(
      `https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${deletingPet.id}`,
      options
    )
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        const updatedPets = pets.filter((pet) => pet.id !== deletingPet.id);
        setPets(updatedPets);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString()
  }
  
  if (!pets) {
    return <div>Pets are loading...</div>
  }

  return (

    <div>
      <TitleButton>
        <h2>Pets list</h2>

          <Link to="/new">
            <AddPetButton>Add Pet</AddPetButton>
          </Link>
        </TitleButton>

      <PetsCardWrapper>
      {pets.map((pet) => ( 
        <PetCard key={pet.id}>

          <PetName>{pet.name}</PetName>

          <Email>E-mail: {pet.client_email}</Email>

          <Birthday>Date of Birth: {formatDate(pet.dob)}</Birthday>
          <div>
            <LogButton to={`/pets/${pet.id}`}>View log</LogButton>
            <DeleteBtn onClick={() => handleDelete(pet)}>Delete</DeleteBtn>
          </div>
        </PetCard>
      ))}
      </PetsCardWrapper>
    </div>
  )
}

export default Pets

const PetsCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const PetCard = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`

const PetName = styled.h3`
  font-weight: 300;
  color: #6b6b6b;
  font-size: 25px;
`

const Email = styled.p`
  color: #6b6b6b;
  margin-bottom: 5px;
`

const Birthday = styled.p`
  color: #6b6b6b;
  margin-top: 0;
`

const LogButton = styled(Link)`
  color: white;
  background-color: #fc8119;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  padding: 10px 25px;
  border-radius: 5px;
  transition: 300ms;
  margin-right: 7px;
  border: 2px solid #fc8119;

  &:hover {
    background-color: white;
    color: #fc8119;
    cursor: pointer;
  }
`
const TitleButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DeleteBtn = styled.button`
  color: #fc8119;
  background-color: white;
  border: 2px solid #fc8119;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  padding: 10px 25px;
  border-radius: 5px;
  transition: 300ms;

  &:hover {
    background-color: #fc8119;
    color: white;
    cursor: pointer;
  }
`