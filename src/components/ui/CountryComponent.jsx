import React from 'react'
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const CountryComponent = ({ country }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/country/${country.name.official}`)
    }

    return (
        <li className='bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] border border-b-gray-400 p-10 rounded-4xl flex flex-col gap-3 w-full h-full'>
            <img src={country.flags.png} alt="" />
            <div className='font-extrabold text-3xl'>{country.name.common}</div>
            <div> <span className='text-gray-400 font-extrabold'>Capital</span> : {country.capital}</div>
            <div> <span className='text-gray-400 font-extrabold'>Population</span> : {country.population}</div>
            <Button onClick={handleClick}>Read More</Button>
        </li>
    )
}

export default CountryComponent
