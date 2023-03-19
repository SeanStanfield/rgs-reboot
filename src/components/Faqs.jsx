import React, {useState} from 'react';
import {
	Typography,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Container, Box,
} from '@mui/material';
import {Add as AddIcon, Remove} from '@mui/icons-material';
import styled from '@emotion/styled';

const Faqs = ({faqs, title}) => {
	const [expanded, setExpanded] = useState(null);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Styles>
			<Box  className='wrapper'>
				<Grid container spacing={4}>
					<Grid item md={8} className='text-content'>
						<Box className='text'>
							<Typography variant='h2' className='faq-title'>
								{title}
							</Typography>

							{faqs?.map(
								({question, answer}, i) => (
									<Accordion
										expanded={expanded === `question-${i}`}
										key={i}
										onChange={handleChange(`question-${i}`)}
									>
										<AccordionSummary
											expandIcon={expanded === `question-${i}` ? <Remove/> : <AddIcon/>}
											aria-controls={`question-${i}-content`}
											id={`question-${i}-header`}
										>
											<Typography>
												<b>{question}</b>
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography>{answer}</Typography>
										</AccordionDetails>
									</Accordion>
								)
							)}
						</Box>
					</Grid>
					<Grid item md={4} sx={{display: {xs: 'none', md: 'block'}}} className='faq-image'>
						<img src="/assets/img/roof-drone-high.jpeg" alt='' className='faq-image-src'/>
					</Grid>
				</Grid>
			</Box>
		</Styles>
	);
};

const Styles = styled.div`
    min-height: 250px;
    margin-top: ${({theme}) => theme.spacing(8)};

    background-image: linear-gradient(to top right, #27374E, #2F4F7F);
	width: 100vw;
	max-width: 100vw;
	overflow-x: hidden;
	
    .faq-title {
        color: ${({theme}) => theme.palette.common.white};
        margin: ${({theme}) => theme.spacing(4, 0)};
    }

    .faq-image {
	    &-src{
	    max-height: 700px;
	    }
    }

    .text-content {
        display: grid;
        place-items: center;

        .text {
            max-width: 700px;
            min-width: 400px;
            padding: ${({theme}) => theme.spacing(0, 12)};
            position: relative;
            left: ${({theme}) => theme.spacing(8)};
	        
	        
	        margin-bottom: ${({theme}) => theme.spacing(6)};

            ${({theme}) => theme.breakpoints.down('lg')} {
                left: ${({theme}) => theme.spacing(0)};
	            padding: ${({theme}) => theme.spacing(4)};
	            max-width: 100%;
	            min-width: unset;
            }
        }
    }
`;

export default Faqs;
