import lang from "../utils/languageConstants"

const GptSearchBar = () => {
  return (
    <div className=' background-img flex items-center justify-center h-[50vh]'>
        <form className=" w-[40vw] py-4 bg-black flex justify-center items-center">
            <input type="text" className=' w-[30vw] py-2 px-2 mx-4 my-2' placeholder={lang.hindi.gptSearchPlaceholder} />
            <button className={`px-4 py-2 rounded-sm bg-red-600 text-white `} >
              {lang.hindi.search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar