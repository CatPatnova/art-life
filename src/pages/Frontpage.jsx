import '../index.css'
import { Link } from 'react-router-dom'
import { Marquee } from '../components/ui/marquee'
import { Article, Article2 } from '@/components/Article'
import { Button } from '@/components/ui/button'
import { PodcastThumbnail, AuthorThumbnail } from '@/components/Thumbnail'


function Frontpage() {
    return (
        <div className='items-center w-100vw mx-15'>
            <h1>art & life</h1>
            <div className='flex-row justify-center gap-5 px-2.5 items-center bg-black text-white'>
                <h3 className='w-1/4 text-center'>NEWS TICKER+++</h3>
                <Marquee repeat={4} className='w-3/4'><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span></Marquee>
            </div>

            <div className='flex-col md:flex-row items-center justify-between'>
                <h2 className='md:w-1/2'>DON'T CLOSE YOUR EYES</h2>
                <Article
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam."
                    author='Jakob Gronberg'
                    date='16. March 2022'
                    duration='1 Min'
                    label='label'
                />
            </div>
            <img src="/assets/dont-close-your-eyes.svg" className='w-full h-1/6 mt-10' />
            <div className='mt-15 gap-15  flex-col md:flex-row'>
                <div className='gap-8'>
                    <Article2
                        src='src/assets/hope-dies-last.svg'
                        title='Hope dies last'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        date='16. March 2022'
                        duration='1 min'
                        label='ART'
                    />
                    <Article2
                        src='src/assets/the-best-art-museums.svg'
                        title='The best art museums'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        date='16. March 2022'
                        duration='1 min'
                        label='SCULPTURES'
                    />
                    <Article2
                        src='src/assets/the-devil-is-the-details.svg'
                        title='The devil is the details'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        date='16. March 2022'
                        duration='1 min'
                        label='ART'
                    />
                    <Article2
                        src='src/assets/an-indestructible-hope.svg'
                        title='An indestructible hope'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        date='16. March 2022'
                        duration='1 min'
                        label='ART'
                    />
                    <Article2
                        src='src/assets/street-art-festival.svg'
                        title='Street art festival'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        date='16. March 2022'
                        duration='1 min'
                        label='STREET ART'
                    />
                    <Article2
                        src='src/assets/through-the-eyes-of-street-artists.svg'
                        title='Through the eyes of street artists'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        date='16. March 2022'
                        duration='1 min'
                        label='STREET ART'
                    />
                    <Link to="/Magazines">
                        <div className='flex-row items-center mt-7'>
                            <p className='font-semibold'>ALL ARTICLES</p>
                            <img src="src/assets/arrow-right.svg" className='h-4 w-6 ' />
                        </div>
                    </Link>
                </div>
                <div>
                    <h3>PRINTMAGAZINE</h3>
                    <h2>03/2022</h2>
                    <img src="src/assets/magazin-cover.svg" className='max-w-92 max-h-116' />
                    <Button className='rounded-none w-fit p-6'>BUTTON</Button>
                    <p className='font-semibold mt-15'>MOST POPULAR</p>
                    <div className='border-b border-black flex-row gap-7'>
                        <h3 className='font-semibold'>01</h3>
                        <div className='gap-2.5 mt-1.5 mb-4'>
                            <h3>Street art festival</h3>
                            <div className='flex-row gap-2.5'>
                                <p className='font-semibold'>Text</p>
                                <p>Cristofer Vaccaro</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-b border-black flex-row gap-7'>
                        <h3 className='font-semibold'>02</h3>
                        <div className='gap-2.5 mt-1.5 mb-4'>
                            <h3>Hope dies last</h3>
                            <div className='flex-row gap-2.5'>
                                <p className='font-semibold'>Text</p>
                                <p>Anne Henry</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-row gap-7'>
                        <h3 className='font-semibold'>03</h3>
                        <div className='gap-2.5 mt-1.5 mb-4'>
                            <h3>Artists who want to rise above</h3>
                            <div className='flex-row gap-2.5'>
                                <p className='font-semibold'>Text</p>
                                <p>Anna Nielsen</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-100 p-4 gap-5 mt-15'>
                        <h3>NEWSLETTER</h3>
                        <h2 className='text-5xl'>Design News to your inbox</h2>
                        <input type="email" placeholder='E-Mail' className='bg-white text-black py-3.5 px-1.5' />
                        <Button className='rounded-none p-6 w-fit hover:bg-gray-800 text-[0.75rem] ml-auto'>SIGN UP</Button>
                    </div>
                </div>
            </div>

            <div className='border-t border-black mt-15 w-full'>
                <div className='flex-row items-center justify-between'>
                    <h2>PODCAST</h2>
                    <Link to="/Podcasts">
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

                <div className='border-t border-black mt-15 mb-35 w-full'>
                    <div className='flex-row items-center justify-between'>
                        <h2>AUTHORS</h2>
                        <Link to="/Podcasts">
                            <div className='flex-row items-center'>
                                <p className='font-semibold'>ALL AUTHORS</p>
                                <img src="src/assets/arrow-right.svg" className='h-4 w-6 ' />
                            </div>
                        </Link>
                    </div>
                    <div className='mt-15'>
                        <div className='flex-row items-center justify-center'>
                            <AuthorThumbnail
                                src="src/assets/Jakob.svg"
                                name="Jakob Grønberg"
                                job="Artist"
                                city="Berlin"
                            />
                            <AuthorThumbnail
                                src="src/assets/Louise.svg"
                                name="Louise Jensen"
                                job="Artist"
                                city="Stockholm"
                            />
                        </div>
                        <div className='flex-row items-center justify-center'>
                            <AuthorThumbnail
                                src="src/assets/Anne.svg"
                                name="Anne Henry"
                                job="Photographer"
                                city="New York"
                            />
                            <AuthorThumbnail
                                src="src/assets/Anna.svg"
                                name="Anna Nielsen"
                                job="Columnist"
                                city="Copenhagen"
                            />
                        </div>
                        <div className='flex-row items-center justify-center'>
                            <AuthorThumbnail
                                src="src/assets/Jane.svg"
                                name="Jane Cooper"
                                job="Artist"
                                city="Berlin"
                            />
                            <AuthorThumbnail
                                src="src/assets/Cristofer.svg"
                                name="Cristofer Vaccaro"
                                job="Artist"
                                city="Lisbon"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Frontpage
