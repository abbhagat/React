import './App.css'
import {Product} from "./component/Product";
import {Greeting} from "./component/Greeting";
import {CardWrapper} from "./component/CardWrapper";
import {UserDetails} from "./component/UserDetails";

function App() {

  return (
    <>
      <UserDetails name={"Bruce Wayne"} isOnline={true} hideOffline={true} isPremium={true} role={'admin'} />
      <UserDetails name={"Clark Kent"}  isOnline={true} hideOffline={true} isNewUser={true} role={'user'}/>
      {/*<h1>React Playground App</h1>*/}
      {/*<CardWrapper title="User Profile">*/}
      {/*  <p>Name : Bruce Wayne</p>*/}
      {/*  <p>Age : 35</p>*/}
      {/*  <p>City : Gotham</p>*/}
      {/*  <button name={"edit"}>Edit</button>*/}
      {/*</CardWrapper>*/}
      {/*<Greeting name="Bruce" message="Good Morning"/>*/}
      {/*<Greeting name="Clark" />*/}
      {/*<Greeting message="Welcome" />*/}
      {/*<Greeting/>*/}
      {/*<Product title="Iphone 14" price={1200} inStock={true} category={["Electronics", "Mobile"]}/>*/}
    </>
  )
}

export default App
