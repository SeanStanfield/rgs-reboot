import React from "react";
import styled from "@emotion/styled";
import {Button, Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";

const SocialProof = () => {


	return (
		<Styles>
			<Container className='wrapper'>
				<Grid container className='social-grid' spacing={4}>
					<Grid item md={6} xs={12}>
						<Typography variant='h2' className=''>Quality Brands you can trust</Typography>
						<Typography variant='body1' className='body'>We pride ourselves on the quality and of our
							craftmanship and professionalism, but don’t take it from us, with a 4.8 star average rating
							and 16 5 star reviews, our results speak for themselves.</Typography>
						<Button variant='contained'>Call now</Button>
					</Grid>

					<Grid item md={6} xs={12}>
						<img className='img' src='/assets/img/logoGroup.png' alt='companies we use'/>
					</Grid>
				</Grid>
			</Container>
		</Styles>
	)
}

const Styles = styled.div`

	
	
	
	padding: ${({theme}) => theme.spacing(4, 0, 8, 0)};
	
	.body{
		padding: ${({theme}) => theme.spacing(4, 0)}
	}
	
	.img{
		max-width: 100%;
	}


`;

export default SocialProof;