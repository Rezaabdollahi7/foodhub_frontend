import SideMenu from "./Components/SideMenu"
import Navbar from "./Components/Navbar"
import SignIn from "./Components/SignIn"
function App() {
    return (
        <>
            {/* <div className="flex">
                <div className="flex-grow-0">
                    <SideMenu />
                </div>

                <div className="flex-grow pt-[74px]">
                    <Navbar />
                    <section className="w-full h-auto"></section>
                </div>
            </div> */}
                <SignIn/>
        </>
    )
}

export default App
