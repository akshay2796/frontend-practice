import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MortageCalculator } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			// {
			// 	path: "mortage",
			// 	element: <MortageCalculator />,
			// },
		],
	},
	{
		path: "/mortage-calculator",
		element: <MortageCalculator />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
