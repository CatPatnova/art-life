import '../index.css'
import { Episode } from '@/components/Episode'

function Podcasts() {
    return (
        <div className='items-center mt-10 mb-40 mx-15'>
            <h1>Podcasts</h1>
            <Episode
                num='05'
                src='assets/podcast-cover1.svg'
                title="The Problem of today's cultural development"
                date='16. March 2022'
                dur='1hr 20min'
            />
            <Episode
                num='04'
                src='assets/podcast-cover2.svg'
                title="The hidden messages of Jack Nielson"
                date='16. March 2022'
                dur='1hr 20min'
            />
            <Episode
                num='03'
                src='assets/podcast-cover3.svg'
                title="Behind the scenes of the street art culture"
                date='16. March 2022'
                dur='1hr 20min'
            />
            <Episode
                num='02'
                src='assets/podcast-cover4.svg'
                title="The art of movement"
                date='16. March 2022'
                dur='1hr 20min'
            />
            <Episode
                num='01'
                src='assets/podcast-cover5.svg'
                title="10 Artists you should definitely know"
                date='16. March 2022'
                dur='1hr 20min'
            />
        </div>
    )
}

export default Podcasts