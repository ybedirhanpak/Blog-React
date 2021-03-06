import React, { Component } from "react";

//Route
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//Components
import Footer from "./components/footer";

//Containers
import HomeContainer from "./containers/home-container";
import Header from "./components/header";
import UserRegister from "./containers/user-register-container";
import UserRegisterDetails from "./containers/user-register-detail-container/user-register-details";
import UserLogin from "./containers/user-login-container";
import CreatePostContainer from "./containers/create-post-container";
import userContainer from "./containers/user";
import PostDetailsContainer from "./containers/post-details-container";
import CKTextEditor from "./components/create-post/text-editor/ck-editor";
import UpdatePost from "./components/update-post";
import PostPreviewContainer from "./containers/post-preview-container";
import Error from "../src/components/Error";
import PrivateFooter from "./components/private-footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* Header */}
          <Header />
          <Switch>
            {/* Home Routes */}
            <Route exact path="/" render={() => <Redirect to="home" />} />
            <Route exact path="/home" component={HomeContainer} />
            <Route path="/register" component={UserRegister} />
            <Route path="/complete-register" component={UserRegisterDetails} />
            <Route path="/login" component={UserLogin} />
            <Route path="/user" component={userContainer} />
            <Route path="/post-details" component={PostDetailsContainer} />
            <Route path="/create-post" component={CKTextEditor} />
            <Route path="/update-post" component={UpdatePost} />
            <Route path="/post-preview" component={PostPreviewContainer} />
            <Route component={Error} />
          </Switch>
          {/* Footer Area */}
          <Route
            path="/"
            render={props => (
              <PrivateFooter
                {...props}
                avoidList={["/register", "/login", "/create-post"]}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}
