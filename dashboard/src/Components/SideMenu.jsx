import { useState } from "react"
import { Foodhub } from "./html"

const allGroups = ["customer", "chef", "admin", "owner"]

const dashboardItems = [
    { name: "Dashboard", key: "dashboard", path: "dashboard/", icon: "grid_view", canAccess: allGroups },
    { name: "Cart", key: "cart", path: "cart/", icon: "local_mall", canAccess: allGroups },
    { name: "Orders", key: "orders", path: "orders/", icon: "inventory_2", canAccess: allGroups },
    { name: "Loyalty Club", key: "loyalty_club", path: "loyalty_club/", icon: "handshake", canAccess: allGroups },
    { name: "kitchen", key: "kitchen", path: "kitchen/", icon: "outdoor_grill", canAccess: ["chef", "admin", "owner"] },
    { name: "Chefs", key: "chefs", path: "chefs/", icon: "restaurant", canAccess: ["admin", "owner"] },
    { name: "Admins", key: "admins", path: "admins/", icon: "shield_person", canAccess: ["owner"] },
]

export default () => {
    const [curNav, setCurNav] = useState(dashboardItems[0].key)
    const [activeSideMenu, setActiveSideMenu] = useState(false)

    const toggleSideMenu = () => {
        const menu = document.getElementById("mobile-side-menu")
        if (activeSideMenu) setTimeout(() => (menu.style.display = "none"), 320)
        else menu.style.display = "block"

        setActiveSideMenu((prev) => !prev)
    }
    const userGroup = localStorage.getItem("userGroup") || "owner"
    // const userGroup = localStorage.getItem("userGroup") || "admin"
    // const userGroup = localStorage.getItem("userGroup") || "chef"
    // const userGroup = localStorage.getItem("userGroup") || "customer"
    const loggedInUserDashboardItems = dashboardItems.filter((item) => {
        return item.canAccess.indexOf(userGroup) > -1
    })

    return (
        <>
            {/* desktop side menu */}
            <aside className="bg-black min-h-screen text-white w-max sticky z-20 hidden lg:block" id="side-menu">
                <section className="h-[74px] lg:flex items-center justify-center text-center hidden">
                    <a className="text-4xl text-white" href="">
                        <Foodhub />
                    </a>
                </section>

                <ul className="mx-6">
                    {loggedInUserDashboardItems.map((item) => (
                        <li
                            key={item.key}
                            className={`my-1 px-4 py-2 rounded-lg transition-all cursor-pointer ${item.key === curNav ? "aside-active" : "hover:bg-gray-800"}`}
                            onClick={() => setCurNav(item.key)}
                        >
                            <span className="material-symbols-rounded align-[-4px] text-xl mr-2">{item.icon}</span>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* open/close side mobile menu button */}
            <div className="absolute left-0 top-0 h-[74px] z-50 flex flex-col justify-center lg:hidden ml-6" onClick={toggleSideMenu}>
                <span className="h-[2px] w-6 block bg-white rounded-full mb-1.5"></span>
                <span className="h-[2px] w-6 block bg-white rounded-full mb-1.5"></span>
                <span className="h-[2px] w-6 block bg-white rounded-full"></span>
            </div>

            {/* mobile side menu */}
            <aside className="h-full min-w-full text-white flex pt-[74px] fixed top-0 left-0 z-20 lg:hidden" id="mobile-side-menu">
                <ul
                    className={
                        "px-6 w-max min-h-full fixed z-50 bg-black flex-grow-0 " +
                        (activeSideMenu ? "animate-move-right" : "animate-move-left") +
                        " transform-gpu"
                    }
                >
                    {loggedInUserDashboardItems.map((item) => (
                        <li
                            key={item.key}
                            className={`my-1 px-4 py-2 rounded-lg transition-all cursor-pointer ${item.key === curNav ? "aside-active" : "hover:bg-gray-800"}`}
                            onClick={() => setCurNav(item.key)}
                        >
                            <span className="material-symbols-rounded align-[-4px] text-xl mr-2">{item.icon}</span>
                            {item.name}
                        </li>
                    ))}
                </ul>

                {/* mobile menu dark overlay */}
                <div
                    className={"bg-black h-full bg-opacity-70 flex-grow " + (activeSideMenu ? "animate-opacity-100" : "animate-opacity-0")}
                    onClick={toggleSideMenu}
                ></div>
            </aside>
        </>
    )
}
