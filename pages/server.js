import { prisma } from '../server/db/client'

import styled from 'styled-components'
const Pony = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export default function Home( {ponies} ) {

  return (
    <div>
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

export async function getStaticProps() {
  // always runs on the server
  const ponies = await prisma.pony.findMany();
  return {
    revalidate:60,
    props: {
      ponies: JSON.parse(JSON.stringify(ponies)),
    },
  }

}



