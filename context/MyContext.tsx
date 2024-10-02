// import { createContext, type ReactNode, useState, FC } from "react";

// // Define a type for your context data
// type MyContextData = {
//     value: string;
//     setValue: (newValue: string) => void;
// };

// // Create a context with an initial value
// export const MyContext = createContext<MyContextData | undefined>(undefined);

// // Create a provider component
// type MyContextProviderProps = {
//     children: ReactNode;
// };

// export const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {
//     const [value, setValue] = useState<string>("");

//     const contextValue: MyContextData = {
//         value,
//         setValue,
//     };

//     return (
//         <MyContext.Provider value={contextValue}>
//             {children}
//         </MyContext.Provider>
//     );
// }; 

// export default MyContext;


import { createContext, useState, type ReactNode, type FC } from "react";

// Step 1: Create a context
interface MyContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const MyContext = createContext<MyContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

// Step 2: Create a provider component
interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;