
import svg1 from './../../public/notfound.svg'
import Image from 'next/image'

const notFoundPage = () => {
    return (
        <div className='flex justify-center items-center'>
           <Image src={svg1} alt="not found" width={600} height={300}  />

        </div>
    );
};

export default notFoundPage;