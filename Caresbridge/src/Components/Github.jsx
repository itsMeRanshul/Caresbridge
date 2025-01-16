import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

       const data=useLoaderData()

    // const [data,setdata]=useState(0)
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=> response.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setdata(data.followers)
    //     })
    // },[])
   
  return (
    <div className='flex bg-gray-400 w-full '>
         <div className='w-full h-max'>
        <div className="self-center">
        <img src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk=' alt="" className='w-1/2'/>
    </div>
    </div>
    <div className=' flex items-center justify-center w-1/2 '>
      GitHub :{data.followers}
    </div>
   
    </div>
  )
}

export default Github
export const githubLoader= async ()=>{
  const response =await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}
