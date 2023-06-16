import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {Button, Container, Grid, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const SocialProof = ({images}) => {

	console.log(images?.data);

	const [currImages, setCurrImages] = useState(images);


	useEffect(() =>{
		console.log(images?.data, 'all images')
		setCurrImages(images);

		console.log(currImages);
	},[images])




	return (
		<Styles>
			<Container className='wrapper'>
				<Grid container className='social-grid' spacing={4}>
					<Grid item md={6} xs={12}>
						<Stack alignItems='flex-start' justifyContent='center' sx={{height: '100%'}}>
						<Typography variant='h2' className=''>Quality Brands you can trust</Typography>
						<Typography variant='body1' className='body'>We pride ourselves on the quality and of our
							craftmanship and professionalism, but don’t take it from us, with a 4.8 star average rating
							and 16 5 star reviews, our results speak for themselves.</Typography>
						<Button variant='contained' component='a' href='tel:07920865826'>Call now</Button>
						</Stack>
					</Grid>

					<Grid item md={6} xs={12}>
						<Stack className='social-proof-images'>
							{currImages?.data?.map(image =>
								<img src={image?.attributes?.url} alt={image?.attributes?.name}/>
							)}
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Styles>
	)
}

const Styles = styled.div`

	
	.social-proof-images{
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: ${({theme}) => theme.spacing(4)};
		
		img{
			max-width: 45%;
			flex: 1;
		}
	}
	
	padding: ${({theme}) => theme.spacing(4, 0, 8, 0)};
	
	.body{
		padding: ${({theme}) => theme.spacing(4, 0)}
	}
	
	.img{
		max-width: 100%;
	}


`;

export default SocialProof;