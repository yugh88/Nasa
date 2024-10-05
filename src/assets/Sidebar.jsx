
const Sidebar = () => {
  return (
    <div className="relative flex h-[50%] flex-col rounded-xl bg-black bg-clip-border p-4 text-white shadow-xl shadow-blue-gray-900/5">
      <div className="p-4 mb-2">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Sidebar
        </h5>
      </div>
      <nav className="flex min-w-[200px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <div
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M2.17739 12.9793L3.49456 8.58065C3.81646 7.50568 4.55249 6.61291 5.5315 6.10993L7.12731 5.29006C8.37528 4.6489 9.89325 5.10311 10.6111 6.33247L12.1043 8.88966C12.4728 9.52075 12.6571 9.8363 12.8935 9.99873C13.2261 10.2272 13.6436 10.2803 14.0199 10.142C14.2875 10.0437 14.5404 9.78383 15.0463 9.264C16.2378 8.03972 18.2215 8.24155 19.1562 9.68215L20.3273 11.4872C20.9791 12.4918 21.1687 13.7398 20.8459 14.9007L20.5037 16.1314C20.1952 17.2407 19.4479 18.1659 18.4437 18.6818L12.8309 21.5655C11.504 22.2472 9.91895 22.1195 8.71171 21.2334L3.67752 17.5386C2.27465 16.5089 1.67039 14.6724 2.17739 12.9793Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.9998 14H16.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 15.5L9.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M9 10.753C8.05719 10.1652 7.58579 9.87123 7.14645 10.0538C6.70711 10.2365 6.4714 10.8243 6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M19.9559 2H18.2338C17.9628 2 17.8273 2 17.7012 2.01974C17.4003 2.06683 17.1242 2.19626 16.9126 2.38941C16.8239 2.47039 16.7487 2.56914 16.5984 2.76663C16.2751 3.19139 16.1134 3.40378 16.0517 3.60076C15.9024 4.07694 16.0828 4.58571 16.5138 4.90401C16.6921 5.03568 16.9627 5.13048 17.5038 5.32008L18.5185 5.67557C19.1652 5.90215 19.4886 6.01543 19.8119 5.99831C19.9487 5.99106 20.0837 5.96679 20.2128 5.92623C20.5177 5.83042 20.7639 5.61473 21.2564 5.18334L21.4013 5.05647C21.5737 4.90543 21.66 4.82991 21.7287 4.74608C21.8585 4.58767 21.9449 4.40513 21.9809 4.21269C22 4.11085 22 4.00405 22 3.79044C22 3.30232 22 3.05826 21.9242 2.86139C21.7799 2.48681 21.4442 2.19275 21.0166 2.06641C20.7918 2 20.5131 2 19.9559 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          Near Earth Astroids
        </div>
        <div
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
               <path d="M4.05025 10.0498C1.31658 12.7835 1.31658 17.2156 4.05025 19.9493C6.78392 22.683 11.2161 22.683 13.9497 19.9493L17.899 16M12.1001 2L6.5 7.60006M22 11.899L20 13.899" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
               <path d="M11.1213 12.8787C12.2929 14.0503 12.2929 15.9497 11.1213 17.1213C9.94975 18.2929 8.05025 18.2929 6.87868 17.1213C5.70711 15.9497 5.70711 14.0503 6.87868 12.8787C8.05025 11.7071 9.94975 11.7071 11.1213 12.8787Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
               <path d="M6.87869 12.8795L13.9998 5.75787M17.7574 2L15.9998 3.75772M21.9998 6.24338L15.3637 12.8795" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
           Near Earth Comits
        </div>
        <div
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M4.49843 5.00004C3.19503 4.97812 2.56968 5.23496 2.22294 6.14258C2.01241 6.69367 2 7.29677 2 7.88676V18C2.10783 18.6348 2.28792 19.0559 2.74232 19.4001C3.48302 19.9611 4.46716 20.0378 5.38129 20.2033C7.3857 20.5663 9.12918 21.1811 11.9937 22M19.489 5.00004C20.0658 4.95075 20.4998 4.97733 20.8427 5.13087C22.2148 5.74518 21.9874 7.76209 21.9874 9.26623V17C21.9944 17.5973 21.9559 18.0619 21.8719 18.4323C21.5518 19.8431 19.7432 20.0199 18.3213 20.2822C16.5435 20.6101 14.6465 21.1794 11.9937 22M11.9937 22V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.9929 12C14.7526 12 16.9898 9.76142 16.9898 7C16.9898 4.23858 14.7526 2 11.9929 2M11.9929 12C9.23326 12 6.99609 9.76142 6.99609 7C6.99609 4.23858 9.23326 2 11.9929 2M11.9929 12C13.0969 12 13.9917 9.76142 13.9917 7C13.9917 4.23858 13.0969 2 11.9929 2M11.9929 12C10.889 12 9.99421 9.76142 9.99421 7C9.99421 4.23858 10.889 2 11.9929 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          Education Content
        </div>
        <div
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <rect x="4" y="2" width="17.5" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10.59 13.7408C9.96125 14.162 8.31261 15.0221 9.31674 16.0983C9.80725 16.624 10.3536 17 11.0404 17H14.9596C15.6464 17 16.1928 16.624 16.6833 16.0983C17.6874 15.0221 16.0388 14.162 15.41 13.7408C13.9355 12.7531 12.0645 12.7531 10.59 13.7408Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M15 9C15 10.1046 14.1046 11 13 11C11.8954 11 11 10.1046 11 9C11 7.89543 11.8954 7 13 7C14.1046 7 15 7.89543 15 9Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5 6L2.5 6M5 12L2.5 12M5 18H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          Contact Us
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;