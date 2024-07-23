import "./App.css";
import RenderAPI from "./components/RenderAPI.jsx";
import Category from "./components/Category.jsx";
import SubCategories from "./components/SubMenu.jsx";

function App() {
  return (
    
    <div className="App">
      <Category />
      <RenderAPI />
      <SubCategories />
    </div>
  );
}

export default App;
