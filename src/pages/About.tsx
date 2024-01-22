import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <>
      <hr className="mx-auto m-1 h-10"/>
      <div>Hello, I'm web developer</div>      
      <div className="flex justify-end h-full bg-pink-400">
        <div className="inline h-8 w-1/3 bg-red-400">
          <h2 className="text-2xl text-blue-500">About me</h2>
        </div>
        <div className="w-1/3 bg-teal-400">
          Something picture
        </div>
        <div className="w-1/3 bg-blue-400">
          Details
        </div>
      </div>
    </>        
  )
}