import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const NavBar = () => {

    const {user, login, logout} = useContext(AuthContext);

  return (
    <div>
        {user? (
            <>
                <span>Welcome {user}</span>
                <button onClick={logout}>logout</button>
            </>
        ):(
            <button onClick={() => login("Siva")}>Login</button>
        )}
    </div>
  )
}

export default NavBar