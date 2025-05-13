import Image from 'next/image';
import styles from './PageBanner.module.css'; // Create this CSS module

// Define the props interface
interface BannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <div className="relative w-full h-[300px] mb-[5rem]">
        <Image
        src={'/images/header-bkg.png'}
        alt={'Background image for page banner'}
        fill
        style={{ objectFit: 'cover', objectPosition: 'center'}}
        priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl md:text-left text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                    {subtitle && (
                    <p className="text-lg md:text-xl text-white">{subtitle}</p>
                    )}
                </div>
            </div>
            <div className="absolute bottom-[-24px] w-5/6 flex justify-end items-center rounded-r-full bg-gradient-to-r from-indigo-500 to-sky-500" style={{ height: "35px"}} >
                <Image 
                src="/images/ball-right.svg"
                alt="Ball with laces facing right"
                height={25}
                width={25}
                className='pe-1'
                />
            </div>
        </div>
    </div>
  );
};

export default PageBanner;