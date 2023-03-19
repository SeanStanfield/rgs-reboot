import '../base.css';
import '../about.css'
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import theme from "../theme";
import StatsBox from "../components/StatsBox";
import AreaAvailability from "../components/AreaAvailability";
import CtaBox from "../components/CtaBox";
import Faqs from "../components/Faqs";
import useFetch, {useCmsContext} from "../contexts/CmsContext";
import {useLocation, useParams} from "react-router-dom";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import {Helmet} from "react-helmet";

export const About = () => {


	const {id} = useParams();
	const {loading, error, pageData} = useFetch(`http://localhost:1337/api/about/${id ?? ''}?populate=*`);
	if (loading) return <p> Loading... </p>;
	if (error) return <p> Error :( </p>;

	console.log(pageData);


	return (
		<Styles>
			<Helmet>
				<meta name='title' content='RGS roofing services'/>
				<meta name='description'
				      content='RGS Roofing provides top-quality roofing services in the Hornchurch and Essex. Our team of experienced roofers offers repairs, installation, and maintenance for all types of roofing, including flat roofing and EPDM roofing.'/>

				<meta property='og:type' content='website'/>
				<meta property='og:url' content='https://metatags.io/'/>
				<meta property='og:title' content='RGS roofing services'/>
				<meta property='og:description'
				      content='RGS Roofing provides top-quality roofing services in the Hornchurch and Essex. Our team of experienced roofers offer repairs, installation, and maintenance for all types of roofing, including flat roofing and EPDM roofing.'/>
				<meta property='og:image' content='https://i.imgur.com/9bkl2aw.png'/>

				<meta property='twitter:card' content='summary_large_image'/>
				<meta property='twitter:url' content='https://metatags.io/'/>
				<meta property='twitter:title' content='RGS roofing services'/>
				<meta property='twitter:description'
				      content='RGS Roofing provides top-quality roofing services in the Hornchurch and Essex. Our team of experienced roofers offer repairs, installation, and maintenance for all types of roofing, including flat roofing and EPDM roofing.'/>
				<meta property='twitter:image'
				      content='https://i.imgur.com/9bkl2aw.png'/>
				<title>About RGS Roofing Services</title>
			</Helmet>
			<Box className='background'
			     sx={{background: `linear-gradient(to top right, #26354A, ${theme.palette.primary.main})`}}>
				<Container>
					<Grid container justifyContent='center' alignItems='center' className='hero-wrapper'>
						<Grid item md={6} className='hero-text'>
							<Box className='hero-content'>
								<Typography className='page-title' sx={{pb: 3}}
								            variant='h1'>{pageData?.attributes?.title}</Typography>
								<Typography className='page-description' variant='body1'>
									{pageData?.attributes?.subtitle}
								</Typography>
								<Typography className='page-description' variant='body1'>
									I started RGS Roofing services to provide high quality and reliable roofing at
									prices local
									people could
									actually afford. Whether you need a small fix or a roof overhaul, rest assured we’ll
									be able
									to help.
								</Typography>

							</Box>
						</Grid>

						<Grid item md={6} className='hero-image'>
							<img className='headshot' src='/assets/img/headshot.png'
							     alt='Robert Neil, professional roofer'/>
						</Grid>
					</Grid>

				</Container>

				<img src='/assets/img/whiteTriangle.svg' className='white-triangle' alt='white triangle'/>

			</Box>
			<Container className='our-story'>
				<Typography variant='h2' className='our-story-title'>Our Story</Typography>


				<Grid container spacing={4}>
					<Grid item xs={12} md={5}>
						<Stack justifyContent='center' className='local-workers-stack'>
							<Typography variant='h3' className='local-workers-title'>Local Workers</Typography>
							<Typography variant='body1' className='local-workers-text'>As a local business, we take our
								client
								satisfaction seriously. We’re proud to say that most of our work comes from personal
								recommendation from previous clients. Our 4.8 star google rating speaks for itself
								!</Typography>

							<Typography variant='body1' className='local-workers-text'>No matter the size or complexity
								of the job, our
								commitment to quality and professionalism remains the same.</Typography>
						</Stack>
					</Grid>

					<Grid item xs={12} md={6} className='local-workers'>
						<img src='/assets/img/flatRoofingFull.jpg' alt='flat roofing example'
						     className='local-workers-img'/>
					</Grid>
				</Grid>
			</Container>

			<StatsBox/>

			<AreaAvailability/>

			<Faqs/>

			<CtaBox/>

			<Footer/>
		</Styles>
	)
}

const Styles = styled.div`
    .hero-wrapper {
        min -height: 500px;
        height: 50vh;
        padding -top: 32px;

        ${({theme}
        ) =>
                theme.breakpoints.down('md')
        } {
            height: unset !important;
            padding -bottom: ${({theme}
            ) =>
                    theme.spacing(4)
            };
        }
    }


    .our-story {
        margin-top: -75px;

        ${({theme}) => theme.breakpoints.down('lg')} {
            margin-top: -35px;
        }

        ${({theme}) => theme.breakpoints.down('md')} {
            margin-top: 20px;
        }

        z-index: 2;
        position: relative;
    }

    .headshot {
        max-width: 350px;
        aspect-ratio: 1;
        margin: ${({theme}) => theme.spacing(4, 0)
        };
    }
`;