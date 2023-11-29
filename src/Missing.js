import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function Missing() {
  return (
    <main className='Missing'>
      <h2>Why are we here?</h2>
      <p>You have reached Placeholder Page for Broken URLs
        <br></br>Click below to go back to home page</p>
      <p>
        <Link to='/'>Homepage</Link>
      </p>
    </main>
  )
}

export default Missing