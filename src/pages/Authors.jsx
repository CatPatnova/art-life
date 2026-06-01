import '../index.css'
import { Author } from '@/components/Episode'

function Authors() {
    return (
        <div className='mt-10 mb-30 mx-15 items-center'>
            <h1>Authors</h1>
            <Author
                src='src/assets/Jakob.svg'
                name='Jakob Grønberg'
                job='Artist'
                city='Berlin'
            />
            <Author
                src='src/assets/Louise.svg'
                name='Louise Jensen'
                job='Artist'
                city='Berlin'
            />
            <Author
                src='src/assets/Anne.svg'
                name='Anne Henry'
                job='Artist'
                city='Berlin'
            />
            <Author
                src='src/assets/Anna.svg'
                name='Anna Nielsen'
                job='Artist'
                city='Berlin'
            />
            <Author
                src='src/assets/Jane.svg'
                name='Jane Cooper'
                job='Artist'
                city='Berlin'
            />
            <Author
                src='src/assets/Cristofer.svg'
                name='Cristofer Vaccaro'
                job='Artist'
                city='Berlin'
            />
        </div>
    )
}

export default Authors