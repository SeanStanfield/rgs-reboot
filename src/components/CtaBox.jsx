import React from "react";
import styled from "@emotion/styled";
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";

const CtaBox = () => {

	return (
		<Styles>
			<Container className='wrapper'>

				<Typography variant='h2' component='h3' className='cta-title'>Get your free quote</Typography>
				<Typography variant='body1' className='cta-body'>Got a roofing problem that needs fixing?
					Get in touch for your free quote today. Send us a message or give us a call on 07920 865826.
					We offer our services to residential, commercial and industrial clients.</Typography>

				<Stack direction='row' spacing={4} className='buttons'>
					<Button variant='contained' className='cta-button'>Call now</Button>
					<Button variant='outlined' className='cta-button'>Get in Touch</Button>
				</Stack>

			</Container>
		</Styles>
	)
}

const Styles = styled.div`

    background-image: url("https://res.cloudinary.com/ddnkaqqhe/image/upload/v1683560692/cta-shaded-webp_swzqmj.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 650px;
    width: 100vw;
	display: flex;
	flex-direction: row;
   	height: 100%;
	align-items: center;
	
	.cta-title{
		color: white;
		padding-bottom: ${({theme}) => theme.spacing(4)};
	}
	
	.cta-body{
		color: white;
		max-width: 650px;
	}
	
	.cta-button{
		flex-grow: 0;
		flex-basis: max-content;
	}
	
	.buttons{
		padding-top: ${({theme}) => theme.spacing(4)};
	}
	
`;

export default CtaBox;