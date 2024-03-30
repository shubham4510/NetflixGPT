import React from 'react'
import Header from './Header';

const Login = () => {
  return (
    <div className='text-white'>
        <div className=' relative overflow-hidden '>
            <Header/>
            <div>
            <img className=' scale-125 h-[100vh] w-[100vw]' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-image" />
            

            <div className=' w-[100vw] h-[100vh] bg-black  absolute top-0 left-0 opacity-60'></div>
            </div>
        </div>

{/* 
        <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center flex-col leading-[4rem]'>

        <h1 className=' text-6xl font-bold whitespace-nowrap'>
        Unlimited movies, TV shows and more
        </h1>

        <p className='text-2xl'>
        Watch anywhere. Cancel anytime.
        </p>

        <p className='text-2xl'>
        Ready to watch? Enter your email to create or restart your membership.
        </p>


        <form className=' flex justify-center items-center'>
            <input type="email" placeholder='Email Address' className='px-2 m-2 w-[60vh] bg-transparent border rounded-sm ' />
            <button className=' text-2xl bg-red-600 py-4 px-3 rounded-sm'>Get Started</button>
        </form>

        </div>
 */}

    <form className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center flex-col leading-[3rem]  bg-black/60 py-8 px-4 w-[30vw]'>
            <h3 className=' text-2xl font-bold'>Sign In</h3>
            <input className=' bg-gray-900/60 m-2 w-[40vh]  border rounded-sm px-2' type="email" name="email" placeholder='Email or phone number' />
            <input type="password" name="password" placeholder="Password" className=' px-2 m-2 w-[40vh] bg-gray-900/60 border rounded-sm '/>
            <button className=' text-2xl bg-red-600 py-2 px-3 rounded-sm w-[40vh]'>Sign In</button>
            <p>OR</p>
            <button className='w-[40vh] text-2xl bg-gray-600/60 py-2 px-3 rounded-sm'>Use a sign-in code</button>
            <button className='w-[40vh] py-2'>Forgot password?</button>

<div className=' flex gap-2 justify-center items-center'>
<input type="checkbox" className=' size-3'/><span>Remember me</span>
</div>
           
            <p className=' text-gray-400'>New to Netflix? <span className=' font-bold text-white'>Sign up now.</span></p>
            <p className=' text-center  text-gray-600 text-sm w-[40vw]'>
            This page is protected by Google reCAPTCHA to
            <br /> ensure you're not a bot.
            <span className=' text-blue-800'>
                Learn more.
            </span>
            </p>
            <div cl></div>
        </form>
      
      
    </div>
  )
}

export default Login;