import '../index.css'
import { Link } from 'react-router-dom'



export function Navbar() {

    return (
        <>
            <div className='flex-row justify-between mt-5 mx-5 pb-1 items-center border-b-2 border-black'>
                <Link to="/">
                    <h3 className='text-2xl'>FYRRE MAGAZINE</h3>
                </Link >
                <div className='flex-row space-x-3.5 text-center align-middle'>
                    <Link to="/Magazines">Magazines</Link>
                    <Link to="/Authors">Authors</Link>
                    <Link to="/Podcasts">Podcasts</Link>
                    <img src="src/assets/line.svg" className='w-4' />
                    <a href='https://www.instagram.com'><img src="src/assets/instagram-black-ico.svg" className='w-6 h-6' /></a>
                    <a href='https://www.twitter.com'><img src="src/assets/twitter-black-ico.svg" className='w-6 h-6' /></a>
                    <a href='https://www.youtube.com'><img src="src/assets/youtube-black-ico.svg" className='w-6 h-6' /></a>
                    <a href='#'><img src="src/assets/rss-black-ico.svg" className='w-6 h-6' /></a>
                </div>
            </div >
        </>
    )
}

