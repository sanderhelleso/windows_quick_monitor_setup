import { createGlobalStyle } from "styled-components";

export const standard = {
	name: "standard",
	bg: "#ffffff",
	mainTxtColor: '"#222831"',
};

export const darkmode = {
	name: "darkmode",
	bg: "#0b032d",
	mainTxtColor: "#ffffff",
};

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
	}
	
    *, *:before, *:after {
        box-sizing: inherit;
	}
	
    p {
        line-height: 1.8;
	}

	#root {
		height: 100vh;
	}
	
    body {
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400&display=swap');
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
		margin: 0;
		background-color: ${(props) => props.bg};
		height: 100vh;
	}

    ul li {
        list-style: none;
    }
`;
