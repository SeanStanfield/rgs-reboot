import React from "react";
import styled from "@emotion/styled";
import {useMediaQuery} from "@mui/material";
import theme from "../theme";
import {useCmsContext} from "../contexts/CmsContext";

const WhatWeDo = (services) => {

	const mobile = useMediaQuery(theme.breakpoints.down('md'));

	const {homeData} = useCmsContext();
	const pageData = homeData?.[1];
	return (
		<Styles>
		</Styles>
	)

}

const Styles = styled.div`
    .wrapper {
    }
`;

export default WhatWeDo;