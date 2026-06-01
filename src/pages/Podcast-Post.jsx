import { PodcastThumbnail } from '@/components/Thumbnail'
import '../index.css'
import { Link } from 'react-router-dom'

function PodcastPost() {
    return (
        <div className='mt-10 mx-15 items-center'>
            <div className='flex-row justify-between w-full'>
                <Link to='/Podcasts'>
                    <div className='flex-row items-center'>
                        <img src="src/assets/arrow-left.svg" className='h-4 w-6 ' />
                        <p className='font-semibold'>GO BACK</p>
                    </div>
                </Link>
                <h3>PODCAST</h3>
            </div>
            <div className='flex-row justify-evenly'>
                <div>
                    <img src="src/assets/podcast-cover1.svg" className='h-87.5' />
                    <div className='flex-row w-full justify-between mt-10 mb-20'>
                        <p className='font-semibold'>Listen On</p>
                        <div className='flex-row gap-2.5'>
                            <a href='https://www.spotify.com'><img src="src/assets/spotify-black-ico.svg" className='w-6 h-6' /></a>
                            <a href='https://music.apple.com'><img src="src/assets/apple-black-ico.svg" className='w-6 h-6' /></a>
                            <a href='https://www.soundcloud.com'><img src="src/assets/soundcloud-black-ico.svg" className='w-6 h-6' /></a>
                        </div>
                    </div>
                    <div className='border-t border-black'>
                        <div className='flex-row justify-between mt-10'>
                            <p className='font-semibold'>Date</p>
                            <p>16. March 2022</p>
                        </div>
                        <div className='flex-row justify-between mt-5'>
                            <p className='font-semibold'>Duration</p>
                            <p>45 Min</p>
                        </div>
                        <div className='flex-row justify-between mt-5'>
                            <p className='font-semibold'>Share</p>
                            <div className='flex-row gap-2.5'>
                                <a href='https://www.instagram.com'><img src="src/assets/instagram-black-ico.svg" className='w-6 h-6' /></a>
                                <a href='https://www.twitter.com'><img src="src/assets/twitter-black-ico.svg" className='w-6 h-6' /></a>
                                <a href='https://www.youtube.com'><img src="src/assets/youtube-black-ico.svg" className='w-6 h-6' /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 gap-15'>
                    <h3>EPISODE 01</h3>
                    <h2>SAVE THE WORLD FROM OURSELVES</h2>
                    <p className='font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
                    </p>
                    <p>
                        Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.
                    </p>
                    <p>
                        Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar etiam non. Non consectetur a erat nam at lectus urna duis convallis.
                    </p>

                    <div className='border-y border-black flex-row gap-5 py-10'>
                        <h2 className='text-8xl'>“</h2>
                        <div className='gap-5'>
                            <h2 className='text-5xl'>The greatest glory in living lies not in never falling, but in rising every time we fall.</h2>
                            <p>Nelson Mandela</p>
                        </div>
                    </div>

                    <p className='font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
                    </p>
                    <p>
                        Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.
                    </p>
                    <p>
                        Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar etiam non. Non consectetur a erat nam at lectus urna duis convallis.
                    </p>
                </div>
            </div>
            <div className='flex-row justify-between items-center w-full mt-15'>
                <h2>LATEST EPISODES</h2>
                <Link to='/Podcasts'>
                    <div className='flex-row items-center'>
                        <p className='font-semibold'>ALL EPISODES</p>
                        <img src="src/assets/arrow-right.svg" className='h-4 w-6 ' />
                    </div>
                </Link>
            </div>
            <div className='flex-row my-25'>
                <PodcastThumbnail
                    src='src/assets/podcast-cover1.svg'
                    title="The Problem of today's cultural development"
                    date='16.06.2022'
                    duration='1h 20 Min'
                />
                <PodcastThumbnail
                    src='src/assets/podcast-cover2.svg'
                    title="The hidden messages of Jack Nielson"
                    date='16.06.2022'
                    duration='60 Min'
                />
                <PodcastThumbnail
                    src='src/assets/podcast-cover3.svg'
                    title="Behind the scenes of the street art culture"
                    date='16.06.2022'
                    duration='45 Min'
                />
            </div>
        </div>
    )
}

export default PodcastPost