"use client"
// import User from "@/components/User";




// export default function Home() {
//   return (
//     <section>
//       <User name="alex" age={20} isStudent={true} />
//     </section>
//   );
// }
// import User from "@/components/User";


// export default function Home() {
//   return (
//     <section>
//       <User>
//         <p>hi i am sazid</p>
//       </User>
//     </section>
//   );
// }


import AdminInfo from "@/components/AdminInfo";
import Counter from "@/components/Counter";
import ElementWrapper from "@/components/ElementWrapper";
import Form from "@/components/Form";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  return (
    <section>
      <UserInfo username="sazid" email="s@gmail.com" age={20} location={['Earth', 'Usa']} />
      <AdminInfo username="sazid" email="s@gmail.com" age={20} location={['Mars', 'Usa']} admin="yes" />
      <Counter />
      <Form />
      <ElementWrapper elementType="div" className="box" onClick={()=>alert("Div Clicked")}>
        <p>Hibijibi Hibi Jibi </p>
      </ElementWrapper>
    </section>
  );
}
