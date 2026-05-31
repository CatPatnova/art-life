import { Link } from 'react-router-dom'
import '../index.css'


export function PodcastThumbnail({ src, title, date, duration }) {
    return (
        <div className='border border-black w-1/3 p-8 justify-center items-center'>
            <Link to="/Podcasts/Post">
                <img src={src} className='h-100' />
            </Link>
            <div className='w-100 space-y-8 mt-8'>
                <h3 className='text-4xl'>{title}</h3>
                <div className='flex-row gap-4'>
                    <div className='flex-row gap-2.5'>
                        <p className='font-semibold'>Date</p>
                        <p>{date}</p>
                    </div>
                    <div className='flex-row gap-2.5'>
                        <p className='font-semibold'>Duration</p>
                        <p>{duration}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function AuthorThumbnail({ src, name, job, city }) {
    return (
        <div className='border border-black flex-row p-5 items-center gap-5 w-1/2'>
            <img src={src} />
            <div className='gap-8'>
                <h3 className='text-3xl'>{name}</h3>
                <div className='flex-row gap-3'>
                    <div className='flex-row gap-2.5'>
                        <p className='font-semibold'>Job</p>
                        <p>{job}</p>
                    </div>
                    <div className='flex-row gap-2.5'>
                        <p className='font-semibold'>City</p>
                        <p>{city}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}