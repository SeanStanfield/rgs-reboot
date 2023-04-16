import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import CtaBox from "../components/CtaBox";
import Footer from "../components/Footer";
import {
	Button,
	Card,
	Grid,
	IconButton,
	Input,
	Modal,
	Paper,
	Stack,
	TextField,
	Typography,
	useMediaQuery
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {Helmet} from "react-helmet";
import {Link, useLocation} from "react-router-dom";
import {Close} from "@mui/icons-material";

const Contact = () => {

	const theme = useTheme();
	const xl = useMediaQuery(theme.breakpoints.only('xl'));
	const md = useMediaQuery(theme.breakpoints.down('md'));

	const location = useLocation();
	console.log(location.search, 'params');
	const [fromRedirect, setFromRedirect] = useState(location.search.includes('submitted=true'));

	useEffect(() => {
		setFromRedirect(location.search.includes('submitted=true'));
	}, [location.search])

	return (
		<Styles>
			<Helmet>
				<meta name='title' content='Contact RGS Today!'/>
				<meta name='description'
				      content='Contact RGS Roofing for professional and affordable roofing solutions. Get in touch today to discuss your roofing needs and receive a free quote.'/>

				<meta property='og:type' content='website'/>
				<meta property='og:url' content='https://metatags.io/'/>
				<meta property='og:title' content='Contact RGS today!'/>
				<meta property='og:description'
				      content='Contact RGS Roofing for professional and affordable roofing solutions. Get in touch today to discuss your roofing needs and receive a free quote.'/>
				<meta property='og:image' content='https://i.imgur.com/9bkl2aw.png'/>

				<meta property='twitter:card' content='summary_large_image'/>
				<meta property='twitter:url' content='https://metatags.io/'/>
				<meta property='twitter:title' content='Contact RGS Today!'/>
				<meta property='twitter:description'
				      content='Contact RGS Roofing for professional and affordable roofing solutions. Get in touch today to discuss your roofing needs and receive a free quote.'/>
				<meta property='twitter:image'
				      content='https://i.imgur.com/9bkl2aw.png'/>
				<title>Contact RGS Today</title>
			</Helmet>
			<Modal open={fromRedirect} onClose={() => setFromRedirect(false)}>


				<Paper sx={{maxWidth: '650px', m: 'auto', mt: '30vh', p: 3, position: 'relative'}}>
					<IconButton sx={{position: 'absolute', right: 0, top: 0, m:1}}>
						<Close/>
					</IconButton>
					<Typography sx={{pb: 1}} variant='h2' className=''>Thank you</Typography>
					<Typography variant='body1' className=''>
						Thank you for your enquiry, we'll be in touch as soon as we can.
					</Typography>
					<Button sx={{mt: 4}} variant='contained' component='a' href='/'>Back to Home</Button>
				</Paper>

			</Modal>
			<Grid container className='hero'>
				<Grid item className='hero-text' xs={12} md={6}>
					<Stack className='hero-text-stack'>
						<Typography variant='h1' className='hero-text-title'>Get in Touch</Typography>
						<Typography variant='body1' className='hero-text-body'>If you're experiencing any roofing issues
							or
							have any questions regarding our services, please don't hesitate to fill out the form below
							and
							send us a message. Our team of experts is always ready to assist you and provide the best
							possible solutions to your roofing problems.</Typography>

						<Typography variant='h3' className='hero-text-call'>Call us: 01708 702 216</Typography>
					</Stack>

				</Grid>

				<Grid item xs={12} md={6} lg={5} sx={{ml: xl ? -8 : 0}}>

					<Card className='card'>
						<Typography variant='h3' className='card-title'>How can we help You?</Typography>

						<form action='https://api.web3forms.com/submit' method='POST' id='form' className='form'>
							<input type='hidden' name='access_key' value='443156e1-0dd8-4139-8ee2-d28cce007fb4'/>
							<input type='hidden' name='subject' value='New message from rgsroofingservices.co.uk'/>
							<input type='hidden' name='redirect'
							       value='https://rgsroofingservicestemporary.netlify.app/contact-us?submitted=true'/>
							<input type='checkbox' name='botcheck' id='' style={{display: 'none'}}/>
							<div className='input-field full'>
								<TextField fullWidth label='Full Name' variant='filled' type='text' name='name'
								           id='name' required/>
							</div>
							<div className='input-field half email'>
								<TextField fullWidth label='Email' type='email' variant='filled' name='email' id='email'
								           placeholder='you@company.com' required/>
							</div>
							<div className='input-field half'>
								<TextField fullWidth label='Phone number' type='tel' variant='filled' name='phone'
								           id='phone' required/>
							</div>
							<div className='input-field full'>
								<TextField fullWidth label='Your message' multiline={true} rows={4} variant='filled'
								           name='message' id='message' placeholder='Let us know how we can help.'
								           required></TextField>
							</div>
							<div className='input-field'>
								<Button variant='contained' className='submit' type='submit'>
									Send
								</Button>
							</div>
							<p className='text-base text-center text-gray-400' id='result'></p>
						</form>
					</Card>
				</Grid>
			</Grid>

			<Grid container className='container' direction={md ? 'column-reverse' : 'row'}>
				<Grid item className='container-text' xs={12} md={6}>

					<Stack className='container-text-stack' spacing={2}>
						<Typography variant='h2' className='container-text-stack-title'>Find us</Typography>
						<Typography variant='body1' className='container-text-stack-intro'>
							We have very flexible
							working hours, give us a call 7:00 - 5:00 Mon-Sun to arrange your free consultation.
						</Typography>
						<Typography variant='subtitle1' className='container-text-stack-subtitle'>Our
							Address</Typography>
						<Typography variant='body1' className='container-text-stack-intro'>
							93 Billet Ln, Hornchurch RM11 1XJ
						</Typography>

						<Button component='a' target='_blank' referrerPolicy='no-referrer'
						        href='https://www.google.com/maps/place/RGS+Roofing+Services/@51.5724546,0.1917669,13.7z/data=!4m20!1m13!4m12!1m4!2m2!1d-0.1071371!2d51.5036229!4e1!1m6!1m2!1s0x47d8a10a1870c1c9:0x52122ec37290fa05!2srgs+roofing!2m2!1d0.2184819!2d51.5663466!3m5!1s0x47d8a10a1870c1c9:0x52122ec37290fa05!8m2!3d51.5663466!4d0.2184819!16s%2Fg%2F1td2t4nw'
						        variant='contained' className='container-text-stack-button'>Open in Google Maps</Button>
					</Stack>

				</Grid>

				<Grid item className='container-image' xs={12} md={6}>
					<img src='/assets/img/roof-drone-high.jpeg' className='container-image-src'
					     alt='drone shot of roof'/>
				</Grid>

			</Grid>
			<CtaBox/>
			<Footer/>
		</Styles>
	)

}

const Styles = styled.div`

    .hero {
        background-image: linear-gradient(to top right, #27374E, #2F4F7F);
        min-height: 500px;
        color: #fcfcfc;
        z-index: 100;
        position: relative;

        &-text {
            display: grid;
            place-items: center;

            &-stack {
                max-width: 600px;
                gap: 1rem;
                padding: 2rem;
            }

            &-call {
                font-size: 21px;
                font-weight: bold;
                color: #fcfcfc;
                margin-top: 12px;
            }
        }

        .card {
            padding: 2rem;
            margin-right: 2rem;
            margin-left: 2rem;
            animation: fadeIn forwards 1s;
            animation-delay: 0.2s;
            opacity: 0;
            transform: translateY(6rem);
            z-index: 100;
            max-width: 600px;

            &-title {
                text-transform: capitalize;
                font-size: 28px;
            }

            .form {
                display: flex;
                flex-wrap: wrap;

                .full {
                    width: 100%;
                }

                .half {
                    width: 48%;

                    @media all and (max-width: 1200px) {
                        width: 100%;
                    }
                }

                .email {
                    margin-right: 4%;

                    @media all and (max-width: 1200px) {
                        margin-right: 0;
                    }
                }

                .submit {
                    min-width: 150px;
                }
            }


            .input-field {
                margin: 1rem 0;
                width: 100%;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(6rem);
            }

            to {
                transform: translateY(4rem);
                opacity: 1;
            }
        }


    }

    .container {

        &-text {
            display: flex;
            justify-content: center;
            align-items: center;

            &-stack {
                max-width: 500px;
                padding: 2rem;

                &-subtitle {
                    margin-bottom: -12px;
                    margin-top: 16px;
                }

                &-button {
                    max-width: max-content;
                    background-color: #294b7f;
                    color: #fcfcfc;
                    margin-top: 32px;
                }
            }
        }

        &-image {
            position: relative;
            display: flex;

            &-src {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

`;

export default Contact;