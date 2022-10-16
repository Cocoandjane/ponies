
import { useState, useEffect } from 'react'
import axios from 'axios'

import styled from 'styled-components'
const Pony = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export default function Home() {

  const [ponies, setPonies] = useState([])

  useEffect(() => {
    axios.get('/api/ponies')
      .then((res) => 
      setPonies(res.data)) 
    }, []) 

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('/api/ponies', {
            name: e.target.name.value,
            color: e.target.color.value,
            breed: e.target.breed.value,
            federalResgistryNumber: e.target.federalResgistryNumber.value,
        })}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" />
            <input type="text" name="color" placeholder="color" />
            <input type="text" name="breed" placeholder="breed" />
            <input type="text" name="federalResgistryNumber" placeholder="federalResgistryNumber" />
            <button type="submit">Submit</button>
        </form>


    {ponies.map(pony =>(
      <Pony key={pony.id}>
        <h1>{pony.name}</h1>
        <h2>{pony.color}</h2>
        <h3>{pony.breed}</h3>
        <p>{pony.federalResgistryNumber}</p>
      </Pony>
    ))}
    </div>
  )
}
