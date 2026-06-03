import '../index.css'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Marquee } from './ui/marquee'

export function Footer() {

    return (
        <>
            <div className='bg-black text-white'>
                <Marquee repeat={6} className='font-semibold w-screen justify-center'>
                    <span>NEWSLETTER+++</span>
                    <span>NEWSLETTER+++</span>
                </Marquee>
                <div className='mt-15 mx-10 gap-10'>
                    <div className='flex-row items-center justify-between'>
                        <h2 className='w-1/2'>DESIGN NEWS TO YOUR INBOX</h2>
                        <div className='flex-row gap-2.5 h-fit items-center'>
                            <input type="email" placeholder='E-Mail' className='bg-white text-black text-[0.75rem] py-1.75 px-2' />
                            <Button className='bg-white text-black rounded-none p-3 hover:bg-gray-200 text-[0.75rem]'>SIGN UP</Button>
                        </div>
                    </div>

                    <div className='flex-row justify-between mb-8'>
                        <Link className='h-fit' to="/">
                            <h3 className='text-2xl'>FYRRE MAGAZINE</h3>
                        </Link >

                        <div className='text-gray-400 text-[0.75rem] mt-5 space-x-25 flex-row'>
                            <div className='gap-2.5'>
                                <a href='#'>Art</a>
                                <a href='#'>Design</a>
                                <a href='#'>Architecture</a>
                            </div>

                            <div className='gap-2.5'>
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

                            <div className='gap-2.5'>
                                <a href='#'>Styleguide</a>
                                <a href='#'>Licensing</a>
                                <a href='#'>Changelog</a>
                            </div>
                        </div>
                    </div>

                    <div className='flex-row items-center justify-between mb-5'>
                        <p className='text-gray-400 text-[0.75rem]'>© Made by Pawel Gola -  Powered by Webflow</p>
                        <div className='flex-row space-x-3'>
                            <a href='https://www.instagram.com'><img src="assets/instagram-white-ico.svg" className='w-6 h-6' /></a>
                            <a href='https://www.twitter.com'><img src="assets/twitter-white-ico.svg" className='w-6 h-6' /></a>
                            <a href='https://www.youtube.com'><img src="assets/youtube-white-ico.svg" className='w-6 h-6' /></a>
                            <a href='#'><img src="assets/rss-white-ico.svg" className='w-6 h-6' /></a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}