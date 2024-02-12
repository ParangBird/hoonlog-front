import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <>      
      <p className="mx-auto m-1 h-10 bg-white"/>      
      <p className="text-6xl">HELLO THERE !</p>
      <p className="text-4xl">I'm Hwanhoon, a web developer.</p>
      <p className="mx-auto m-1 h-10 bg-white"/>
      <div className="bg-slate-500">
        <div className="h-36">
          <img src={process.env.PUBLIC_URL + '/hoonlog_my.jpg'} className='w-36 h-36 mx-auto'/>
        </div>
        <div className="mx-auto">
          <h2 className="text-4xl text-green-400">About me</h2>
          <p>I am Hwanhoon-Jung, a web full-stack developer living in South Korea.</p>
          <p>With expertise in both front-end and back-end technologies, I bring ideas to life through clean, user-friendly code.</p>
          <p>Let's build something amazing together!</p>
        </div>
        <br/>
        <br/>
        <div className="flex flex-col items-center text-left">
          <div>
            <p>Email : donchipong@naver.com</p>
            <p>Github : 깃허브링크</p>
          </div>
        </div>
      </div>
    </>        
  )
}