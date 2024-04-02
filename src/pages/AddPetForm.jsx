import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AddPetButton from "../components/AddPetButton";
import Input from "../components/Input"
import styled from "styled-components";

import "./AddPetForm.css"

const AddPetForm = () => {
  const [name, setName] = useState("")
  const [dob, setDob] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const [errors, setErrors] = useState({})

  const errorChecker = () => {
    let errorObject = {}
    if (!name) errorObject.email = "*Required"
    if (!dob) errorObject.password = "*Required"
    if (!clientEmail) errorObject.password = "*Required"
    return errorObject
  }

  const resetForm = () => {
    setName('')
    setDob('')
    setClientEmail('')
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const errorObject = errorChecker()
    setErrors(errorObject)

    const newPet = { name, dob, client_email: clientEmail };
    

    const options = {
      method: "POST",
      body: JSON.stringify(newPet),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets", options)
      .then((resp) => resp.json())
      .then((response) => {
        resetForm()
        setIsSubmitted(true)
        // Reset form
        // Back to pet list
        // Show success message
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <GoBackBtn onClick={goBack}>Go back</GoBackBtn>
    <div className="form-card">

    <form className="form-wrapper" onSubmit={handleSubmit}>
    {isSubmitted && (
        <h3 className="success-message">
          Added successfully
        </h3>
      )}
      <div className="input-item">
        <label htmlFor="name">Name:</label>
        <Input
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && <span>*Required</span>}
      </div>

      <div className="input-item">
        <label htmlFor="dob">Date of Birth:</label>
        <Input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
        />
        {errors.dob && <span>*Required</span>}
      </div>

      <div className="input-item">
        <label htmlFor="client_email">Email:</label>
        <Input
           placeholder="Client Email"
           type="email"
           value={clientEmail}
           onChange={(event) => setClientEmail(event.target.value)}
        />
        {errors.client_email && <span>*Required</span>}
      </div>

      <AddPetButton type="submit">Add Pet</AddPetButton>
    </form>
    </div>
    </div>
  )
}

export default AddPetForm

const GoBackBtn = styled.button`
  color: white;
  background-color: #fc8119;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  padding: 10px 25px;
  border-radius: 5px;
  transition: 300ms;
  border: none;
  margin-top: 20px;

  &:hover {
    background-color: #c4691e;
    cursor: pointer;
  }
`