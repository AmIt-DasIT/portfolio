import { useEffect, useMemo, useState } from 'react';
import { blob, Arrow, we1, lnkd, google } from '../assets'
import Button from '../components/Button';
import Skills from '../components/LookingForSkills/Skills';
import WorkExperience from '../components/WorkExperience/WorkExperience';

export default function Home() {

  // var index = 0;
  var text = 'I am Xyz ,';
  // var speed = 100;
  // useEffect(function textEffect() {
  //   if (index < text.length) {
  //     // @ts-ignore
  //     document.getElementById("effect")
  //       .innerHTML += text.charAt(index);
  //     index++;
  //     setTimeout(textEffect, speed);
  //   }
  // }, [])

  return (
    <div className='font-[Preahvihear] text-xl'>
      <div className="parallax-one">
        {/* <div className="text">Parallax 1</div> */}
        <div className='grid sm:grid-cols-2 w-full pt-10 text-white justify-items-center sm:justify-between '>
          <div className=' h-[73vh] flex items-end sm:items-center justify-center sm:justify-end sm:pr-28 w-full'>
            <div className='font-[Preahvihear]'>
              <div className='absolute left-[60%] top-[15%] whitespace-nowrap hidden sm:flex'>
                <img src={Arrow} className='absolute h-[80px] w-[80px] -top-2 -left-[4.3rem] translate-z-2' alt='' />
                Hello! I am <span className='text-[#c155ff]'> &nbsp;Amit Das</span>
              </div>
              <span className='underline'>A developer who</span>
              <div className='text-5xl sm:text-7xl font-[Satisfy] py-2' id='effect'>Judges a book<br /> by its cover...</div>
              <div className=' text-end'>I am good in React Js & CSS3</div>
            </div>
            <a href='#about' className='absolute bottom-10 sm:bottom-24  sm:left-[50%]'>
              <i className="fa fa-sharp fa-solid fa-chevron-down  fa-lg animate-bounce text-[yellowgreen] hover:text-orange-500 "></i>
            </a>
          </div>
          <div className='w-full flex justify-end '>
            {/* <img src={blob} className='sm:w-[65%] ' alt='' /> */}
          </div>
        </div>
      </div>
        <div className='text-start w-full col-span-2 lg:px-[15rem] xl:px-[20.2rem] pt-28  font-[Preahvihear] px-5 sm:px-0 reveal' id='about'>
          <div className='text-4xl pt-20 text-start'>I'm a Software Developer.| </div>
          <div className='text-base pb-2 text-start'>Currently, I'm a Software Developer at <span className='text-emerald-600'>Distronix</span></div>
          <div className='text-xl mt-10'>
            A self-taught Web Developer, functioning in the industry for 1+ years now.<br />
            I make meaningful and delightful digital products that create an equilibrium<br />
            between user needs and business goals. I am always prepared to learn new things.<br />
            My self-confidence, patience and adaptability are my greatest strengths.
          </div>
          <div>
          </div>
        </div>

      <div className='col-span-2 w-full lg:px-[15rem] xl:px-[20.2rem] py-[10rem] reveal'>
        <span className='text-4xl text-start px-4 sm:p-0 '>Work Experience</span>
        <div style={{ background: 'radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)' }} className='absolute  sm:w-[485px] sm:h-[470px] left-8 top-[25%] sm:left-[35%] '></div>
        <WorkExperience />
      </div>
      <div className='relative sm:col-span-2 w-full lg:px-[15rem] xl:px-[20.2rem] text-center reveal'>
        <div>I'm currently looking to join a <span className='text-[#a362ff] '>cross-functional</span> team<br />
          <span className='text-sm'>that values improving people's lives through accessible design</span>
        </div>
        {/* <Skills /> */}
      </div>
      <div className='mt-[10rem] col-span-2 w-full lg:px-[15rem] xl:px-[20.2rem] reveal px-4 sm:px-0'>
        <p className='text-4xl pb-10'>Contact</p>
        <div className='py-10' >
          I'm currently looking to join a cross-functional team that values improving people's lives<br />
          through accessible design. or have a project in mind? Let's connect.
        </div>
        <div className='pb-6'>iamitcuit20@gmail.com</div>
        <div className='flex gap-6'>
          <img src={lnkd} alt='' />
          <img src={lnkd} alt='' />
          <img src={google} alt='' />
        </div>
      </div>
      <div className='h-10'></div>
    </div>
  )
}
