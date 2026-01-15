import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen bg-[url('./assets/luke-hero.jpg')] flex items-center justify-center text-center bg-blue-500">

      <div className="relative z-10 text-black p-10 bg-gray-200 rounded-t-4xl">
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-light mb-4 font-serif'>Lukes.Toy.Photography</h2>
        <p className='mb-6'>Explore and purchase my work all in one place!</p>
        <button className='cursor-pointer bg-blue-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition'>Explore Now!</button>
      </div>
    </section >
  )
}

export default Hero
