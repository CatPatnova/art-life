import '../index.css'
import { Link } from 'react-router-dom'

export function Episode({ num, src, title, date, dur }) {
    return (
        <div className='flex-row items-center w-full justify-between py-15 border-b border-black'>
            <div className='flex-row items-center gap-15'>
                <h3>{num}</h3>
                <img src={src} className='h-60' />
                <h3>{title}</h3>
            </div>
            <div className='flex-row items-center gap-5'>
                <div className='flex-row gap-2.5'>
                    <p className='font-semibold'>Date</p>
                    <p>{date}</p>
                </div>
                <div className='flex-row gap-2.5'>
                    <p className='font-semibold'>Duration</p>
                    <p>{dur}</p>
                </div>
                <Link to='/Podcasts/Post'>
                    <div className='flex-row items-center'>
                        <p className='font-semibold'>LISTEN</p>
                        <img src="src/assets/arrow-right.svg" className='h-4 w-6 ' />
                    </div>
                </Link>
            </div>

        </div>
    )
}

export function Author({ src, name, job, city }) {
    return (
        <div className='flex-row items-center w-full justify-between py-15 border-b border-black'>
            <div className='flex-row items-center gap-15'>
                <img src={src} className='h-60' />
                <h3>{name}</h3>
            </div>
            <div className='flex-row items-center gap-5'>
                <div className='flex-row gap-2.5'>
                    <p className='font-semibold'>Job</p>
                    <p>{job}</p>
                </div>
                <div className='flex-row gap-2.5'>
                    <p className='font-semibold'>City</p>
                    <p>{city}</p>
                </div>
                <Link to='/Authors/About'>
                    <div className='flex-row items-center'>
                        <p className='font-semibold'>ABOUT</p>
                        <img src="src/assets/arrow-right.svg" className='h-4 w-6 ' />
                    </div>
                </Link>
            </div>

        </div>
    )
}
