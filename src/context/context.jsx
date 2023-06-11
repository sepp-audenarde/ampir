import React, { useState, useEffect, useContext } from "react";
import { projects } from "./projectsData";
import { licences } from "./licencesData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isProjectOpen, setIsProjectOpen] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);

	const [currentProject, setCurrentProject] = useState(null);
	const [currentLicence, setCurrentLicence] = useState(null);

	const [scroll_Y, setScroll_Y] = useState();
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const [dem, setDem] = useState(false);

	useEffect(() => {
		const onScroll = (e) => {
			setScroll_Y(window.pageYOffset);
		};

		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	window.onresize = () => {
		setScreenWidth(window.innerWidth);
	};

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const resetScroll = () => {
		window.scrollTo(0, 0);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const openProject = (project) => {
		setCurrentProject(project);
		setIsProjectOpen(true);
	};

	const closeProject = () => {
		setIsProjectOpen(false);
	};

	const openGallery = (licence) => {
		setCurrentLicence(licence);
		setIsGalleryOpen(true);
	};

	const closeGallery = () => {
		setIsGalleryOpen(false);
		setCurrentLicence(null);
	};

	const test = () => console.log("testing");

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isProjectOpen,
				isGalleryOpen,
				currentProject,
				currentLicence,
				scroll_Y,
				projects,
				screenWidth,
				resetScroll,
				openProject,
				closeProject,
				openSidebar,
				closeSidebar,
				openGallery,
				closeGallery,
				test,

				dem,
				setDem,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
