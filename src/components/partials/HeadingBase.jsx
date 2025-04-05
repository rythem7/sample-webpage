export default function Heading(props) {
    return(
        <div className='bg-transparent flex items-center h-[5rem] mt-20'>
            <h1 className='lg:text-7xl md:text-6xl text-5xl text-secondary font-extrabold'>
                {props.text ? props.text : "Why Pick Us ?"}
            </h1>
        </div>
    );
}