// import React, { createContext, useContext, useCallback, useState } from "react";
// import ToastContainer from "../components/ToastContainer";
// import PropTypes from "prop-types";

// const ToastContext = createContext({});

// const ToastProvider = ({ children }) => {
//   const [messages, setMessages] = useState([]);

//   const addToast = useCallback(
//     ({ type, description, idMessage, defaultMessage }) => {
//       const id = Math.random();

//       const toast = {
//         id,
//         type,
//         idMessage,
//         description,
//         defaultMessage,
//       };

//       setMessages((state) => [...state, toast]);
//     },
//     []
//   );

//   const removeToast = useCallback((id) => {
//     setMessages((state) => state.filter((message) => message.id !== id));
//   }, []);

//   return (
//     <ToastContext.Provider value={{ addToast, removeToast }}>
//       {children}
//       <ToastContainer messages={messages} />
//     </ToastContext.Provider>
//   );
// };

// const useToast = () => {
//   const context = useContext(ToastContext);

//   if (!context) {
//     throw new Error("useToast must be used within a ToastProvider");
//   }

//   return context;
// };

// ToastProvider.propTypes = {
//   children: PropTypes.object.isRequired,
// };

// export { useToast, ToastProvider };
