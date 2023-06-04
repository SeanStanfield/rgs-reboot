import React from "react";
import styled from "@emotion/styled";
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";
import useFetch from "../contexts/CmsContext";
import Faqs from "./Faqs";
import ServicesGrid from "./ServicesGrid";

const IndividualBlog = () => {

	const location = useLocation();

	const subRoute = location?.pathname?.split('/').pop();
	const {
		loading,
		error,
		pageData
	} = useFetch(`https://rgs-heroku.herokuapp.com/api/service-pages?filters[slug][$eq]=${subRoute}&populate=serviceContent&populate=related_services&populate=FAQs`);
	if (loading) return <p> Loading... </p>;
	if (error) return <p> Error :( </p>;

	const service = pageData?.[0]?.attributes;


	return (
		<Styles>

			<Box className='blog-header'>

				<Typography variant='h1' className='blog-header-title'>{service?.title}</Typography>

				<Stack className='blog-header-intro'>
					<Typography variant='body1' className='heading'>{service?.introduction}</Typography>
				</Stack>


			</Box>

			<Container justifyContent = 'center' className='container'>
			<Grid container className='grid'>

				{service?.serviceContent?.map((item, index) =>
					<Grid item className='text' md={12} xs={12}>
						<Grid container className='content' direction={index %2 === 0 ? 'row' : 'row-reverse'} spacing={8}>

							<Grid item md={6} xs={12} className='img-block'>
								<img src={index % 2 === 0 ? '/assets/img/FlatRoofFieldBackdrop.jpg' : '/assets/img/roofWhole.jpg'} alt='image' className='service-content-img'/>
							</Grid>

							<Grid item md={6} xs={12} className='text-block'>
								<Typography variant='h3' component='h3' className='grid-title'>{item.heading}</Typography>
								<Typography variant='body1' component='p' className='grid-review'>{item.text}</Typography>
							</Grid>


						</Grid>

					</Grid>
				)}
			</Grid>
			</Container>

			<Stack className='related'>
				<Typography variant='h2' className='related-title'>Related Services</Typography>

				<ServicesGrid services={service?.related_services?.data}/>
			</Stack>

			<Faqs faqs={service?.FAQs ?? []} title={`Frequently asked ${service?.title} questions`}/>

		</Styles>
	)
}

const Styles = styled.div`
	
	.container{
		padding-bottom: ${({theme}) => theme.spacing(12)};
	}
	
	.related{
		width: 100vw;
		min-height: 400px;
		background: url("/assets/img/relatedbg.svg");
		background-position: top;
		background-size: cover;
		align-items: center;
		padding-top: ${({theme}) => theme.spacing(4)};
		
		&-title{
			text-align: center;
			padding-top: 4rem;
		}
	}

    display: grid;
    place-items: center;

    .grid {

	    overflow: hidden;
	    padding-top: ${({theme}) => theme.spacing(12)};
	    
	    .content{
            padding-bottom: ${({theme}) => theme.spacing(4)};
		    height: 100%;
	    }
	    	
	    .img-block{
		    width: 100%;
		    display: flex;
		    img{
			    width: 100%;
		    }
	    }
	    
	    .text-block{
		    display: flex;
		    height: 100%;
		    flex-direction: column;
		    align-items: center;
            justify-content: center;
	    }

        .text {
            background: white;
            color: black;
            display: grid;
            place-items: center;
	        

            .grid-title {
                color: ${({theme}) => theme.palette.primary.darker};
                padding-bottom: ${({theme}) => theme.spacing(2)};
            }

            .grid-review {
                font-style: italic;
            }
        }

        .image {
            display: grid;
            place-items: center;
	        
        }
    }


    .blog-header {
        background-image: url("/assets/img/cta-shaded.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        min-height: 70vh;
        padding-bottom: 0;
        margin-bottom: 0;
	    width: 100vw;
	    
	    display: grid;
	    place-items: center;

        &-title {
            color: white;
	        text-align: center;
	        max-width: 800px;
	        padding-bottom: ${({theme}) => theme.spacing(12)};
	        
        }

        &-intro {
	        text-align: center;
            color: black;
            background-color: white;
            padding: ${({theme}) => theme.spacing(4)};
            position: absolute;
            bottom: 0;
	        margin: ${({theme}) => theme.spacing(0, 8)};
	        min-height: 80px;
	        display: grid;
	        place-items: center;
	        width: 80%;

        }

    }


`;

export default IndividualBlog;