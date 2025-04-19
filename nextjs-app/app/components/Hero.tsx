import Image from "next/image";

interface HeroProps {
    imageUrl: string;
    imageAlt: string;
    heading: string;

    pipImageUrl?: string;
    pipImageAlt?: string;
    subText?: string;
}

const Hero: React.FC<HeroProps> = ({imageUrl, imageAlt, heading, pipImageUrl, pipImageAlt, subText}) =>{
    return (
        <>
            <Image 
            src={imageUrl}
            alt={imageAlt}
            fill
            style={{objectFit: 'cover'}}
            />
            <div className="flex flex-col gap-3 justify-center items-center absolute inset-0">
                { pipImageUrl && pipImageAlt ? (
                    <div className='max-w-sm relative'>
                        <Image src={pipImageUrl} alt={pipImageAlt} width={500} height={500} objectFit="contain"/>
                    </div>) : null }
                <h1 className="mt-4 text-5xl font-medium text-center italic text-white">{heading}</h1>
                { subText && (<h3 className="text-sm text-center italic text-white">{subText}</h3>)}
            </div>
        </>
    );
};



export default Hero;