export default function User() {
  return (
    <>
      <div className="flex gap-2 items-center w-max justify-self-end relative cursor-pointer group/user">
        <img
          className="w-[30px] h-[30px] rounded-full"
          src="https://images.unsplash.com/profile-1675818354956-11c4aac9c130image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
          alt=""
        />
        <p>Name</p>
        <ul className="absolute top-[36px] right-0 bg-white text-black px-3 py-2 drop-shadow-md rounded-md w-max hidden group-hover/user:block">
          <li className="hover:bg-black hover:text-white text-black px-3 py-2 rounded-md">
            <div>Profile</div>
          </li>
          <li className="hover:bg-black hover:text-white text-black px-3 py-2 rounded-md">
            <div>Upload a profile</div>
          </li>
          <li className="hover:bg-black hover:text-red-500 text-black px-3 py-2 rounded-md">
            <div>Logout</div>
          </li>
        </ul>
      </div>
    </>
  );
}
