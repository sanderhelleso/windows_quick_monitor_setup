import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { standard, darkmode, GlobalStyle } from "../components/styles/themes";
import Main from "./styles/Main";
import { HeadingMain } from "./styles/Heading";
import NoPresets from "./presets/NoPresets";

const App = () => {
	const [theme, setTheme] = useState(darkmode);

	const changeTheme = () => {
		const { name } = theme;
		setTheme(name === "standard" ? darkmode : standard);
	};

	return (
		<ThemeProvider theme={theme}>
			<Main>
				<NoPresets />
			</Main>
			<GlobalStyle bg={theme.bg} />
		</ThemeProvider>
	);
};

export default App;
