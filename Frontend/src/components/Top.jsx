import React from 'react'

export default function Top() {
  return (
      <div className="h-[30%] bg-[linear-gradient(180deg,rgba(68,7,117,1)_0%,rgba(0,0,0,0.6)_100%)] text-white flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl text-center font-bold">Your Personalised Code Reviewer</h1>
        <p className="text-sm md:text-xl sm:text-lg mt-2 text-orange-400">
          Write Code. Click Generate. Get Instant Review.
        </p>
      </div>
  )
}
