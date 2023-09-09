import { Foodhub } from "./html"

const userEmail = "test@gmail.com"
const userImage = "avatar.png"

export default () => {
    return (
        <nav className="bg-black text-white w-full h-[74px] fixed top-0 left-0 z-10 flex justify-center">
            <a className="lg:hidden text-4xl text-white h-full flex items-center" href="">
                <Foodhub />
            </a>
            <div className="absolute right-0 top-0 flex flex-row-reverse items-center h-full text-white">
                <img src={userImage} alt="" className="mr-8 rounded-full h-10" />
                <span className="font-semibold mr-6 text-gray-300 tracking-wide hidden md:block">{userEmail}</span>
                <span className="inline-block w-2 h-2 mr-3 mb-1 -rotate-45 border-b-2 border-l-2 border-gray-300"></span>
            </div>
        </nav>
    )
}
