// import MyContext from "@/context/MyContext";
// import { useContext } from "react";


// const MyComponent = () => {
//   const context = useContext(MyContext);

//   if (!context) {
//     throw new Error("MyComponent must be used within a MyContextProvider");
//   }

//   const { value, setValue } = context;

//   return (
//     <div>
//       <p>Value: {value}</p>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </div>
//   );
// };

// export default MyComponent;

import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const MyComponent: React.FC = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;