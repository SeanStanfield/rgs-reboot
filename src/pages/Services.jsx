import '../base.css';
import '../about.css'
import {Box, Container, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import theme from "../theme";
import StatsBox from "../components/StatsBox";
import AreaAvailability from "../components/AreaAvailability";
import CtaBox from "../components/CtaBox";
import Faqs from "../components/Faqs";
import styled from "@emotion/styled";
import TestimonialGrid from "../components/TestimonialGrid";
import ServicesGrid from "../components/ServicesGrid";
import {useParams} from "react-router-dom";
import useFetch from "../contexts/CmsContext";
import Footer from "../components/Footer";
import React from "react";
import {Helmet} from "react-helmet";

export const Services = () => {

	const {id} = useParams();
	const {loading, error, pageData} = useFetch(`https://rgs-heroku.herokuapp.com/api/service/${id ?? ''}?populate=coverImage`);
	const allServicesPage = useFetch(`https://rgs-heroku.herokuapp.com/api/service-pages/?populate=*`);

	const mobile = useMediaQuery(theme.breakpoints.down('md'));


	if (allServicesPage.loading) return <p> Loading... </p>;
	if (allServicesPage.error) return <p> error... </p>;
	if (loading) return <p> Loading... </p>;
	if (error) return <p> Error</p>;

	const allServices = allServicesPage?.pageData;

	console.log('Page Data', pageData);


	return (
		<Styles>
			<Helmet>
				<meta name='title' content='Our Services!'/>
				<meta name='description'
				      content='RGS Roofing Services provides high-quality and affordable roofing solutions, including EPDM roofing, tiling and slating, lead work, facia and guttering, and more. Contact us today for a long-lasting and reliable roofing system.'/>

				<meta property='og:type' content='website'/>
				<meta property='og:url' content='https://metatags.io/'/>
				<meta property='og:title' content='Our Services!'/>
				<meta property='og:description'
				      content='RGS Roofing Services provides high-quality and affordable roofing solutions, including EPDM roofing, tiling and slating, lead work, facia and guttering, and more. Contact us today for a long-lasting and reliable roofing system.'/>
				<meta property='og:image' content='https://i.imgur.com/9bkl2aw.png'/>

				<meta property='twitter:card' content='summary_large_image'/>
				<meta property='twitter:url' content='https://metatags.io/'/>
				<meta property='twitter:title' content='Our Services!'/>
				<meta property='twitter:description'
				      content='RGS Roofing Services provides high-quality and affordable roofing solutions, including EPDM roofing, tiling and slating, lead work, facia and guttering, and more. Contact us today for a long-lasting and reliable roofing system.'/>
				<meta property='twitter:image'
				      content='https://i.imgur.com/9bkl2aw.png'/>
				<title>Our Services</title>
			</Helmet>
			<Box className='background'
			     sx={{background: `linear-gradient(to top right, #26354A 25%, ${theme.palette.primary.main}) 40%`}}>

				<Grid container justifyContent='center' alignItems='center' className='hero-wrapper'>
					<Grid item md={5} className='hero-text'>
						<Box className='hero-content'>
							<Typography className='page-title' sx={{pb: 3}}
							            variant='h1'>{pageData?.attributes?.name}</Typography>
							<Typography className='page-description' variant='body1'>
								{pageData?.attributes?.description}
							</Typography>
						</Box>
					</Grid>

					<Grid item md={7} className='hero-image'>
						<img className='van' src={pageData?.attributes?.coverImage?.data?.attributes?.url}
						     alt='van of RGS roofing'/>
					</Grid>
				</Grid>

			</Box>

			<ServicesGrid services={allServices}/>
			<TestimonialGrid/>
			<CtaBox/>

			<Footer/>
		</Styles>
	)
};

const Styles = styled.div`


    .background {
    }

    .hero-wrapper {
        padding-top: 0;
        height: auto !important;
        min-height: unset;

        ${({theme}) => theme.breakpoints.down('md')} {
            padding-top: ${({theme}) => theme.spacing(8)};
            gap: ${({theme}) => theme.spacing(6)};
        }
    }

    .hero-image {
        height: 100%;
        max-height: 100%;
    }

    .hero-text {
        padding-left: ${({theme}) => theme.spacing(8)};

        ${({theme}) => theme.breakpoints.down('md')} {

            padding-left: ${({theme}) => theme.spacing(4)};
        }
    }

    .van {
        display: block;
        object-fit: cover;
        height: 100%;
        margin-left: auto;
        max-width: 100%;
        max-height: 100%;
    }
`;