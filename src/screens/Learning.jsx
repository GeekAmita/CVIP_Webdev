import LearningCard from "../components/LearningCard";
import { LearningList } from "../utils/LearningList";

function Learning() {
  return (
    <div id="learning" className="flex flex-col pt-32 px-32">
      <div className="flex flex-col gap-16">
        <p className="text-gray-800 text-6xl font-bold">
          Online Learning For <br /> Real Life, Explore Courses
        </p>
        <p className="text-gray-800 text-3xl font-light w-3/4">
          Move your creative journey forward without putting life on hold.
          EdTech short online classes help you find inspiration that fits your
          routine
        </p>
        <div className="flex justify-evenly gap-4">
          {LearningList.map((item, index) => {
            return (
              <LearningCard
                key={index}
                imgURL={item.imgURL}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-evenly flex-col">
          <p className="text-gray-800 text-6xl font-medium">
            Here's how you can start learning with EdTech
          </p>
          <ul>
            <li className="text-gray-800 text-3xl font-light">
              Create an account for free.
            </li>
            <li className="text-gray-800 text-3xl font-light">
              Simply click here to sign up for a free account.
            </li>
            <li className="text-gray-800 text-3xl font-light">
              First 100 account sign-ups get $10 credit!
            </li>
          </ul>
          <ul>
            <li className="text-gray-800 text-3xl font-light underline">
              Book a Class
            </li>
            <li className="text-gray-800 text-3xl font-light underline">
              Start Learning
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <img src="src/assets/Learning.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Learning;
