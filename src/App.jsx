import Header from "./screens/Header";
import Home from "./screens/Home";
import Learning from "./screens/Learning";
import Instructor from "./screens/Instructor";
import Enterprise from "./screens/Enterprise";

function App() {
  return (
    <div className="flex flex-col border gap-16">
      <Header />
      <div className="h-full overflow-scroll">
        <Home />
        <Learning />
        <Instructor />
        <Enterprise />
      </div>
    </div>
  );
}

export default App;
