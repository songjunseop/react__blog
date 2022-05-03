import React from 'react';
import Home from './pages/home/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Post from "./components/post/Post";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import View from "./pages/view/View";
import Write from "./pages/write/Write";
import Mypage from "./pages/mypage/Mypage";

function App() {
    return (
        <>
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login" exact component={Login} >
                    <Login />
                </Route>
                <Route path="/join" exact component={Join} >
                    <Join />
                </Route>
                <Route path="/post" exact component={Post} >
                    <Post />
                </Route>
                <Route path="/view" exact component={View} >
                    <View />
                </Route>
                <Route path="/write" exact component={Write} >
                    <Write />
                </Route>
                <Route path="/mypage" exact component={Mypage} >
                    <Mypage />
                </Route>
            </Switch>
            <Footer />
        </Router>
        </>
     );
}
export default App;
