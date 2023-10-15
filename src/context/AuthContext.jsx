import React, { createContext, useContext, useReducer } from "react";

// Initial state for the context
const initialState = {
  token: localStorage.getItem("token"),
  account: JSON.parse(localStorage.getItem("account")),
};

// Create the context
const AuthContext = createContext();

// Auth reducer to handle state changes
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.token,
        account: action.account,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        account: null,
      };
    default:
      return state;
  }
};

// AuthProvider component to wrap your application with the context provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
