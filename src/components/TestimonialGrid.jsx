import React from 'react';
import {
	Typography,
	Grid,
	Stack,
} from '@mui/material';
import styled from '@emotion/styled';
import theme from "../theme";

const TestimonialGrid = () => {


	return (
		<Styles>
			<Grid container className='grid'>

				<Grid item className='image' md={6} xs={12}>
					<img src='/assets/img/FlatRoofFieldBackdrop.jpg' alt='roof example work'/>
				</Grid>
				<Grid item className='text' md={6} xs={12}>
					<Stack className='content'>
						<Typography variant='h2' component='h3' className='grid-title'>Best in class
							materials</Typography>
						<Typography variant='body1' component='p' className='grid-review'>“We used RGS Roofing for our
							roof that needed a lot of specialist work doing to it, Mr Neil was very helpful and
							completed the job on time and on budget”</Typography>
					</Stack>
				</Grid>


				<Grid item className='text desktop-only' md={6} xs={12}>
					<Stack className='content'>
						<Typography variant='h2' component='h3' className='grid-title'>Satisfaction
							Guarantee</Typography>
						<Typography variant='body1' component='p' className='grid-review'>“We used RGS Roofing for our
							roof that needed a lot of specialist work doing to it, Mr Neil was very helpful and
							completed the job on time and on budget”</Typography>
					</Stack>
				</Grid>

				<Grid item className='image' md={6} xs={12}>
					<img src='/assets/img/WhiteHouseRoof.jpg' alt='roof example work'/>
				</Grid>

				<Grid item className='text mobile-only' md={6} xs={12}>
					<Stack className='content'>
						<Typography variant='h2' component='h3' className='grid-title'>Satisfaction
							Guarantee</Typography>
						<Typography variant='body1' component='p' className='grid-review'>“We used RGS Roofing for our
							roof that needed a lot of specialist work doing to it, Mr Neil was very helpful and
							completed the job on time and on budget”</Typography>
					</Stack>
				</Grid>

				<Grid item className='image' md={6} xs={12}>
					<img src='/assets/img/RoofWhole.jpg' alt='roof example work'/>
				</Grid>

				<Grid item className='text' md={6} xs={12}>
					<Stack className='content'>
						<Typography variant='h2' component='h3' className='grid-title'>3 decades of
							experience</Typography>
						<Typography variant='body1' component='p' className='grid-review'>“We used RGS Roofing for our
							roof that needed a lot of specialist work doing to it, Mr Neil was very helpful and
							completed the job on time and on budget”</Typography>
					</Stack>
				</Grid>


			</Grid>
		</Styles>
	);
};

const Styles = styled.div`
	
	
	

    .grid {
        width: 100vw;
	    
	    .desktop-only{
		    ${({theme}) => theme.breakpoints.down('md')}{
			    display: none !important;
		    }
	    }
	    
	    .mobile-only{
		    ${({theme}) => theme.breakpoints.up('sm')}{
			    display: none !important;
		    }
	    }
	    
	    .content{
		    padding: ${({theme}) => theme.spacing(4)};
	    }

        .image, .text {
            aspect-ratio: 1;
        }

        .text {
            background: linear-gradient(to top right, #26354A, ${theme.palette.primary.dark});
            color: white;
            display: grid;
            place-items: center;

            * {
                max-width: 550px;
            }

            .grid-title {
                color: white;
                padding-bottom: ${({theme}) => theme.spacing(2)};
            }

            .grid-review {
                font-style: italic;
            }
	        ${({theme}) => theme.breakpoints.down('md')}{
		        aspect-ratio: unset;
		        padding: ${({theme}) => theme.spacing(6, 4)};
	        }
        }

        .image {
            display: grid;
            place-items: center;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }



`;

export default TestimonialGrid;