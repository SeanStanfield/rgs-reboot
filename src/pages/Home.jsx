import '../home.css';
import '../base.css';
import {ElfsightWidget} from 'react-elfsight-widget';
import useFetch, {useCmsContext} from "../contexts/CmsContext";
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";

import Faqs from "../components/Faqs";
import CtaBox from "../components/CtaBox";
import styled from "@emotion/styled";
import ServicesGrid from "../components/ServicesGrid";
import SocialProof from "../components/SocialProof";
import {useParams} from "react-router-dom";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

export const Home = () => {

	const {id} = useParams();
	const {loading, error, pageData} = useFetch(`http://localhost:1337/api/home?populate=*`);
	if (loading) return <p> Loading... </p>;
	if (error) return <p> Error :( </p>;

	console.log('page', pageData);

	return (
		<Styles>
			<div className='hyper-wrapper'>
				<div className='shader'></div>
				<div className='sidebar'>
            <span className='cross'>
                <img src='assets/svg/cross.svg' alt='Cross sign'/>
            </span>

					<ul className='sidebar-links'>
						<li className='sidebar-link'><a href='#'>Home</a></li>
						<li className='sidebar-link'><a href='about.html'>About Us</a></li>
						<li className='sidebar-link'><a href='services.html'>Services</a></li>
						<li className='sidebar-link'><a href='gallery.html'>Gallery</a></li>
						<li className='sidebar-link'><a href='contact.php'>Contact</a></li>
					</ul>

				</div>
				<main>
					<Box className='hero-background'>
						<Container>
							<Grid container alignItems='center' className='hero-wrapper'>
								<Grid item md={8} className='hero-text'>
									<Box className='hero-content'>
										<Typography className='page-title' sx={{pb: 3}}
										            variant='h1'>{pageData?.attributes?.title}</Typography>
										<Typography className='page-description' variant='body1'>
											{pageData?.attributes?.subtitle}
										</Typography>

										<Stack direction='row' spacing={4} sx={{paddingTop: 3}}>
											<Button className='primary-button' variant='contained' color='primary'
											        component='a'
											        href='contact.php'>{pageData?.attributes?.heroCta}</Button>
											<Button className='secondary-button' variant='outlined' color='secondary'
											        component='a' href='tel:07920865826'>Call now</Button>
										</Stack>
									</Box>
								</Grid>
							</Grid>
						</Container>

						<img src='/assets/img/whiteTriangle.svg' className='white-triangle' alt='white triangle'/>
					</Box>

					<Stack className='what-we-do' justifyContent='center' alignItems='center'>
						<Typography variant='h2' className='what-we-do-title'>What We Do</Typography>
						<Typography variant='body1' className='what-we-do-description'>Every year, thousands of
							homeowners with flat roofs complain of cracks and leakage. Most felt or asphalt flat roofs
							usually have a very short life span due to Britans unpredictable and harsh weather. Our
							E.P.D.M roofs, we offer a permanent solution to your roofing needs. </Typography>
						<Box sx={{mb: 12}}></Box>
					</Stack>

					<Box className='slider-wrapper'>
						<Carousel autoPlay={true} infiniteLoop={true} interval={8000} showStatus={false}
						          emulateTouch={true}>

							<Box className='slider'>
								<Container>
									<Grid container spacing={4} className='slider-grid'>
										<Grid item md={6} className='slider-text'>
											<Stack justifyContent='center' className='slider-text-content'>
												<Stack direction='row' alignItems='flex-start'>
													<img src='/assets/svg/costEffectiveYellow.svg' alt='arrow down'
													     className='title-icon'/>
													<Typography variant='h3' className='title'>Cost
														Effective</Typography>
												</Stack>
												<Typography variant='body1' className='para'>While we know that E.P.D.M
													may not
													seem cheap opting for low quality alternatives or ignoring the
													problem
													entirely will be much more costly down the line.</Typography>

												<ul className='list'>
													<li>High Quality materials</li>
													<li>Only local workers</li>
													<li>No management fees</li>
												</ul>
												<Typography variant='body1' className='para'>While we know that E.P.D.M
													may not
													seem cheap opting for low quality alternatives or ignoring the
													problem
													entirely will be much more costly down the line.</Typography>
											</Stack>
										</Grid>

										<Grid item md={6} className='slider-image'>
											<img src='/assets/img/DroneFlatRoof.jpeg' alt='RGS E.P.D.M roofing'/>

										</Grid>
									</Grid>

								</Container>

							</Box>
							<Box className='slider'>
								<Container>
									<Grid container spacing={4} className='slider-grid'>
										<Grid item md={6} className='slider-text'>
											<Stack justifyContent='center' className='slider-text-content'>
												<Stack direction='row' alignItems='flex-start'>
													<img src='/assets/svg/Shield.svg' alt='Shield'
													     className='title-icon'/>
													<Typography variant='h3' className='title'>fully
														qualified</Typography>
												</Stack>

												<Typography variant='body1' className='para'>We only allow fully
													qualified workers to join us on our projects, so you can feel
													confident in the quality assurance that we provide</Typography>
												<br/>
												<Typography variant='body1' className='para'>Having been in this
													business for nearly 30 years, we know the difference having
													qualified workers can have. cutting corners only leads to more
													problems in the long run. Do it right first time, with
													RGS.</Typography>
											</Stack>
										</Grid>

										<Grid item md={6} className='slider-image'>
											<img src='/assets/img/ServicesHouse.jpg' alt='rgs roofing van'/>

										</Grid>
									</Grid>

								</Container>

							</Box>
							<Box className='slider'>
								<Container>
									<Grid container spacing={4} className='slider-grid'>
										<Grid item md={6} className='slider-text'>
											<Stack justifyContent='center' className='slider-text-content'>
												<Stack direction='row' alignItems='flex-start'>
													<img src='/assets/svg/clock-solid.svg' alt='arrow down'
													     className='title-icon'/>
													<Typography variant='h3' className='title'>Long Lasting</Typography>
												</Stack>

												<Typography variant='body1' className='para'>we specialize in providing
													long-lasting E.P.D.M roofing solutions for flat roofs.</Typography>

												<ul className='list'>
													<li>5 Star quality</li>
													<li>Unbeatable on price</li>
												</ul>
												<Typography variant='body1' className='para'> Our commitment to using
													high-quality materials, employing experienced and skilled roofers,
													and adhering to the highest industry standards ensures that our roof
													repair services provide peace of mind for years to come. Contact us
													today for durable and reliable flat roofing solutions.</Typography>
											</Stack>
										</Grid>

										<Grid item md={6} className='slider-image'>
											<img src='/assets/img/roof-tiles-new.jpeg' alt='new roof tiles'/>

										</Grid>
									</Grid>

								</Container>

							</Box>

						</Carousel>
					</Box>

					<Box sx={{mb: 12}}/>
					<Stack className='what-we-do' justifyContent='center' alignItems='center'>
						<Typography variant='h2' className='what-we-do-title'>OUR SERVICES</Typography>
						<Typography variant='body1' className='what-we-do-description'>Every year, thousands of
							homeowners with flat roofs complain of cracks and leakage. Most felt or asphalt flat roofs
							usually have a very short life span due to Britans unpredictable and harsh weather. Our
							E.P.D.M roofs, we offer a permenant solution to your roofing needs. </Typography>

					</Stack>

					<ServicesGrid/>
					<Box sx={{mb: -6}}></Box>

					<section className='reviews'>

						<Stack className='what-we-do' justifyContent='center' alignItems='center'>
							<Typography variant='h2' className='what-we-do-title'>{pageData?.resultsTitle}</Typography>
							<Typography variant='body1'
							            className='what-we-do-description'>{pageData?.resultsIntro}</Typography>
						</Stack>


						<div className='reviews-wrapper'>
							<ElfsightWidget widgetID='6bf45176-27b6-4c31-b433-22862deef9d8'/>
						</div>

					</section>

					<SocialProof/>

					<Faqs faqs={pageData?.attributes?.FAQs} title='Frequently asked questions'/>

					<CtaBox/>

					<Footer/>
				</main>
			</div>
		</Styles>
	)
}

const Styles = styled.div`

    .control-arrow {
        max-height: 40px;
        width: 40px !important;
        top: 50% !important;
        background-color: rgba(237, 237, 237, 0.49) !important;
        border-radius: 50px;
        margin: ${({theme}) => theme.spacing(0, 4)};

        &::before {
            color: black !important;
        }
    }

    .hero-background {
        background-image: url("/assets/img/HeroHouseFull.png");

        ${({theme}) => theme.breakpoints.down('sm')} {
            background-image: url("/assets/img/HeroHouseSmall.png");

        }

        background-repeat: no-repeat;
        background-size: cover;
    }

    .hero-wrapper {
        min-height: 70vh;

        ${({theme}) => theme.breakpoints.down('md')} {
            padding-top: 0;
        }
    }

    .page-title {
        text-transform: uppercase;
    }

    .what-we-do {
        max-width: 1200px;
        text-align: center;
        margin: auto;
        position: relative;
        z-index: 100;
        padding: ${({theme}) => theme.spacing(0, 4)};

        &-title {
            margin-top: -40px;

            ${({theme}) => theme.breakpoints.down('lg')} {
                margin-top: -10px;
            }

            ${({theme}) => theme.breakpoints.down('md')} {
                margin-top: 20px;
            }
	        
        }

        &-description {
            padding-top: ${({theme}) => theme.spacing(4)};
        }
    }

    .slider {

        &-wrapper {
            background: linear-gradient(to top right, #27374E, #2F4F7F);
        }

        &-grid {
            padding: ${({theme}) => theme.spacing(10, 0)};
        }

        * {
            color: white;
        }

        img {
            border-radius: 8px;
            height: 100%;
            object-fit: cover;
	        max-height: 400px;

        }

        ul {
            padding: ${({theme}) => theme.spacing(4, 2)};
        }

        li {
            font-size: 20px;
            font-family: 'Roboto Condensed';
        }

        .slider-text {
            min-height: 100%;
            display: flex;
            text-align: left;

            &-content {
                justify-content: center;

                .title-icon {
                    padding-right: 0.75rem;
                    max-width: 45px;
                    object-fit: contain;
	                transform: translateY(-10px);
                }
            }
        }

        .title {
            position: relative;
            padding-bottom: ${({theme}) => theme.spacing(1)};

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
    }
`;