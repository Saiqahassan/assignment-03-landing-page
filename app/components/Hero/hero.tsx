import React from "react";
import Image from "next/image";



const Hero = () => {
    return (
        <main>
        <div className="bg-cover bg-center p-16" style={{backgroundImage: "url('/images/combined.jpg')"}}>

        <div className="flex items-center">
        <h1 className="font-black text-center ml-50 text-4xl border-pink-700">World Best Destinations</h1>
        </div>

        <div className="container">
        <span className="block "></span>
        <button className="ml-32 text-2xl mt-10 font-bold bg-pink-400 m-1 rounded-lg border-black border-2">Explore Now</button>
        </div>
        
    
        </div>

        <section className="destination mt-4">
            <h2 className="text-center font-black text-3xl font-bold font-serif Times New Roman mb-6 border-dotted border solid border-indigo-600 inline-block rounded-md mx-[30rem] bg-yellow-300">Popular Destinations</h2>

        
        <div className="ml-10 rounded-md mt-34 overflow-visible">
            <Image src="/images/switzerland.jpg" alt="Switzerland" height={350} width={350}/>
            <h1 className="font-bold font-black text-start ml-28 cursor-pointer">Switzerland</h1>
            </div>

        <div className="ml-1 rounded-md absolute inset-0 place-items-center snap-center mt-[390px]">
            <Image src="/images/italy2.jpg" alt="Italy" height={400} width={350}/>
            <h1 className="font-bold font-black text-start text-center ml-5">Italy</h1>
            </div> 

        <div className="ml-14 mr-12 rounded-md absolute inset-0 place-items-end mt-[390px]">
            <Image src="/images/china1.jpg"alt="China"height={300} width={350}/>
            <h1 className="font-bold font-black text-start text-center mr-36 allign-center">China</h1>
            </div>

        <div className="ml-10 rounded-md mt-34">
            <Image src="/images/pakistan.jpg" alt="Pakistan" height={180} width={350}/>
            <h1 className="font-bold font-black text-start ml-32">Pakistan</h1>
            </div>

        <div className="ml-1 rounded-md absolute inset-0 place-items-center snap-center mt-[604px]">
            <Image src="/images/malaysia1.jpg" alt="Malaysia" height={180} width={350}/>
            <h1 className="font-bold font-black">Malaysia</h1>
            </div>

        <div className="ml-14 mr-12 rounded-md absolute inset-0 place-items-end mt-[604px]">
            <Image src="/images/london.jpeg" alt="London" height={300} width={350}/>
            <h1 className="font-bold font-black text-start text-center mr-32 allign-center">London</h1>
            </div>
            
        <div className="text-center allign-center mb-6 mt-2 text-xl">
            <button className="font-bold bg-slate-500 text-white-400 m-1 rounded-lg border-black border-2 place-items-center">Read More...</button>
            </div>

        <div className="mt-4 text-center">
            <h1 className="text-center font-black text-3xl font-bold font-serif Times New Roman mb-6 border-dashed border solid border-indigo-600 inline-block rounded-md mx-[30rem] bg-yellow-300">About Us</h1>
        </div>

        <div className="text-center allign-center font-black">
            <p className="ml-36 text-black bold flex text-center text-justify allign-center">Our Packages have been designed to assist you in making the most out of your trip, focusing specifically on every budget and interest.</p>
              <p className="ml-72 text-black bold flex text-center text-justify allign-center">So plan your Best Tour Packages with Traveler Life to get what your heart desires.</p>
              
        </div>

        <div className="mt-3 mb-6 place-items-center snap-center">
            <Image src="/images/travel-01.jpg" alt="Travel" height={400} width={400}/>
        </div>

            </section> 
        </main>
        

    
    )
}

export default Hero;