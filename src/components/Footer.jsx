import LightLogo from './../assets/logo-light.svg';
function NavBar() {
  return (
    <div className=" mt-40 flex w-full items-center justify-between  bg-dark-blue p-4 ">
      <img className="ml-40 h-7 md:ml-10 " src={LightLogo} alt="logo"></img>
      <button className=" text-w mr-40 w-40 rounded-full bg-gradient-to-t from-gradient-pink2 to-gradient-blue p-3 text-lg font-semibold text-white hover:opacity-50 md:mr-10">
        Get Started
      </button>
    </div>
  );
}

export default NavBar;
