function Enterprise() {
  return (
    <div
      id="enterprise"
      className="flex justify-between bg-gray-300 px-32 py-16"
    >
      <ul className="flex flex-col">
        <li className="text-black text-3xl font-bold">Company</li>
        <li className="text-black text-3xl font-light">About Us</li>
        <li className="text-black text-3xl font-light">Platform Offerings</li>
        <li className="text-black text-3xl font-light">Join The Team</li>
        <li className="text-black text-3xl font-light">Contact</li>
      </ul>
      <ul className="flex flex-col">
        <li className="text-black text-3xl font-bold">Explore</li>
        <li className="text-black text-3xl font-light">Press</li>
        <li className="text-black text-3xl font-light">Blog</li>
        <li className="text-black text-3xl font-light">Events</li>
        <li className="text-black text-3xl font-light">Promotions</li>
      </ul>
      <ul className="flex flex-col">
        <li>
          <div className="flex gap-2 justify-start items-center">
            <div className="text-2xl text-white bg-cyan-800 rounded-full w-12 h-12 font-bold flex justify-center items-center">
              Ed
            </div>
            <div className="text-2xl text-cyan-700 font-semibold">Tech</div>
          </div>
        </li>
        <li className="text-black text-3xl font-light">XYZ, Greater Noida</li>
        <li className="text-black text-3xl font-light">
          Uttar Pradesh, 201301
        </li>
        <li className="text-black text-3xl font-light">hello@edtech.io</li>
        <li className="text-black text-3xl font-light">+91-123-456-7890</li>
      </ul>
    </div>
  );
}

export default Enterprise;
