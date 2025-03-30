import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./components/UsersPage";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";

function App() {
 
  return (
  
    <BrowserRouter>
    <nav style={{ padding: '20px' }}>
      <NavLink 
        to="/users"
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'gray',
          marginRight: '15px'
        })}
      >
        Пользователи
      </NavLink>
    </nav>
    
    <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
