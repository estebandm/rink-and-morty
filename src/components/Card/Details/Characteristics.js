import React from 'react'

import { Male, Female, Genderless, Unknown } from 'components/core/icons/Genders'
import {
  Robot,
  Human,
  Aliens,
  Animal,
  Humanoid,
  MythologicalCreature,
  Poopybutthole,
  Disease,
  Cronenberg
} from 'components/core/icons/Species'
import { Dead, Alive, UnknownStatus } from 'components/core/icons/Status'

export const Characteristics = ({ gender, species, status, fill }) => {
  const ComponentsGenders = [
    { Male: <Male fill={fill}/> },
    { Female: <Female fill={fill}/> },
    { Genderless: <Genderless fill={fill}/> },
    { unknown: <Unknown fill={fill}/> }
  ]

  const ComponentsSpecies = [
    { Robot: <Robot fill={fill}/> },
    { Human: <Human fill={fill}/> },
    { Alien: <Aliens fill={fill}/> },
    { Animal: <Animal fill={fill}/> },
    { Humanoid: <Humanoid fill={fill}/> },
    { Disease: <Disease fill={fill}/> },
    { MythologicalCreature: <MythologicalCreature fill={fill}/> },
    { Poopybutthole: <Poopybutthole fill={fill}/> },
    { Cronenberg: <Cronenberg fill={fill}/> }
  ]

  const ComponentsStatus = [
    { Dead: <Dead fill={fill}/> },
    { Alive: <Alive fill={fill}/> },
    { unknown: <UnknownStatus fill={fill}/> }
  ]
  return (
    <>
      {ComponentsGenders.map((componentGender) => (
        componentGender[gender]
      ))}
      {ComponentsSpecies.map(componentSpecie => (
        componentSpecie[species]
      ))}
      {ComponentsStatus.map(componentStatus => (
        componentStatus[status]
      ))}
    </>
  )
}

export default Characteristics
