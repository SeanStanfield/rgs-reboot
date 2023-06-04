import React from "react";
import styled from "@emotion/styled";
import {Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";

const ServicesGrid = ({services}) => {

	const {id} = useParams();
	const navigate = useNavigate();


	const defaultServices = [
		{
			name: 'Tiling and Slating',
			description: 'Tiling and slating description, this needs to be a few sentences and is dummy text for now.',
			img: 'chimneyTiles.jpg'
		},
		{
			name: 'E.P.D.M Roofing',
			description: 'Tiling and slating description, this needs to be a few sentences and is dummy text for now.',
			img: 'flatRoofingFull.jpg'
		},
		{
			name: 'Lead work',
			description: 'Tiling and slating description, this needs to be a few sentences and is dummy text for now.',
			img: 'highRiseRoof.jpg'
		},
		{
			name: 'Facial and Guttering',
			description: 'Tiling and slating description, this needs to be a few sentences and is dummy text for now.',
			img: 'ServicesHouse.jpg'
		},
		{
			name: 'Roof and gutter cleaning',
			description: 'Tiling and slating description, this needs to be a few sentences and is dummy text for now.',
			img: 'roofTiles.jpg'
		},
		{
			name: 'Repairs and roof overhauls',
			description: 'Tiling and slating description, this needs to be a few sentences and is dummy text for now.',
			img: 'WhiteHouseRoof.jpg'
		},
		{
			name: 'Repairs and roof overhauls',
			description: 'Tiling and slating description, this needs to be a few sentences and is dummy text for now.',
			img: 'WhiteHouseRoof.jpg'
		},
		{
			name: 'Repairs and roof overhauls',
			description: 'Tiling and slating description, this needs to be a few sentences and is dummy text for now.',
			img: 'WhiteHouseRoof.jpg'
		},
		{
			name: 'Repairs and roof overhauls',
			description: 'Tiling and slating description, this needs to be a few sentences and is dummy text for now.',
			img: 'WhiteHouseRoof.jpg'
		},
	]

	return (
		<Styles>
			<Container className='wrapper'>
				<Grid container className='services-grid' spacing={3}>
					{services?.map((service, index) => (
						<Grid item className='service-grid-item' md={4} xs={12} sm={6} key={index}>
							<Card onClick={() => navigate(`/services/${service?.attributes?.slug}`)} className='card'>
								<CardMedia component='img' className='image'
								           src={service?.attributes?.overviewImage?.data?.attributes?.url}>
								</CardMedia>

								<CardContent className='content'>
									<img src='/assets/img/minitriangle.svg' alt='roof graphic'/>
									<Typography variant='h4' className='name'>{service?.attributes?.title}</Typography>
									<Typography variant='body1'
									            className='subtitle'>{service?.attributes?.subtitle}</Typography>
									<Typography variant='body1'
									            className='description'>{service?.attributes?.introduction}</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Styles>
	)
}

const Styles = styled.div`

    .card {
        cursor: pointer;
    }

    .wrapper {
        padding: ${({theme}) => theme.spacing(8, 4)};

        ${({theme}) => theme.breakpoints.down('md')} {
		    
            padding: ${({theme}) => theme.spacing(8, 3)};
        }
    }

    .image {
        height: 360px;
        object-fit: cover;
            // ${({theme}) => theme.breakpoints.down('md')}{
        // 	height: 350px;
        // }
    }

    .content {

        .subtitle {
            padding-top: 4px;
            position: relative;
            transition: 0.3s ease;
            top: 0;

            ${({theme}) => theme.breakpoints.down('lg')} {
                display: none;
            }
        }

        background-color: #f6f6f6;
        position: relative;
        overflow: visible;
        margin-top: -300px;
        transition: 0.3s ease;
        transform: translateY(300px);
	    

        ${({theme}) => theme.breakpoints.down('lg')} {
	        
	        .description{
	        	font-size: 16px;
		        
	        }

        }

        ${({theme}) => theme.breakpoints.only('xl')} {
            transform: translateY(270px);
            margin-top: -270px;

            .subtitle {
                display: block;
            }
        } 
	    ${({theme}) => theme.breakpoints.only('xs')} {
            transform: translateY(265px);
            margin-top: -265px;

            .subtitle {
                display: block;
            }
        }
	    
	    

        height: 300px;

        img {
            position: absolute;
            width: 100%;
            left: 0;

            ${({theme}) => theme.breakpoints.down('lg')} {
                display: none;
            }
        }

        .description {
            padding-top: 12px;
        }
    }

    .service-grid-item {
        transition: 0.3s ease;
    }

    .service-grid-item:hover {
        .content {
            transform: translateY(0);
        }

        .subtitle {
            height: 0;
            opacity: 0;
        }
    }

    .name {
        position: relative;

        &::before {
            content: '';
            position: absolute;
            height: 4px;
            width: 40px;
            background-color: #e7ce4f;
            border-radius: 10px;
            top: -8px;
            left: 0;
        }
    }






`;

export default ServicesGrid;