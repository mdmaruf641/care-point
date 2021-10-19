import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./Contexts/AuthProvider";
import Header from "./Components/Pages/Shared/Header/Header";
import Home from "./Components/Pages/Home/Home/Home";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Team from "./Components/Pages/Team/Team";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Login from "./Components/Pages/Login/Login/Login";
import SignUp from "./Components/Pages/Login/SignUp/SignUp";
import ServiceDetails from "./Components/Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./Components/Pages/Login/PrivateRoute/PrivateRoute";
import Footer from "./Components/Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/team">
              <Team></Team>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/serviceDetail/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
