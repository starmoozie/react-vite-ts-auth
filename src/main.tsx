import React from "react";
import ReactDOM from "react-dom/client";
import Route from "./routes/Route";
import { disableReactDevTools } from "./disableReactDevTools";

import "./index.css";

if (process.env.NODE_ENV === "production") disableReactDevTools();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Route />
	</React.StrictMode>
);
