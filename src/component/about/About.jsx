import React from 'react'
import Image from "../../assets/image/Image3.png";



const About = () => {
  return (
    // bg-gradient-to-br from-black to-[#0F172A]
    <div className=" text-white  grid grid-cols-2 px-20">
    <div className="flex justify-center items-center  box-border  ">
      <img src={Image} alt="image" className='opacity-75' />
    </div>
    <div className=" w-full flex flex-col  justify-evenly ">
        <div className="flex flex-col items-start ">
            <div className="uppercase text-3xl font-semibold">About me</div>
            <div className="flex items-center justify-start gap-3 w-48">
                <div className="h-[2px] w-[50%] bg-white"></div>
                <div className="uppercase text-sky-500 text-sm font-semibold ">who am i</div>
            </div>
        </div>
        <div className="text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequuntur exercitationem saepe repellendus? Libero, aliquam cumque iure commodi ipsum delectus harum architecto! Nesciunt corporis magnam, aliquam distinctio maxime libero voluptatum iusto impedit adipisci facere numquam dignissimos error excepturi natus! Voluptates dignissimos eaque accusamus, quos eius earum porro et aperiam, ad sunt quod obcaecati at! Reprehenderit ea incidunt nam, officiis quod tempore consequatur quos, facere voluptatum at ipsa quasi, pariatur fugit doloribus recusandae id veniam inventore? Numquam delectus alias voluptates, voluptatibus molestias blanditiis nobis corrupti sunt fugit maxime laborum cumque natus ullam odio! Cupiditate expedita iusto tempore dolor fugiat quaerat minima?</div>
      
    </div>
  </div>
  )
}

export default About