import { useState } from "react";
import Header from "./components/layout/Header";

const App = () => {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div className={`${darkToggle && "dark"} bg-white dark:bg-slate-800`}>
      <Header darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
    </div>
  );
};

export default App;
