import "./index.css";
// import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/reduxStore";

const rerenderEntireTree = (state: any) => {
	ReactDOM.render(
		<App state={state} dispatch={store.dispatch.bind(store)} />,
		document.getElementById("root")
	);
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
	const state = store.getState();
	rerenderEntireTree(state);
});
