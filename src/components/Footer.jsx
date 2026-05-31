import '../index.css'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

export function Footer() {

    return (
        <>
            <div className='w-full bg-black text-white'>
                <Marquee>
                    <p>NEWSLETTER+++</p>
                </Marquee>
                <div className='mt-15 mx-10 gap-10'>
                    <div className='flex-row items-center'>
                        <h3 className='w-1/2'>DESIGN NEWS TO YOUR INBOX</h3>
                        <div className='flex-row gap-2.5 h-fit'>
                            <input type="email" placeholder='email' className='bg-white text-black py-3 px-4' />
                            <button className='text-black bg-white p-2.5 '>
                                <p>Sign up</p>
                            </button>
                        </div>
                    </div>

                    <div className='flex-row justify-between'>
                        <Link to="/">
                            <h3 className='text-2xl'>FYRRE MAGAZINE</h3>
                        </Link >

                        <div className='text-gray-400 mt-2.5'>
                            <div>

                            </div>

                            <div>
                                <Link to="/Magazines">
                                    Magazine
                                </Link >
                            </div>

                            <div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}