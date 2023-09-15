import { Foodhub } from "./html";

export default () => {
  return (
    <>
      <div className="signIn-wrapper mx-auto flex items-center justify-center w-[100vw] h-[100vh]  bg-sign  bg-cover bg-center bg-blend-multiply bg-stone-900/60  ">
        {/* content */}
        <div className="signIn-main-box lg:w-[60%] flex-col rounded-xl overflow-hidden  shadow-lg shadow-gray-500">
          {/* img section */}
          <div className="signIn-img-wrapper flex flex-col lg:p-16 bg-sign  bg-cover  bg-blend-multiply bg-stone-900/80">
            <h4 className="text-white lg:text-5xl  capitalize">
              welcome to the <br />{" "}
              <span className="font-semibold uppercase   underline undeline-2 underline-offset-8 text-yellow-400">
                foodhub
              </span>{" "}
            </h4>
            <p className="lg:mt-16 text-xl capitalize text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, officia.
            </p>
          </div>

          {/* log in section */}
          <div className="signIn-login-wrapper flex flex-col justify-center items-center bg-gradient-to-r from-gray-50 to-gray-300 ">
            <h3 className="text-3xl  lg:mb-10 mt-4 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-black ">
              User Login
            </h3>
            <input
              className="rounded-lg placeholder:text-black/50  p-2 w-[40%]"
              placeholder="UserName ..."
              type="text"
              name="UsernameInput"
              id="UsernameInput"
            />
            <input
              className="mt-4 rounded-lg placeholder:text-black/50  p-2 w-[40%]"
              placeholder="Password ..."
              type="text"
              name="PasswordInput"
              id="PasswordInput"
            />

            <div className="checkBoxWrapper flex justify-between items-center mt-8">
              <input
                className=" "
                type="checkbox"
                name="RememberCheckbox"
                id="RememberCheckbox"
              />
              <span className="ml-4 ">Remember me</span>
              <a href="#" className="ml-16 cursor-pointer text-blue-600 ">
                Forggot Password ?
              </a>
            </div>

            <a className="uppercase cursor-pointer mt-8  bg-gradient-to-b from-orange-500 to-orange-700 outline  outline-2 outline-offset-2 outline-yellow-400  text-white px-6 py-2 rounded-md mb-4 font-semibold ">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
