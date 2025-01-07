import { useState } from 'react'

import './App.css'
import { TwiterFollowCard } from './components/TwiterFollowCard'

function App() {
  return (
    <>
     <TwiterFollowCard isFollowing={true} username="midudev">
      Miguela angel Duran
     </TwiterFollowCard>
    </>
  )
}

export default App
