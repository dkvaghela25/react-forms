import React from 'react'

const Fact = ({ data }) => {
    const { countryName, capital, population, interestingFact } = data;
    return (
        <li className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border border-b-gray-400 p-10 rounded-4xl flex flex-col gap-3'>
            <div className='font-extrabold text-3xl'>{countryName}</div>
            <div> <span className='text-gray-400 font-extrabold'>Capital</span> : {capital}</div>
            <div> <span className='text-gray-400 font-extrabold'>Population</span> : {population}</div>
            <div> <span className='text-gray-400 font-extrabold'>Interesting Fact</span> : {interestingFact}</div>
        </li>
    )
}

export default Fact
