import React from 'react'

const Header = ({handleIsLoggedIn,isLoggedIn}) => {
  return (
    <div className=' absolute px-48 py-1 bg-gradient-to-b from-black z-50 text-white flex justify-between items-center w-[100vw]'>
        <img className=' w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

        

      {
        isLoggedIn?<div className=' flex gap-5'>
        <select name="lang" className=' px-2 py-1 rounded-sm bg-transparent border border-white'>
            <option className='text-black' value="eng">English</option>
            <option className='text-black' value="hin">Hindi</option>
        </select>
        
<button className=' px-2 py-1 rounded-sm bg-red-600 text-white' onClick={handleIsLoggedIn}>Sign In</button>
       
</div>:""
      }

    </div>
  )
}

export default Header