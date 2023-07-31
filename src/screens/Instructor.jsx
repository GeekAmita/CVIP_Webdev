function Instructor() {
  return (
    <div id="instructor" className="flex justify-between px-32">
      <div className="w-3/4">
        <img src="src/assets/Instructor.png" alt="" />
      </div>
      <div className="flex flex-col justify-evenly">
        <p className="text-gray-800 text-6xl font-medium">
          Focus on what you do best - teach, leave the rest to us.
        </p>
        <p className="text-gray-800 text-3xl font-light">
          With our user-friendly and secured teaching tools, the EdTech team is
          dedicated to help you onboard a seamless online teaching experience.
        </p>
        <button className="w-4/12 py-3 px-8 bg-gray-900 text-white text-3xl font-medium">
          Teach with EdTech
        </button>
      </div>
    </div>
  );
}

export default Instructor;
