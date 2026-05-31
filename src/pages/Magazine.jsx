import '../index.css'
import { ArticleThumbnail } from '@/components/Thumbnail'

function Magazine() {
    return (
        <div className='items-center mx-15'>
            <h1 className='text-center'>Magazine</h1>
            <div className='flex-row justify-between w-full items-center'>
                <h3>CATERGORIES</h3>
                <div className='flex-row gap-2.5'>
                    <p className='rounded-full border border-black h-fit w-fit px-2.5 py-1.5 text-center'>ALL</p>
                    <p className='rounded-full border border-black h-fit w-fit px-2.5 py-1.5 text-center'>ART</p>
                    <p className='rounded-full border border-black h-fit w-fit px-2.5 py-1.5 text-center'>STREET ART</p>
                    <p className='rounded-full border border-black h-fit w-fit px-2.5 py-1.5 text-center'>SCULPTURES</p>
                </div>
            </div>

            <div className='mt-20'>
                <div className='flex-row'>
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='ART'
                        src='src/assets/hope-dies-last.svg'
                        title='Hope dies last'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='ART'
                        src='src/assets/the-devil-is-the-details.svg'
                        title="The devil is the details"
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='SCULPTURES'
                        src='src/assets/the-best-art-museums.svg'
                        title='The best art museums'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                </div>
                <div className='flex-row'>
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='ART'
                        src='src/assets/hope-dies-last.svg'
                        title='Hope dies last'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='ART'
                        src='src/assets/the-devil-is-the-details.svg'
                        title="The devil is the details"
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='SCULPTURES'
                        src='src/assets/the-best-art-museums.svg'
                        title='The best art museums'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                </div>
                <div className='flex-row'>
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='ART'
                        src='src/assets/hope-dies-last.svg'
                        title='Hope dies last'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='ART'
                        src='src/assets/the-devil-is-the-details.svg'
                        title="The devil is the details"
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='SCULPTURES'
                        src='src/assets/the-best-art-museums.svg'
                        title='The best art museums'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                </div>
                <div className='flex-row'>
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='ART'
                        src='src/assets/hope-dies-last.svg'
                        title='Hope dies last'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='ART'
                        src='src/assets/the-devil-is-the-details.svg'
                        title="The devil is the details"
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='SCULPTURES'
                        src='src/assets/the-best-art-museums.svg'
                        title='The best art museums'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                </div>
                <div className='flex-row'>
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='ART'
                        src='src/assets/hope-dies-last.svg'
                        title='Hope dies last'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='ART'
                        src='src/assets/the-devil-is-the-details.svg'
                        title="The devil is the details"
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='SCULPTURES'
                        src='src/assets/the-best-art-museums.svg'
                        title='The best art museums'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                </div>
                <div className='flex-row items-center mt-15 w-full justify-end'>
                    <p className='font-semibold'>NEXT</p>
                    <img src="src/assets/arrow-right.svg" className='h-4 w-6 ' />
                </div>
                <div className='flex-row my-15'>
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='ART'
                        src='src/assets/hope-dies-last.svg'
                        title='Hope dies last'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='ART'
                        src='src/assets/the-devil-is-the-details.svg'
                        title="The devil is the details"
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                    <ArticleThumbnail
                        date='16. March 2022'
                        label='SCULPTURES'
                        src='src/assets/the-best-art-museums.svg'
                        title='The best art museums'
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.'
                        author='Jakob Gronberg'
                        dur='1 Min'
                    />
                </div>
            </div>
        </div>
    )
}

export default Magazine