import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='bg-gray-400 p-4 text-center border-4 border-black my-3'>User :{userid}</div>
  )
}

export default User
