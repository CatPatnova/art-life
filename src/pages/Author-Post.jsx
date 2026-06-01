import '../index.css'
import { Link } from 'react-router-dom'
import { AuthorArticle } from '@/components/Thumbnail'

function AuthorPost() {
    return (
        <div className='mt-10 mx-15 items-center'>
            <div className='flex-row justify-between w-full'>
                <Link to='/Authors'>
                    <div className='flex-row items-center'>
                        <img src="src/assets/arrow-left.svg" className='h-4 w-6 ' />
                        <p className='font-semibold'>GO BACK</p>
                    </div>
                </Link>
                <h3>AUTHOR</h3>
            </div>
            <div className='flex-row justify-center gap-15 pb-15 border-b border-black'>
                <div className='flex-row'>
                    <div>
                        <div className='flex-row items-center space-x-5 border-b border-black pb-10'>
                            <img src="src/assets/Louise.svg" className='h-87.5 w-87.5' />
                        </div>
                        <div className='flex-row justify-between mt-5'>
                            <p className='font-semibold'>FOLLOW</p>
                            <div className='flex-row gap-2.5'>
                                <a href='https://www.instagram.com'><img src="src/assets/instagram-black-ico.svg" className='w-6 h-6' /></a>
                                <a href='https://www.twitter.com'><img src="src/assets/twitter-black-ico.svg" className='w-6 h-6' /></a>
                                <a href='https://www.youtube.com'><img src="src/assets/youtube-black-ico.svg" className='w-6 h-6' /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 p-15 gap-10'>
                    <h2>LOUISE JENSEN</h2>
                    <p className='font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
                    </p>
                    <p>
                        Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.
                    </p>
                </div>
            </div>
            <div className='w-full mb-30'>
                <h2>Articles by Louise Jensen</h2>
                <div className='flex-row'>
                    <AuthorArticle
                        src='src/assets/the-best-art-museums.svg'
                        title='The best art museums'
                        date='16. March 2022'
                        read='10 Min'
                    />
                    <AuthorArticle
                        src='src/assets/an-indestructible-hope.svg'
                        title='An indestructible hope'
                        date='16. March 2022'
                        read='10 Min'
                    />
                </div>
                <div className='flex-row'>
                    <AuthorArticle
                        src='src/assets/through-the-eyes-of-street-artists.svg'
                        title='The chains of our lives'
                        date='16. March 2022'
                        read='10 Min'
                    />
                    <AuthorArticle
                        src='src/assets/keep-on-smiling.svg'
                        title='Keep on smiling'
                        date='16. March 2022'
                        read='10 Min'
                    />
                </div>
            </div>
        </div>
    )
}

export default AuthorPost