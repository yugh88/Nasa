import { useRef, useEffect } from "react";
import gsap from "gsap";

function Navbar() {
  const navRef2 = useRef(null);

  const ulRef2 = useRef(null);

  const imgRef2 = useRef(null);

  const LinkedinRef = useRef(null);

  const crossRef1 = useRef(null);
  // const crossRef2 = useRef(null);
  // const crossRef3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    // Ensure the initial y position is set offscreen
    gsap.set([navRef2.current], { y: -100 });

    tl.to([navRef2.current], {
      y: 0,
      delay: 0.5,
      duration: 2,
      ease: "power3.out",
    });

    gsap.set([imgRef2.current], { y: -50, opacity: 0 });

    tl.to([imgRef2.current], {
      y: 0,
      delay: 0.5,
      opacity: 2,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.5,
    });

    gsap.set(LinkedinRef.current, { y: -50, opacity: 0 });

    tl.to(LinkedinRef.current, {
      y: 0,
      opacity: 2,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.5,
    });

    gsap.set([ulRef2.current.children], {
      y: -50,
      opacity: 0,
    });

    tl.to([ulRef2.current.children], {
      y: 0,
      delay: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.5,
    });
  }, []);

  const fun1 = () => {
    document.querySelector(".aboutProjects").style.display = "block";
  };
  const fun2 = () => {
    document.querySelector(".aboutProjects").style.display = "none";
  };
  const fun3 = () => {
    document.querySelector(".team").style.display = "block";
  };
  const fun4 = () => {
    document.querySelector(".team").style.display = "none";
  };

  return (
    <>
      <div className="">
        <div
          ref={navRef2}
          className="hidden sm:block sm:h-16 py-3 w-full transition-all ease-out duration-500 border-white"
        >
          <div className="nav flex w-full items-center text-xl">
            <div ref={imgRef2} className="flex gap-1 justify-start mx-16">
              <img
                className="h-10 rounded-full"
                src="https://raw.githubusercontent.com/THUNDERBLD/Material/refs/heads/main/WhatsApp%20Image%202024-09-12%20at%2011.51.23.jpeg"
                alt=""
              />
              <div className="py-1 rounded-md px-2 underline mx-2 w-80 text-white ">
                TEAM | <span className="text-blue-400"> CURSOR </span>
              </div>
            </div>
            <div
              ref={ulRef2}
              className="font-CoolFont1 w-full flex justify-center gap-1 md:gap-10 font-semibold"
            >
              <div onClick={fun1} className="aboutPro cursor-pointer">
                <a className="relative px-3 py-2 overflow-hidden font-medium text-gray-300 rounded-xl shadow-inner group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    About Project
                  </span>
                </a>
              </div>

              <div className="aboutProjects z-30 hidden w-full top-10 left-10 absolute">
                <div className="flex justify-center w-full h-[30%]">
                  <div className="w-[38vw] text-white text-lg backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-2xl bg-blue-300 font-semibold py-8 px-8 mt-10">
                    <div className="text-2xl">ABOUT PROJECT</div>
                    <div className="flex justify-end">
                      <div
                        onClick={fun2}
                        className="cross1 cursor-pointer absolute top-8"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          color="#ffffff"
                          fill="none"
                        >
                          <path
                            d="M10.2471 6.7402C11.0734 7.56657 11.4866 7.97975 12.0001 7.97975C12.5136 7.97975 12.9268 7.56658 13.7531 6.74022L13.7532 6.7402L15.5067 4.98669L15.5067 4.98668C15.9143 4.5791 16.1182 4.37524 16.3302 4.25283C17.3966 3.63716 18.2748 4.24821 19.0133 4.98669C19.7518 5.72518 20.3628 6.60345 19.7472 7.66981C19.6248 7.88183 19.421 8.08563 19.0134 8.49321L17.26 10.2466C16.4336 11.073 16.0202 11.4864 16.0202 11.9999C16.0202 12.5134 16.4334 12.9266 17.2598 13.7529L19.0133 15.5065C19.4209 15.9141 19.6248 16.1179 19.7472 16.3299C20.3628 17.3963 19.7518 18.2746 19.0133 19.013C18.2749 19.7516 17.3965 20.3626 16.3302 19.7469C16.1182 19.6246 15.9143 19.4208 15.5067 19.013L13.7534 17.2598L13.7533 17.2597C12.9272 16.4336 12.5136 16.02 12.0001 16.02C11.4867 16.02 11.073 16.4336 10.2469 17.2598L10.2469 17.2598L8.49353 19.013C8.0859 19.4208 7.88208 19.6246 7.67005 19.7469C6.60377 20.3626 5.72534 19.7516 4.98693 19.013C4.2484 18.2746 3.63744 17.3963 4.25307 16.3299C4.37549 16.1179 4.5793 15.9141 4.98693 15.5065L6.74044 13.7529C7.56681 12.9266 7.98 12.5134 7.98 11.9999C7.98 11.4864 7.5666 11.073 6.74022 10.2466L4.98685 8.49321C4.57928 8.08563 4.37548 7.88183 4.25307 7.66981C3.63741 6.60345 4.24845 5.72518 4.98693 4.98669C5.72542 4.24821 6.60369 3.63716 7.67005 4.25283C7.88207 4.37524 8.08593 4.5791 8.49352 4.98668L8.49353 4.98669L10.2471 6.7402Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    The project you're working on involves developing a Solar
                    System simulation and an Orrery Web App that tracks
                    Near-Earth Objects (NEOs). This web app offers an
                    interactive experience where users can explore the solar
                    system by clicking on planets and stars to reveal detailed
                    information about each celestial body. The combination of
                    astronomy, software development, and engaging web design
                    makes this project both educational and visually appealing.
                    It serves as a tool for learning about planetary science
                    while providing real-time data on NEOs, enhancing users'
                    understanding of the dynamic nature of space.
                  </div>
                </div>
              </div>

              <div className="cursor-pointer">
                <a className="relative px-4 py-2 overflow-hidden font-medium text-gray-300 rounded-lg shadow-inner group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    Planets
                  </span>
                </a>
              </div>

              <div className="team z-30 hidden w-full top-10 left-10 absolute">
                <div className="flex justify-center w-full h-[30%]">
                  <div className="w-[38vw] text-white text-lg backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-2xl bg-blue-300 font-semibold py-8 px-8 mt-10">
                    <div className="text-2xl">ABOUT TEAM</div>
                    <div className="flex justify-end">
                      <div
                        onClick={fun4}
                        className="cross2 cursor-pointer absolute top-8"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          color="#ffffff"
                          fill="none"
                        >
                          <path
                            d="M10.2471 6.7402C11.0734 7.56657 11.4866 7.97975 12.0001 7.97975C12.5136 7.97975 12.9268 7.56658 13.7531 6.74022L13.7532 6.7402L15.5067 4.98669L15.5067 4.98668C15.9143 4.5791 16.1182 4.37524 16.3302 4.25283C17.3966 3.63716 18.2748 4.24821 19.0133 4.98669C19.7518 5.72518 20.3628 6.60345 19.7472 7.66981C19.6248 7.88183 19.421 8.08563 19.0134 8.49321L17.26 10.2466C16.4336 11.073 16.0202 11.4864 16.0202 11.9999C16.0202 12.5134 16.4334 12.9266 17.2598 13.7529L19.0133 15.5065C19.4209 15.9141 19.6248 16.1179 19.7472 16.3299C20.3628 17.3963 19.7518 18.2746 19.0133 19.013C18.2749 19.7516 17.3965 20.3626 16.3302 19.7469C16.1182 19.6246 15.9143 19.4208 15.5067 19.013L13.7534 17.2598L13.7533 17.2597C12.9272 16.4336 12.5136 16.02 12.0001 16.02C11.4867 16.02 11.073 16.4336 10.2469 17.2598L10.2469 17.2598L8.49353 19.013C8.0859 19.4208 7.88208 19.6246 7.67005 19.7469C6.60377 20.3626 5.72534 19.7516 4.98693 19.013C4.2484 18.2746 3.63744 17.3963 4.25307 16.3299C4.37549 16.1179 4.5793 15.9141 4.98693 15.5065L6.74044 13.7529C7.56681 12.9266 7.98 12.5134 7.98 11.9999C7.98 11.4864 7.5666 11.073 6.74022 10.2466L4.98685 8.49321C4.57928 8.08563 4.37548 7.88183 4.25307 7.66981C3.63741 6.60345 4.24845 5.72518 4.98693 4.98669C5.72542 4.24821 6.60369 3.63716 7.67005 4.25283C7.88207 4.37524 8.08593 4.5791 8.49352 4.98668L8.49353 4.98669L10.2471 6.7402Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    The team working on the Solar System simulation and Orrery
                    Web App project consists of six talented individuals: Faraz,
                    Aditya, Subh, Yugh, Priyanshu, and Nishant. Each member
                    brings unique expertise to the table, contributing to
                    various aspects of the project such as astronomy research,
                    software development, and interactive design. Together, the
                    team is committed to building a user-friendly and
                    educational platform that showcases the beauty and
                    complexity of our solar system while providing valuable
                    information on Near-Earth Objects (NEOs). Their
                    collaboration ensures the success of this ambitious project.
                  </div>
                </div>
              </div>

              <div onClick={fun3}>
                <a className="relative cursor-pointer px-3 py-2 overflow-hidden font-medium text-gray-300 rounded-lg shadow-inner group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    Team
                  </span>
                </a>
              </div>
            </div>
            <div>
              <div className="github mx-4 hover:scale-110">
                <a target="_blank" href="https://github.com/THUNDERBLD">
                  <button>
                    <svg
                      className="text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="40"
                      height="40"
                      color="#000000"
                      fill="none"
                    >
                      <path
                        d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* write about my team which is working on above project and team have total member of 6...
name of members are Faraz, aditya, subh, yugh, priyanshu and nishant */}
    </>
  );
}

export default Navbar;
