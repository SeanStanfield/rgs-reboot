import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Button, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import useEmblaCarousel from 'embla-carousel-react';

const Slider = ({ _children }) => {
	const [sliderRef, sliderApi] = useEmblaCarousel({
		align: 'center',
		loop: true,
	});

	const [test, useTest] = useState(4)
	const $next = useRef(null);
	const [activeIndex, setActiveIndex] = useState(null);

	const scrollNext = useCallback(() => {
		if (sliderApi) {
			sliderApi.scrollNext();
		}
	}, [sliderApi]);

	const scrollPrev = useCallback(() => {
		if (sliderApi) {
			sliderApi.scrollPrev();
		}
	}, [sliderApi]);

	const handleSelect = () => {
		if (!sliderApi) return;
		setActiveIndex(sliderApi.selectedScrollSnap());
	};

	useEffect(() => {
		if (!sliderApi) return;

		setActiveIndex(sliderApi?.selectedScrollSnap());
		sliderApi.on('select', handleSelect);

		return () => {
			sliderApi.off('select', handleSelect);
		};
	}, [sliderApi]);

	const children = useMemo(
		() =>
			React.Children.count(_children) < 3
				? [...React.Children.toArray(_children), ...React.Children.toArray(_children)]
				: _children,
		[_children]
	);

	return (
		<Styles>
			<div ref={sliderRef} className="slider">
				<div className="slider-container">
				{/*	{React.Children.map(children, (child, i) => (*/}
				{/*		<div*/}
				{/*			className={`slider-item ${*/}
				{/*				activeIndex === i ? 'slider-item-active' : ''*/}
				{/*			}`}*/}
				{/*			key={i}*/}
				{/*		>*/}
				{/*			{child}*/}
				{/*		</div>*/}
				{/*	))}*/}
				</div>

				<Box className={'slider-buttons'}>
					<IconButton
						size="large"
						color="primary"
						ref={$next}
						className="slider-prev"
						onClick={scrollPrev}
						aria-label="Go backwards on slider"
					>
						<ArrowBack />
					</IconButton>

					<IconButton
						size="large"
						color="primary"
						ref={$next}
						className="slider-next"
						onClick={scrollNext}
						aria-label="Go forwards on slider"
					>
						<ArrowForward />
					</IconButton>
				</Box>
			</div>
		</Styles>
	);
};

export default Slider;

const Styles = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 100%;

    background: linear-gradient(to top right, #27374E, #2F4F7F);

	.slider {
		overflow: hidden;
		
		background-color: red;

		.slider-container {
			display: flex;
			padding: ${({ theme }) => `${theme.spacing(6)} 0`};
		}

		.slider-item {
			padding-left: 10px;
			opacity: 0.5;
			position: relative;
			flex: 0 0 85.5%;
			padding-right: ${({ theme }) => theme.spacing(4)};
			transition: ${({ theme }) => theme.transitions.create(['opacity'])};

			${({ theme }) => theme.breakpoints.up('md')} {
				flex: 0 0 75%;
			}

			${({ theme }) => theme.breakpoints.up('lg')} {
				flex: 0 0 50%;
			}
		}

		.slider-item-active {
			opacity: 1;
		}

		.slider-buttons {
			margin: auto;
			display: flex;
			justify-content: center;
		  
		  ${({theme}) => theme.breakpoints.only('xs')}{
		    	transform: translateY(-40px);
		  }

			> * {
				border: solid 1px black;
				margin: 5px 30px;
				padding: 5px;
				box-shadow: 2px 2px 0px black;
				transition: 0.2s ease;
			}

			> *:hover {
				box-shadow: 3px 3px 0px black;
			}
		}
	}
`;
