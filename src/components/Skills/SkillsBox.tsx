import Image from "next/image";


const SkillsBox = ({data} : any) => {
    

    return (
        <div className=' flex flex-col justify-center items-center space-y-3'>
            <Image
                src={data.img}
                alt={data.name}
                width={80}
                height={80}
            />
            <p>{data.name}</p>
        </div>
    );
};

export default SkillsBox;