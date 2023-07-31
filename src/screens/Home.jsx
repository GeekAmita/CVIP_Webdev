function Home() {
  return (
    <div id="#" className="flex justify-between items-center px-40 pb-8 gap-16">
      <div className="flex flex-col justify-around w-1/2 gap-16">
        <p className="text-8xl text-gray-900 font-bold">
          Gateway to your knowledge universe
        </p>
        <p className="text-3xl text-gray-900 font-medium">
          The only authoring platform designed to unlock learner potential,
          streamline production
        </p>
        <button className="w-4/12 py-3 px-8 bg-gray-900 text-white text-3xl font-medium">
          Get Started
        </button>
      </div>
      <div className="w-8/12">
        <img src="src/assets/Home.png" alt="A girl and a boy" />
      </div>
    </div>
  );
}

export default Home;
