import React from 'react';
import styled from '@emotion/styled';
import useFetch from "../contexts/CmsContext";
import {Box, Grid, Typography} from "@mui/material";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet";


const Blog = ({id, title, content}) => {
	const {loading, error, pageData} = useFetch(`http://localhost:1337/api/blog?populate=*`);
	if (loading) return <p>Loading...</p>;
	if (error) {
		console.log(error)
		return <p>Error :( - {error.code}</p>
	}

	return (
		<Styles>
			<Helmet>
				<meta name='title' content='Our Blog!'/>
				<meta name='description'
				      content='Discover informative articles on the latest roofing trends, maintenance tips and more. Trust our experienced team for all your roofing needs.'/>

				<meta property='og:type' content='website'/>
				<meta property='og:url' content='https://metatags.io/'/>
				<meta property='og:title' content='Our Blog!'/>
				<meta property='og:description'
				      content='Discover informative articles on the latest roofing trends, maintenance tips and more. Trust our experienced team for all your roofing needs.'/>
				<meta property='og:image' content='https://i.imgur.com/9bkl2aw.png'/>

				<meta property='twitter:card' content='summary_large_image'/>
				<meta property='twitter:url' content='https://metatags.io/'/>
				<meta property='twitter:title' content='Our Blog!'/>
				<meta property='twitter:description'
				      content='Discover informative articles on the latest roofing trends, maintenance tips and more. Trust our experienced team for all your roofing needs.'/>
				<meta property='twitter:image'
				      content='https://i.imgur.com/9bkl2aw.png'/>
				<title>Our Blog</title>
			</Helmet>
			<Box className='background'
			     sx={{background: `linear-gradient(to top right, #26354A 25%, #3f51b5) 40%`}}>

				<Grid container justifyContent='center' alignItems='center' className='hero-wrapper' spacing={4}>
					<Grid item md={5} className='hero-text'>
						<Box className='hero-content'>
							<Typography className='page-title' sx={{pb: 3}}
							            variant='h1'>{pageData?.attributes?.title}</Typography>
							<Typography className='page-description' sx={{pb: 3}}
							            variant='body1'>{pageData?.attributes?.subtitle}</Typography>

						</Box>
					</Grid>

					<Grid item md={5} className='hero-image'>
						<img className='cover' src={pageData?.attributes?.heroImage?.data?.attributes?.url} alt='cover image of the blog'/>
					</Grid>

				</Grid>

			</Box>

			<BlogList/>

			<Footer/>
		</Styles>
	);
};

const Styles = styled.div`

    .blog-content {
        width: 100%;
        max-width: 800px;
        margin: auto;
        margin-top: ${({theme}) => theme.spacing(4)};
    }

    .background {
        min-height: 70vh;
        display: flex;
        align-items: center;
    }

    .hero-wrapper {
        padding-top: 0;
        height: auto !important;
        min-height: unset;
    }
	
	.hero-content{
		${({theme}) => theme.breakpoints.down('md')}{
			padding: ${({theme}) => theme.spacing(4, 2)};
		}
	}

    .hero-image {
        height: 100%;
        max-height: 100%;
    }

    .hero-text {
        padding-left: ${({theme}) => theme.spacing(8)};
    }

    .cover {
        display: block;
        object-fit: cover;
        height: 100%;
        margin-left: auto;
        max-width: 100%;
        max-height: 100%;
    }
`;

export default Blog;
