import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { ActionTypes, RootStateType } from "./redux/state";

type AppPropsType = {
	state: RootStateType;
	dispatch: (action: ActionTypes) => void;
};

function App(props: AppPropsType) {
	console.log(props);

	return (
		<BrowserRouter>
			<div className="app">
				<Header />
				<Navbar />
				<div className="app-wrap-content">
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
									message={props.state.dialogsPage.newMessage}
									dispatch={props.dispatch}
								/>
							)}
						/>
						<Route
							path={"/profile"}
							render={() => (
								<Profile
									posts={props.state.profilePage.posts}
									newPostText={
										props.state.profilePage.newPostText
									}
									dispatch={props.dispatch}
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
