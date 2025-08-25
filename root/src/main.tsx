import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./Header";
import Footer from "./Footer";

createRoot(document.body).render(
	<StrictMode>
		<Header />
		<App />
		<Footer />
	</StrictMode>,
);
