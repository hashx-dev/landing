import React from "react";
import ReactMarkdown from "react-markdown";

export const Markdown = (props) => {
	return (
		<div style={{ width: "100%" }} className="devii-markdown">
			<ReactMarkdown key="content" children={props.source} />
		</div>
	);
};
