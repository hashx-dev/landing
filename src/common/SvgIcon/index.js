import React from "react";
export const SvgIcon = ({ src, width, height }) => (
	<img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);