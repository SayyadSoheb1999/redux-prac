import { createContext, useContext, useState, useReducer } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(5);
  const initial = {
    count: 1,
    user: null,
    error: null,
  };

  const reduce = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + (action.payload || 1) };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "set-user":
        return { ...state, user: action.payload };
      case "remove-user":
        return { ...state, user: null };
      case "error":
        return { ...state, error: action.payload };
      default:
        return state;
    }
    throw Error("Unknown action: " + action.type);
  };

  //  funtions

  const IncBy10Funtion = (payload) => {
    try {
      dispatch({ type: "INCREMENT", payload });
      dispatch({ type: "error", payload: null });
    } catch (err) {
      dispatch({ type: "error", payload: err });
    }
  };

  const [state, dispatch] = useReducer(reduce, initial);
  console.log({ state });
  return (
    <AuthContext.Provider value={{ state, dispatch, IncBy10Funtion }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
