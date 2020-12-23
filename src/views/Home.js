import React,{useState} from 'react';
import {Button, Textbox} from "../components/Utils";
const Home = props => {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [checking,setChecking] = useState();
  return (
    <>
    <div className="m-auto w-1/4 p-10">
      <Textbox id={"email"} label="Email" value={email} onChange={event => setEmail(event.target.value)} type="textbox"/>
      <Textbox id={"password"} label="Password" value={password} onChange={event => setPassword(event.target.value)} type="password"/>
      <Button checking={checking} onClick={() => setChecking(true)}>Authenticate</Button>
    </div>
      </>
  );
}
export default Home;
