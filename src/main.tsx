import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MortageCalculator, PracticeQuestions } from "./pages";

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
		path: "/practice-questions/mortage-calculator",
		element: <MortageCalculator />,
	},
	{
		path: "/practice-questions",
		element: <PracticeQuestions />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
