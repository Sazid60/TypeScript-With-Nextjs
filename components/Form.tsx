"use client"
import { FormEvent, useRef, useState } from "react";

type formData = {
    name: string;
    email: string;
    password: string;
}
const Form = () => {
    const [submitData, setSubmitData] = useState<formData>({
        name: "",
        email: "",
        password: "",
    })
    
const handleSubmit = (event : FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    const nameVal = name.current!.value;
    const emailVal = email.current!.value;
    const passwordVal = password.current!.value;
    console.log(nameVal, emailVal, passwordVal)
    setSubmitData({name:nameVal, email:emailVal, password:passwordVal})
}
    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" ref={name} />
            <input type="text" placeholder="Your Email" ref={email} />
            <input type="text" placeholder="Your Password" ref={password} />
            <button type="submit">Submit</button>
            <section>
                <h1>Name: {submitData.name} </h1>
                <h1>Email: {submitData.email} </h1>
                <h1>Password: {submitData.password} </h1>
            </section>
        </form>
    );
};

export default Form;