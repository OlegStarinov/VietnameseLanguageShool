import React from "react";
import { converstation } from "../../../store/static";

const static_data_list = converstation.about.about.map(
  (item: { title: string; body: string; id: number; img: any }) => (
    <div className=" drop-shadow-2xl flex m-10 " key={item.id}>
      <img src={item.img} alt="logo" className="w-12 h-12 mt-4 " />
      <div className="px-2 py-4 ">
        <p className=" font-['Mochiy'] text-xl text-yellow-500 ">
          {item.title}
        </p>
        <p className="text-xl text-stone-500 font-semibold">{item.body}</p>
      </div>
    </div>
  )
);
function About() {
  return (
      <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-4 content mb-60 mt-60">
       <img src={converstation.about.background} alt="logo" className=" md:mt-auto md:mb-auto w-10/12 ml-auto mr-auto"/>
        <div >{static_data_list}</div>
      </div>
   
  );
}

export default About;
