import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/context";

import { BrowserRouter as Router } from "react-router-dom";
// import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<AppProvider>
			<App />
		</AppProvider>
	</Router>,
);
