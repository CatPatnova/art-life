import { ArticleThumbnail } from '@/components/Thumbnail'
import '../index.css'
import { Link } from 'react-router-dom'

function MagazinePost() {
    return (
        <div className='mt-10 mx-15 items-center'>
            <div className='flex-row justify-between w-full'>
                <Link to='/Magazines'>
                    <div className='flex-row items-center'>
                        <img src="assets/arrow-left.svg" className='h-4 w-6 ' />
                        <p className='font-semibold'>GO BACK</p>
                    </div>
                </Link>
                <h3>MAGAZINE</h3>
            </div>
            <div className='flex-row justify-between mt-25'>
                <h2 className='w-1/3'>HOPE DIES LAST</h2>
                <p className='w-1/3 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
            </div>
            <div className='flex-row justify-between items-center w-full'>
                <div className='flex-row space-x-10'>
                    <div className='flex-row gap-2.5'>
                        <p className='font-semibold'>Text</p>
                        <p>Jakob Gronberg</p>
                    </div>
                    <div className='flex-row gap-2.5'>
                        <p className='font-semibold'>Date</p>
                        <p>16. March 2022</p>
                    </div>
                    <div className='flex-row gap-2.5'>
                        <p className='font-semibold'>Read</p>
                        <p>2 Min</p>
                    </div>
                </div>
                <p className='rounded-full border border-black h-fit w-fit px-2.5 py-1.5 text-center'>LABEL</p>
            </div>
            <img src="assets/hope-dies-last-large.svg" className='mt-10' />
            <div className='flex-row border-b border-black py-15'>
                <div className='w-2/3'>
                    <div className='flex-row items-center space-x-5 border-b border-black pb-10'>
                        <img src="assets/Jakob.svg" />
                        <h2 className='text-7xl'>Jakob Gronberg</h2>
                    </div>
                    <div className='flex-row justify-between mt-10'>
                        <p className='font-semibold'>Date</p>
                        <p>16. March 2022</p>
                    </div>
                    <div className='flex-row justify-between mt-5'>
                        <p className='font-semibold'>Read</p>
                        <p>2 Min</p>
                    </div>
                    <div className='flex-row justify-between mt-5'>
                        <p className='font-semibold'>Share</p>
                        <div className='flex-row gap-2.5'>
                            <a href='https://www.instagram.com'><img src="assets/instagram-black-ico.svg" className='w-6 h-6' /></a>
                            <a href='https://www.twitter.com'><img src="assets/twitter-black-ico.svg" className='w-6 h-6' /></a>
                            <a href='https://www.youtube.com'><img src="assets/youtube-black-ico.svg" className='w-6 h-6' /></a>
                        </div>
                    </div>
                </div>
                <div className='w-3/4 gap-15 px-20'>
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
            <div className='flex-row justify-between items-center w-full'>
                <h2>LATEST POSTS</h2>
                <Link to='/Magazines'>
                    <div className='flex-row items-center'>
                        <p className='font-semibold'>SEE ALL</p>
                        <img src="assets/arrow-right.svg" className='h-4 w-6 ' />
                    </div>
                </Link>
            </div>
            <div className='flex-row mt-15 mb-50'>
                <ArticleThumbnail
                    date='16. March 2022'
                    label='ART'
                    src='assets/hope-dies-last.svg'
                    title='Hope dies last'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                    author='Jakob Gronberg'
                    dur='1 Min'
                />
                <ArticleThumbnail
                    date='16. March 2022'
                    label='ART'
                    src='assets/the-devil-is-the-details.svg'
                    title="The devil is the details"
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                    author='Jakob Gronberg'
                    dur='1 Min'
                />
                <ArticleThumbnail
                    date='16. March 2022'
                    label='SCULPTURES'
                    src='assets/the-best-art-museums.svg'
                    title='The best art museums'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                    author='Jakob Gronberg'
                    dur='1 Min'
                />
            </div>
        </div>
    )
}

export default MagazinePost