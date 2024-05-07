function Item({ icon, title, text }) {
  return (
    <div
      className=" item mt-9  flex  flex-col gap-6 rounded-xl 
     bg-white drop-shadow-lg"
    >
      <img className=" icon ml-8 w-14" src={icon} alt="Icon"></img>
      <div className="item-con flex flex-col gap-6">
        <h4 className=" ml-8 text-2xl font-bold"> {title} </h4>
        <p className="ml-8 max-w-72 ">{text}</p>
      </div>
      <div>
        <span className=" ml-8   cursor-pointer text-lg font-semibold text-dark-pink hover:opacity-50">
          Get Started
        </span>
      </div>
    </div>
  );
}

export default Item;
