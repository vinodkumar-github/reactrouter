import React from 'react'




function Header({title}) {

 const dispT = new Date();

  return (
    <header className='Header'>
        <h1>{title}</h1>
        <div>
        <h6 className='Time'>{String(dispT.getDate())} / {String(dispT.getMonth())} / {String(dispT.getFullYear())}</h6>
        <h6 className='Time'>{String(dispT.getHours())} : {String(dispT.getMinutes())}</h6>
       </div>
    </header>
  )
}

export default Header