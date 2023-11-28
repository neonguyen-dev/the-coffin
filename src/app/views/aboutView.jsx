/* eslint-disable react/no-unescaped-entities */
export default function AboutView() {
    return (
      <div className="bg-white flex h-screen sm:h-screen">
        <div className="m-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Coffin team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">The Coffin team is a group of students from KTH Kista. The team developed The Coffin as a part of the course DH2642 Interaction Programming and the Dynamic Web.</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">The Coffin is the go-to application for students at KTH Kista seeking an unparalleled pub experience. Whether you're a guest eager to explore upcoming events at Kistan 2.0, this web application is your key to a vibrant student social scene.</p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
  
            <li>
              <div className="flex items-center gap-x-6">
                <a href="mailto: rasmus.sjoberg15@gmail.com">
                  <img className="h-32 w-32 rounded-full object-cover transition ease-in-out hover:scale-110" src="https://qmisk.com/photo/org/469159333.jpg" alt="" />
                </a>
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Rasmus Sjöberg</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Developer</p>
                  <a href="https://github.com/RasmusSjo" className="w-fit flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 rounded-full hover:bg-slate-200 hover:shadow-lg"
                      fill="color: #333"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
  
                </div>
              </div>
            </li>
  
            <li>
              <div className="flex items-center gap-x-6">
                <a href="mailto: patranikap@gmail.com">
                  <img className="h-32 w-32 rounded-full object-cover transition ease-in-out hover:scale-110" src="https://qmisk.com/photo/org/469160133.jpg" alt="" />
                </a>
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Peter Patranika</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Developer</p>
                  <a href="https://github.com/fetost" className="w-fit flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 rounded-full hover:bg-slate-200 hover:shadow-lg"
                      fill="color: #333"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
  
            <li>
              <div className="flex items-center gap-x-6">
                <a href="mailto: neo20030125@gmail.com">
                  <img className="h-32 w-32 rounded-full object-cover transition ease-in-out hover:scale-110" src="https://qmisk.com/photo/org/469159829.jpg" alt="" />
                </a>
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Neo Nguyen</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Developer</p>
                  <a href="https://github.com/neonguyen-dev" className="w-fit flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 rounded-full hover:bg-slate-200 hover:shadow-lg"
                      fill="color: #333"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
  
            <li>
              <div className="flex items-center gap-x-6">
                <a href="mailto: royevert.dolonius@gmail.com">
                  <img className="h-32 w-32 rounded-full object-cover transition ease-in-out hover:scale-110" src=" https://qmisk.com/photo/org/469162565.jpg" alt="" />
                </a>
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Roy Evert Andrej Dolonius</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Developer</p>
                  <a href="https://github.com/gigglinglizard" className="w-fit flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 rounded-full hover:bg-slate-200 hover:shadow-lg"
                      fill="color: #333"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
  
          </ul>
        </div>
      </div>
  
    );
  }
  