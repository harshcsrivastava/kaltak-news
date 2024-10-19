import React from 'react'
import { Link } from 'react-router-dom'
import boltLogo from '../../assets/bolt.png'


function Card({
    title = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageURL = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/shraddha-kapoor-141825285-16x9_0.jpg?VersionId=APQQ9boRsLXjCFHLSUPkaAfN72Bdw5So&size=690:388",
    publishedDate = "2024-10-18T03:40:46Z",
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti sequi odit! Iste dicta accusamus, deleniti optio quasi at est quod vitae labore nam tenetur atque placeat saepe. Labore, quod?",
    author = "Shraddha Kapoor",
    source = "The Washington Post",
    redirect,
    isvisible,
    ...props
}) {
    const rickroll = " https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/Rick-Astley-Never-Gonna-Give-You-Up-Remastered-Header.jpg"
  return (
    (isvisible=="[Removed]") ? null :
    <Link 
    to={redirect}
    target='_blank'
    className='relative rounded-md shadow my-4 p-4 flex flex-col gap-2 lg:w-1/4 lg:p-2 transform transition duration-300 hover:scale-105 border'>
        {(author == null) ? null : (<Link 
        to="/" 
        className='flex items-center gap-2 font-bold text-xs'>
            <img 
            src={boltLogo} 
            alt="kaltak-logo"  
            className='h-6 rounded-full bg-gray-200 shadow p-1'/> 
            By {author}
        </Link>)}
        <Link>
            {(imageURL == null) ? (<img src={rickroll} alt="" className='lg:h-48 rounded-md lg:w-full' />) : (<img src={imageURL} alt="" className='lg:h-48 rounded-md lg:w-full' />)}
        </Link>
        <h1 className='font-bold text-base'>{title} </h1>
        <p className='text-sm'>{description}</p>
        <div className='flex justify-between mt-auto'>
            <h6 className='text-gray-500 text-xs'>
                {String(publishedDate).slice(0,10)}
            </h6>
            <h6 className='text-gray-500 text-xs'>{source}</h6>
        </div>
    </Link>
  )
}

export default Card