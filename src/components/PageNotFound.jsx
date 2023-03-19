import React from "react";
import styled from "@emotion/styled";
import {ElfsightWidget} from "react-elfsight-widget";

const PageNotFound = () =>{

	return(
		<Styles>
			<ElfsightWidget widgetID="58e516bc-dfa8-4cc8-83ae-ac7adc150e7e"/>
		</Styles>
	)

}

const Styles = styled.div`
	padding-top: 4rem;
`;

export default PageNotFound;