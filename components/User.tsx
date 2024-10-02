// import React from 'react';

// const User = (props : {name: string, age: number, isStudent :boolean}) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.age}</h1>
//             <h1>{props.isStudent}</h1>
//         </div>
//     );
// };

// export default User;

type UserShape = {
    name: string,
     age: number,
      isStudent :boolean
}

const User = ({name, age, isStudent}:UserShape) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{isStudent}</h1>
        </div>
    );
};

export default User;