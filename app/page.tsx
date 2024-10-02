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
import UserInfo from "@/components/UserInfo";

export default function Home() {
  return (
    <section>
      <UserInfo username="sazid" email="s@gmail.com" age={20} location={['Earth', 'Usa']} />
      <AdminInfo username="sazid" email="s@gmail.com" age={20} location={['Mars', 'Usa']} admin="yes" />
    </section>
  );
}
