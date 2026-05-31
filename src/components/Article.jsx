import '../index.css'

export function Article({ content, author, date, duration, label }) {

    return (
        <div className='flex-col md:w-1/2 gap-10'>
            <p>{content}</p>
            <div className='flex-row justify-between items-end md:items-center'>
                <div className='gap-2.5 md:flex-row'>
                    <div className='flex-row space-x-2.5'>
                        <p className='font-semibold'>Text</p>
                        <p>{author}</p>
                    </div>
                    <div className='flex-row space-x-2.5'>
                        <p className='font-semibold'>Date</p>
                        <p>{date}</p>
                    </div>
                    <div className='flex-row space-x-2.5'>
                        <p className='font-semibold'>Duration</p>
                        <p>{duration}</p>
                    </div>
                </div>
                <p className='rounded-full border border-black h-fit px-2.5 py-1.5'>{label}</p>
            </div>
        </div>
    )

}

export function Article2({ src, title, content, author, date, duration, label }) {

    return (
        <div className='flex-row space-x-5 pb-8 border-b border-black items-center'>
            <img src={src} className='max-h-60 max-w-60' />
            <div className='flex-col gap-5'>
                <h3>{title}</h3>
                <p>{content}</p>
                <div className='flex-row justify-between items-center'>
                    <div className=' md:flex-row gap-2.5'>
                        <div className='flex-row space-x-2.5'>
                            <p className='font-semibold'>Text</p>
                            <p>{author}</p>
                        </div>
                        <div className='flex-row space-x-2.5'>
                            <p className='font-semibold'>Date</p>
                            <p>{date}</p>
                        </div>
                        <div className='flex-row space-x-2.5'>
                            <p className='font-semibold'>Duration</p>
                            <p>{duration}</p>
                        </div>
                    </div>
                    <p className='rounded-full border border-black h-fit px-2.5 py-1.5 text-center'>{label}</p>
                </div>
            </div>

        </div>
    )

}