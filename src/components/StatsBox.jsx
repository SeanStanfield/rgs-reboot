import React from "react";
import styled from "@emotion/styled";
import {Grid, Typography} from "@mui/material";

const StatsBox = () =>{

	return(
		<Styles>

			<Grid container>
				<Grid item className='stats-item' md={4} xs={12}>
					<Typography variant='body1' className='upper-text'>We Guarantee</Typography>
					<Typography variant='h1' component='p' className='big-number'>20</Typography>
					<Typography variant='body1' className='lower-text'>Years on all our services</Typography>
				</Grid>
				<Grid item className='stats-item' md={4} xs={12}>
					<Typography variant='body1' className='upper-text'>Check out our</Typography>
					<Typography variant='h1' component='p' className='big-number'>4.8</Typography>
					<Typography variant='body1' className='lower-text'>Star rating</Typography>
				</Grid>
				<Grid item className='stats-item' md={4} xs={12}>
					<Typography variant='body1' className='upper-text'>We are available</Typography>
					<Typography variant='h1' component='p' className='big-number'>24/7</Typography>
					<Typography variant='body1' className='lower-text'>Give us a call anytime</Typography>
				</Grid>
			</Grid>
		</Styles>
	)
}

const Styles = styled.div`
	
	background: #294b7f;
	margin: ${({theme}) => theme.spacing(4, 0)};
	
	.stats-item{
		border-left: solid 2px #243B5D;
		border-right: solid 2px #243B5D;
		display: grid;
		place-items: center;
		min-height: 240px;
		padding: ${({theme}) => theme.spacing(1, 0)};
		
		
		
		.big-number{
			color: ${({theme}) => theme.palette.primary.secondary};
		}
		
		.upper-text{
			text-transform: uppercase;
		}
		
		.upper-text, .lower-text{
			color: white;
		}
	}
	
	
	
	${({theme}) => theme.breakpoints.down('md')}{
		.stats-item{
			border: none;
            border-bottom: solid 3px #243B5D;

        }
	}
`;

export default StatsBox;