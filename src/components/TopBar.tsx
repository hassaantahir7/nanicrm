import logo from "/logo.png"
const TopBar = () => {
  return (
    <div className="w-full bg-transparent py-1 pr-1 lg:pl-4">
      <div className="max-w-[1440px] mx-auto">
         <img src={logo} className='w-[40%] lg:w-[18%]' />
      </div>
    </div>
  );
};

export default TopBar;