import React from 'react';
function App() {
    return (
        <div className=''>
           <nav className='items-center justify-items-center flex justify-evenly gap-4'>
            <div className='-ml-10'>
                <a href='https://www.nike.com/in/'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudBGHxJ1nIIhJ-vKoSkYc-pF_QIRy47rihQ&s" alt='logo'></img>
                </a>
            </div>
            <ul className='flex gap-[60px]  items-center text-2xl '>
                <a href='https://www.nike.com/in/' className='cursor-pointer'><li >Home</li></a>
                
                <a href='https://www.nike.com/in/w' className='cursor-pointer'><li >Products</li></a>
                
                <a href='https://about.nike.com/en' className='cursor-pointer'><li >About</li></a>
                
                <a href='https://www.nike.com/in/help/#contact' className='cursor-pointer'><li >Contact US</li></a>
            </ul>
            <a href='https://accounts.nike.com/lookup?client_id=4fd2d5e7db76e0f85a6bb56721bd51df&redirect_uri=https://www.nike.com/auth/login&response_type=code&scope=openid%20nike.digital%20profile%20email%20phone%20flow%20country&state=46a20c4d3226497dad99aa526f0a55e2&code_challenge=EiX_XRc28IYw1yUpdZSHPl-LxxlKiNJDEdgHP_q7TWE&code_challenge_method=S256'>
            <button className='bg-black cursor-pointer text-white text-2xl p-[6px] px-[17px] rounded-md hover:bg-white hover:text-black hover:scale-x-[1.1] hover:transition hover:duration-[0.5s] hover:border hover:border-black'>Login</button></a>
           </nav>
          <main className='flex justify-center items-center'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col ml-[100px] max-w-[1000px]'>
                <h1 className='text-[100px] font-[800] leading-[110px] text-black'>
                YOUR FEET <span className=' before:bg-black max-w-auto before:block before:absolute before:-inset-1 before:-skew-y-3 relative inline-block p-1'><span className='relative text-white'>DESERVES</span></span> THE BEST</h1>
                <p className='text-[40px] leading-[40px] text-gray-600'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
              </div>
              <div className='flex gap-[30px] text-center items-center justify-center mt-[50px]'>
                <button className='bg-black text-white text-2xl p-[6px] px-[17px] hover:bg-white hover:text-black hover:scale-x-[1.1] hover:transition hover:duration-[0.5s] rounded-md hover:border hover:border-black'>Shop Now</button>
                <button className='bg-black text-white text-2xl p-[6px] px-[17px] hover:bg-white hover:text-black hover:scale-x-[1.1] hover:transition hover:duration-[0.5s] rounded-md hover:border hover:border-black'>Category</button>
              </div>
              <div className='flex justify-center text-center items-center'>
                <p className='text-2xl'>Also Available on..</p>
              </div>
              <div className='flex items-center justify-center'>
                <img className='w-[60px] cursor-pointer' src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="amazon" />
                <img className='w-[60px] cursor-pointer' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5f3d81106163451.5f897528aa41a.jpg" alt=" flipkart" />
              </div>
            </div>
            <div>
              <img className='ml-[40px] w-[90%]' src='https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg' alt='shoe'></img>
            </div>
          </main>
        </div>
    );
}

export default App;