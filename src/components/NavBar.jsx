import DarkLogo from './../assets/logo-dark.svg';
function NavBar() {
  return (
    <div className="mt-8 flex w-full items-center justify-between ">
      <img className="ml-40 h-7 md:ml-10 " src={DarkLogo} alt="logo"></img>
      <button className="text-w mr-40 w-40 rounded-full bg-dark-blue p-3 text-lg font-semibold text-white hover:opacity-50 md:mr-10">
        Get Started
      </button>
    </div>
  );
}

export default NavBar;
