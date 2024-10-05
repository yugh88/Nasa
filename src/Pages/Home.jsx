import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ButtonWrapper from '../assets/ButtonWrapper';
import Sidebar from '../assets/Sidebar';

function Home() {

  const wordRef1 = useRef(null);
  const wordRef2 = useRef(null);
  const hiRef = useRef(null);
  const availableRef = useRef(null);
  //   const quoteRef1 = useRef(null);
  const quoteRef2 = useRef(null);
  const LearnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set([hiRef.current, quoteRef2.current, availableRef.current], {
      x: -2000
    })

    tl.to(hiRef.current, {
      x: 30,
      opacity: 1,
      delay: 2,
      duration: 2,
      ease: 'power3.inOut',
    })
      .to(availableRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
        x: 0
      })
      .to(LearnRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
      })
      .to(quoteRef2.current, {
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
        x: 0
      })




  }, []);

  useEffect(() => {
    if (wordRef1.current) {
      const word = wordRef1.current.textContent.split('');
      let clutter = '';
      word.forEach((e) => {
        clutter += `<span>${e}</span>`;
      });
      wordRef1.current.innerHTML = clutter;
      wordRef1.current.fontSize = 100;
    }
    if (wordRef2.current) {
      const word = wordRef2.current.textContent.split('');
      let clutter = '';
      word.forEach((e) => {
        clutter += `<span>${e}</span>`;
      });
      wordRef2.current.innerHTML = clutter;
    }

    const spans1 = wordRef1.current.querySelectorAll('span');
    const spans2 = wordRef2.current.querySelectorAll('span');

    const tl = gsap.timeline();
    tl.from([spans1, spans2], {
      y: 100,
      opacity: 0,
      duration: 2,
      delay: 3,
      ease: 'power3.out',
      stagger: 0.2,
      repeat: -1
    })
      .to([spans1, spans2], {
        y: 100,
        opacity: 0,
        duration: 1.5,
        delay: 1,
        ease: 'power3.out',
        stagger: 0.2,
        repeat: -1,
        fontSize: 60
      })

  }, []);

  return (
    <div className='w-screen h-screen bg-black'>
      <div ref={wordRef1} className='text-gray-300 font-CoolFont1 space-x-2 flex justify-center absolute top-16 w-full pl-10 h-screen text-8xl font-bold'>
        <div className='words '>
          LET'S BEGIN
        </div>
      </div>
      <div>
        <div className='text-gray-300 space-x-2 justify-center absolute top-36 w-full pl-4 h-screen text-7xl font-bold'>
          <div ref={wordRef2}>
            THE SOLAR EXPERIENCE
          </div>
        </div>
      </div>
      <div ref={hiRef} className="about-text mt-12 w-72 border text-white opacity-0 relative top-44 z-10 text-2xl font-semibold mx-6 rounded-lg ">
        <div>
          <Sidebar />
        </div>
      </div>

      <div className='className="about-text mt-12 text-white relative top-44 w-[20%] z-50 text-2xl font-semibold mx-6 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg bg-blue-300"'>
        <div className='relative z-50 transition delay-1000 translate-x-0'>
           <ButtonWrapper />
        </div>
      </div>

      <div className='w-full flex justify-end '>
        <div ref={availableRef} className="about-text text-white opacity-0 z-10 text-2xl p-3 w-full absolute -translate-y-72 sm:w-80 font-semibold mx-6 my- backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg bg-white">
          ABOUT THIS <span className='text-blue-500'>PROJECT</span>
          <div className="text-lg">
            &#x2022; Simulation of our solar system
          </div>
          <div className="text-lg">
            &#x2022; Information about each planet
          </div>
        </div>
      </div>
      {/* LEARN MORE BUTTON */}
      <div className='flex justify-end'>
        <button ref={LearnRef} className='z-10 opacity-0 text-lg px-3 font-semibold mx-3 -translate-y-36'>
          <a target='_blank' href="https://en.wikipedia.org/wiki/Solar_System" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-2 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-16 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">LEARN MORE</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        </button>
      </div>
      <div className='w-full flex justify-end'>
        <div ref={quoteRef2} className="about-text w-[20%] text-white hidden sm:block opacity-0 z-10 text-lg p-3 mx-4">
          <div className='p-3 z-30 backdrop-filter backdrop-blur-sm bg-opacity-10 -translate-y-32 rounded-2xl bg-blue-300 font-semibold'>
            Double Click on each planet to know more about it. The information contained here is volume, orbital distance, Rotational period, etc...
          </div>
        </div>
      </div>
      
      </div>
  )
}

export default Home