
const foregroundColor = '#E3E5E6';
const backgroundColor = '#1E2934';
const red = '#FF0019';
const green = '#52FF4E';
const yellow = '#EDBD3C';
const blue = '#226FD1';
const magenta = '#BD4AB9';
const cyan = '#42CEFB';
const highlight = '#2596be';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#222430',
	cursorColor: highlight,
	cursorAccentColor: backgroundColor,
	selectionColor: 'rgba(151, 151, 155, 0.2)',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#f1f1f0',
		lightBlack: '#686868',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	css: `
		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}

        .header_header {
            background-color: #111D26 !important;
        }

		/* Add a highlight line below the active tab */
		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 2px;
			background-color: ${highlight};
			transform: scaleX(0);
            transform-origin: left;
			will-change: transform;
		}
		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
		}
		.tab_tab:hover .tab_text {
			font-weight: bold;
		}
        .tab_tab.tab_hasActivity .tab_text {
            color: ${highlight};
        }

        .splitpane_divider { 
            background-color: ${highlight} !important;
            opacity: 0.4
        }

		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
			opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}
		
		.xterm-viewport::-webkit-scrollbar-button {
			width: 0;
			height: 0;
			display: none;
		}
		.xterm-viewport::-webkit-scrollbar-corner {
			background-color: transparent;
		}
		.xterm-viewport::-webkit-scrollbar {
			width: 6px;
			height: 6px;
		}
		.xterm-viewport::-webkit-scrollbar-track,
		.xterm-viewport::-webkit-scrollbar-thumb {
			-webkit-border-radius: 0px;
		}
		.xterm-viewport::-webkit-scrollbar-track {
			background-color: #111D26;
		}
		.xterm-viewport::-webkit-scrollbar-thumb {
			background-color: #545B62;
			-webkit-box-shadow: none;
		}
		.xterm-viewport::-webkit-scrollbar-thumb:hover {
			background-color: ${highlight};
			-webkit-box-shadow: none;
		}
		.xterm .xterm-viewport {
			overflow-y: auto;
		}

		/* Allow custom css / overrides */
		${config.css}
	`
});
