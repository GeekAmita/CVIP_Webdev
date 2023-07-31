function Header() {
  return (
    <div className="flex px-40 justify-between items-center py-8 sticky top-0 bg-white drop-shadow-md">
      <ul className="flex w-1/2 justify-around items-center">
        <li>
          <a href="#" className="flex gap-2 justify-center items-center">
            <div className="text-2xl text-white bg-cyan-800 rounded-full w-12 h-12 font-bold flex justify-center items-center">
              Ed
            </div>
            <div className="text-2xl text-cyan-700 font-semibold">Tech</div>
          </a>
        </li>
        <li className="text-xl text-gray-900 font-semibold">
          <a href="#learning">Learning</a>
        </li>
        <li className="text-xl text-gray-900 font-semibold">
          <a href="#instructor">Instructor</a>
        </li>
        <li className="text-xl text-gray-900 font-semibold">
          <a href="#enterprise">Enterprise</a>
        </li>
      </ul>
      <div className="flex w-1/5 justify-evenly">
        <button className="text-xl text-gray-900 font-medium">Log In</button>
        <button className="border-black border-2 py-3 px-8 text-xl text-gray-900 font-medium">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
