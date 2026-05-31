import '../index.css'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Marquee } from './ui/marquee'

export function Footer() {

    return (
        <>
            <div className='bg-black text-white'>
                <Marquee repeat={6} className='font-semibold w-screen'>
                    <span>NEWSLETTER+++</span>
                </Marquee>
                <div className='mt-15 mx-10 gap-10'>
                    <div className='flex-row items-center justify-between'>
                        <h3 className='w-1/2'>DESIGN NEWS TO YOUR INBOX</h3>
                        <div className='flex-row gap-2.5 h-fit items-center'>
                            <input type="email" placeholder='E-Mail' className='bg-white text-black py-1 px-2' />
                            <Button className='bg-white text-black rounded-none p-3 hover:bg-gray-200 text-[0.75rem]'>SIGN UP</Button>
                        </div>
                    </div>

                    <div className='flex-row justify-between'>
                        <Link className='h-fit' to="/">
                            <h3 className='text-2xl'>FYRRE MAGAZINE</h3>
                        </Link >

                        <div className='text-gray-400 mt-2.5'>
                            <div>

                            </div>

                            <div>
                                <Link to="/Magazines">
                                    Magazines
                                </Link >
                                <Link to="/Podcasts">
                                    Podcasts
                                </Link >
                                <Link to="/Authors">
                                    Authors
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