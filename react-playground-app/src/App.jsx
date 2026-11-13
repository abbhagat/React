import './App.css'
import {Product} from "./component/Product";
import {Greeting} from "./component/Greeting";
import {CardWrapper} from "./component/CardWrapper";
import {UserDetails} from "./component/UserDetails";
import {ProductList} from "./component/ProductList";
import {NameList} from "./component/NameList";
import {AlertWithInlineCSS} from "./component/AlertWithInlineCSS.jsx";
import {Alert} from "./component/Alert.jsx";

function App() {

  return (
    <>
      <Alert>Your changes have been saved</Alert>
      <Alert type="error">Something went wrong !</Alert>
      <NameList/>
      <ProductList/>
      <UserDetails name={"Bruce Wayne"} isOnline={true} hideOffline={true} isPremium={true} role={'admin'} />
      <UserDetails name={"Clark Kent"}  isOnline={true} hideOffline={true} isNewUser={true} role={'user'}/>
      <h1>React Playground App</h1>
      <CardWrapper title="User Profile">
        <p>Name : Bruce Wayne</p>
        <p>Age : 35</p>
        <p>City : Gotham</p>
        <button name={"edit"}>Edit</button>
      </CardWrapper>
      <Greeting name="Bruce" message="Good Morning"/>
      <Greeting name="Clark" />
      <Greeting message="Welcome" />
      <Greeting/>
      <Product title="Iphone 14" price={1200} inStock={true} category={["Electronics", "Mobile"]}/>
    </>
  )
}

export default App
