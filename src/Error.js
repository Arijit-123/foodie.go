import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    const err=useRouteError();
    console.log('error',err);
  return (
    <div>
      OOps Something went wrong!!!!
      <h1>{err.status}</h1> 
    </div>
  )
}

export default Error
