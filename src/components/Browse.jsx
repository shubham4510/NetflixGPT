import { useState } from 'react'
import Header from './Header.jsx'

const Browse = () => {
  const [userLogIn, setUserLogIn] = useState(true)

  return (
    <div>
      <Header userLogIn={userLogIn}/>
    </div>
  )
}

export default Browse