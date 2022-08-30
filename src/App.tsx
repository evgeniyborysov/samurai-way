import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { RootStateType } from "./redux/state";

type AppPropsType = {
    state: RootStateType;
    addPost: (post: string) => void;
};

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Navbar />
                <div className="app-wrapp-content">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to={"/profile"} />}
                        />
                        {/* <Route path="/dialogs" render={() => <Dialogs />} /> */}
                        {/* <Route path="/profile" render={() => <Profile />} /> */}
                        <Route
                            path={"/dialogs"}
                            render={() => (
                                <Dialogs
                                    dialogs={props.state.dialogsPage.dialogs}
                                    messages={props.state.dialogsPage.messages}
                                />
                            )}
                        />
                        <Route
                            path={"/profile"}
                            render={() => (
                                <Profile
                                    posts={props.state.profilePage.posts}
                                    addPost={props.addPost}
                                />
                            )}
                        />
                        <Route
                            path="*"
                            render={() => <div>404 Not Found</div>}
                        />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
