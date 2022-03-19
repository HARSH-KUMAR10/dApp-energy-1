import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import
{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from "./pages/Profile";


function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
