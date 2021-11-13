import "./App.css";
import Main from "./pages/Main";
import { ThemeContext } from "./context";
import { useState } from "react";

function App() {
  let [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <>
      <div>
        <ThemeContext.Provider value={{ theme, changeTheme }}>
          <Main />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
