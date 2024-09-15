import { useEffect, useRef } from 'react';
import gsap from 'gsap';

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


    // tl.to(aboutMeRef.current, {
    //   opacity: 1,
    //   duration: 2,
    //   ease: 'power3.inOut',
    // })
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

  const scrollToFirstPage = () => {
    window.scrollTo({
      top: 740,
      behavior: 'smooth'
    });
  };

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
      <div ref={hiRef} className="about-text text-white opacity-0 relative top-44 w-[26%] z-10 text-2xl p-3 font-semibold mx-6 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg bg-blue-300">
        <span className='text-4xl text-white'>HELLO</span>
        <div className='text-white'>
          THIS IS TEAM <span className='text-blue-500 font-semibold'>CURSOR</span>
        </div>

        <div className='hidden md:block text-lg'>
          A solar system project built with React, Three.js, and TailwindCSS would combine 3D rendering, interactive animations, and responsive design.
          <div className='text-white'>&#x2022; <span className='text-blue-400'>React.js</span> manages the UI and application state.</div>
          <div className='text-white'>&#x2022; <span className='text-blue-400'>Three.js</span> is used to create and animate the 3D solar system, including planets, orbits, and lighting effects.</div>
          <div className='text-white'>&#x2022; <span className='text-blue-400'>TailwindCSS</span> provides utility-first CSS for responsive styling, making the layout adaptive across devices.</div>
        </div>
      </div>

      <div className='w-full flex justify-end '>
        <div ref={availableRef} className="about-text opacity-0 z-10 text-2xl p-3 w-full absolute -translate-y-32 sm:w-80 font-semibold mx-6 my- backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg bg-blue-300">
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
        <button ref={LearnRef} className='z-10 opacity-0 text-lg px-3 font-semibold mx-3 my-2'>
          <a target='_blank' href="https://pbs.twimg.com/media/GTZ2y3EXIAA8F4q?format=jpg&name=900x900" className="relative inline-block text-lg group">
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
          <div className='p-3 z-30 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-2xl bg-blue-300 font-semibold'>
            Double Click on each planet to know more about it. The information contained here is volume, orbital distance, Rotational period, etc...
          </div>
        </div>
        <div className="absolute bottom-8 right-8 mb-4s text-center">
          <button
            onClick={scrollToFirstPage}
            className="px-2 py-3 font-semibold text-white bg-black rounded-lg hover:bg-white">
            <svg className='hover:text-black text-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11.9328 2.00023C13.3137 1.95947 16.5608 7.34458 15.9163 7.8518C15.1855 8.42696 13.0137 7.05181 12.3221 6.74208C11.9062 6.55582 11.7259 6.56093 11.3104 6.77271C9.42898 7.73186 8.49159 8.20766 8.08638 7.91196C7.44046 7.44063 10.5851 2.04001 11.9328 2.00023Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12.0672 21.9998C10.6863 22.0403 7.43916 16.6805 8.08367 16.1756C8.81453 15.6032 10.9863 16.9719 11.6779 17.2801C12.0938 17.4655 12.2741 17.4604 12.6896 17.2497C13.2694 16.9554 15.1991 15.6005 15.9136 16.1157C16.5595 16.5849 13.4149 21.9602 12.0672 21.9998Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
      {/* <div className='footer text-white flex relative z-50 items-end w-full h-full mt-56 bg-gray-950'>
        <div className='text-white'>
          thunder
        </div>
        <div>
          thunder
        </div>
      </div> */}
    </div>
  )
}

export default Home