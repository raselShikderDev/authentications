"use client"

import { signOut } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <div className="px-20">
      <p className="mb-10 text-3xl font-semibold mt-5 text-center">User Setting</p>
      <button onClick={()=> signOut()} className="bg-red-500 hover:bg-red-600 active:scale-105 px-4 py-2 text-white">SignOut</button>
    </div>
  )
}

export default page
