import { createContext, useReducer } from "react";

export const NotificationsContext = createContext();

export const notificationsReducer = (state, action) => {
  switch (action.type) {
    case "SET NOTIFICATIONS":
      return { notifications: action.payload };

    case "CREATE NOTIFICATION":
      return { notifications: [action.payload, ...state.notifications] };

    default:
      return state;

    // TODO - Delete notification
  }
};

export const NotificationsContextProvider = ({ children }) => {
  const [state, notifications_dispatch] = useReducer(notificationsReducer, {
    notifications: null,
  });

  return (
    <NotificationsContext.Provider value={{ ...state, notifications_dispatch }}>
      {children}
    </NotificationsContext.Provider>
  );
};
