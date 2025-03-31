import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

const rootReduser = combineReducers({
    [api.reducerPath] : api.reducer,
})


export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>








 //  async function fetchUsers() {
  //   try {
  //     const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  //     setSearch(responce.data)
  //     setUsers(responce.data)
  //   } catch(e) {
  //     alert(e)
  //   }
  //  }