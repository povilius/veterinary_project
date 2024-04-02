import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const Pet = () => {
  const { id } = useParams()
  const [pet, setPet] = useState(null)
  const [logs, setLogs] = useState([])
  const [prescriptions, setPrescriptions] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const navigate = useNavigate()

  const [logFilter, setLogFilter] = useState(true)
  const [prescriptionsFilter, setPrescriptionsFilter] = useState(true)

  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((resp) => resp.json())
      .then((response) => {
        const foundPet = response.find((pet) => pet.id === +id)
        setPet(foundPet)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  useEffect(() => {
    fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setLogs(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  useEffect(() => {
    fetch(
      `https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions/${id}`
    )
      .then((resp) => resp.json())
      .then((response) => {
        setPrescriptions(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  const goBack = () => {
    navigate(-1);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const toggleLogFilter = () => {
    setLogFilter(!logFilter)
  }

  const togglePrescriptionsFilter = () => {
    setPrescriptionsFilter(!prescriptionsFilter)
  }

  // const formatDate = (timestamp) => {
  //   const date = new Date(timestamp)
  //   return date.toLocaleDateString()
  // }

  return (
    <div>
      <h1>{pet.name}: Health records</h1>
      <div>
      <GoBackBtn onClick={goBack}>Go back</GoBackBtn>

      <FilterBtn 
        onClick={toggleLogFilter}
        isActive={logFilter}>Logs <FaCheck /></FilterBtn >
      <FilterBtn 
        onClick={togglePrescriptionsFilter}
        isActive={prescriptionsFilter}>Prescriptions <FaCheck /></FilterBtn >
      </div>

      <div>
        <div>
          {logFilter &&
            logs.map((log) => (
              <div key={log.id}>
              <p >{log.description}</p>
              <p >{log.status}</p>
              </div>
            ))}

          {prescriptionsFilter &&
            prescriptions.map((prescription) => (
              <div key={prescription.id}>
              <p >{prescription.description}</p>
              <p >{prescription.comment}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Pet

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
  margin-right: 10px;
  border: 2px solid #fc8119;

  &:hover {
    background-color: #c4691e;
    cursor: pointer;
  }
`

const FilterBtn = styled.button`
  color: #fc8119;
  background-color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  padding: 10px 25px;
  border-radius: 5px;
  transition: 300ms;
  border: none;
  margin-right: 10px;
  border: 2px solid #fc8119;

  &:hover {
    background-color: #fc8119;
    color: white;
    cursor: pointer;
  }
  ${({ isActive }) =>
    isActive &&
    `
    background-color: #fc8119;
    color: white;

    &:hover {
      background-color: white;
      color: #fc8119;
    }
  `}

`