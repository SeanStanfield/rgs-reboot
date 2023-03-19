import React, { useEffect } from 'react';
import {
	Card,
	Avatar,
	CardMedia,
	CardContent,
	Typography,
	Button,
	Box,
	Divider,
	Stack,
} from '@mui/material';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';

const SliderCard = ({ service }) => {
	return (
		<Styles>
			<Card className="card">
				<Stack className={'flexWrapper'}>
					<CardMedia
						component="img"
						className={'image'}
						alt={service?.title}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<CardContent className="card-content">
							<Box sx={{ mb: 2 }}>
								<Typography variant="body1" className={'slider-content-text'}>
									{service?.description}
								</Typography>
							</Box>

							<Divider sx={{ marginTop: 'auto', marginBottom: 2 }} />

							<Box className="slider-content-lower">
								<Typography
									className={'testimonial-name'}
									variant={'subtitle1'}
									component="p"
								>
									{service?.title}
									<br />
								</Typography>

								<Typography
									className="testimonial-span"
									id={'company-desc'}
									variant={'body2'}
									color={'text.secondary'}
									component={'span'}
								>
									Available now
								</Typography>
							</Box>
						</CardContent>
					</Box>
				</Stack>
			</Card>
		</Styles>
	);
};

const Styles = styled.div`
	height: 100%;

	.card {
		display: block;
		border-radius: 15px;
		background: white;
		height: 100%;

		.flexWrapper {
			flex-direction: row;
			height: 100%;
		}

		.image {
			width: 300px;
			height: 100%;

			${({ theme }) => theme.breakpoints.down('xl')} {
				width: 250px;
			}
		}

		${({ theme }) => theme.breakpoints.down('md')} {
			.flexWrapper {
				flex-direction: column;
			}

			.image {
				width: 100%;
				height: 300px;
				object-position: top;
			}
		}

		.card-content {
			padding: ${({ theme }) => theme.spacing(5)};
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.slider-content-text {
				word-break: break-word;
				overflow: hidden;
				line-height: 26px;
				font-size: 18px;
				font-weight: bold;

				${({ theme }) => theme.breakpoints.down('xl')} {
					font-size: 16px;
				}
			}

			.slider-content-lower {
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				.testimonial-span,
				.testimonial-name {
					padding-top: 0.5rem;
				}

				.testimonial-name {
					font-family: IBM Plex Mono, monospace;
					font-size: 20px;
				}

				#company-desc {
					font-style: italic;
				}
			}
		}
	}
`;

export default SliderCard;
