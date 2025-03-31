import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./components/UsersPage";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
 
  return (
  <Provider store = {store}>
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
  </Provider>

  );
}

export default App;
