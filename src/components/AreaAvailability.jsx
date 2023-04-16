import React, {useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";
import {Grid, Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

import ReactMapGL from "react-map-gl";
import mapboxgl, {Marker} from "mapbox-gl";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const AreaAvailability = () => {


	mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vhbi1zdGFuZmllbGQiLCJhIjoiY2xlNHMwbm5kMDYyNTN1bzdqMjY2N3k5eiJ9.fQBlvOS7fKOau7kAwzRCRQ';

	const PIN_LAT = 51.56637;
	const PIN_LNG = 0.2184;

	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(PIN_LNG);
	const [lat, setLat] = useState(PIN_LAT);
	const [zoom, setZoom] = useState(15);

	const theme = useTheme();

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v12',
			center: [lng, lat],
			zoom: zoom,
			attributionControl: false,
		}).addControl(new mapboxgl.AttributionControl({
			customAttribution: 'RGS ROOFING'
		}));
		const shop = new Marker({color: theme.palette.primary.main}).setLngLat([PIN_LNG, PIN_LAT]).addTo(map.current);

		const markerHeight = 50;
		const markerRadius = 10;
		const linearOffset = 25;
		const popupOffsets = {
			'top': [0, 0],
			'top-left': [0, 0],
			'top-right': [0, 0],
			'bottom': [0, -markerHeight],
			'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
			'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
			'left': [markerRadius, (markerHeight - markerRadius) * -1],
			'right': [-markerRadius, (markerHeight - markerRadius) * -1]
		};
		const popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
			.setLngLat([lng, lat])
			.setHTML("<a target='_blank' href='https://www.google.com/maps/place/RGS+Roofing+Services/@51.5663466,0.2097272,15z/data=!4m14!1m7!3m6!1s0x47d8a10a1870c1c9:0x52122ec37290fa05!2sRGS+Roofing+Services!8m2!3d51.5663466!4d0.2184819!16s%2Fg%2F1td2t4nw!3m5!1s0x47d8a10a1870c1c9:0x52122ec37290fa05!8m2!3d51.5663466!4d0.2184819!16s%2Fg%2F1td2t4nw' style='font-size: 16px; border: none; outline: none; color: black;'>Open in maps</a>")
			.setMaxWidth("300px")
			.addTo(map.current);
	});

	useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});




	return (
		<Styles>

			<Stack className='wrapper'>
				<Typography variant='h2' className='title'>Hornchurch and Essex</Typography>
				<Typography variant='body1' className='text'>We operate all over the Hornchurch and Chigwell areas. We
					are
					more than happy to travel up to x miles so help you. If in doubt just give us a call to find out if
					we can help you today, always free of charge.</Typography>
			</Stack>


			<Grid container className='map-section' spacing={4}>
				<Grid item md={6} lg={7} xs={12} className='map'>

					<div ref={mapContainer} className="map-container" />
				</Grid>

				<Grid item md={6} lg={5} xs={12} className='details'>
					<Stack className='find-us-today'>

						<Typography variant='h3' className='find-us-today-title'>Find us today</Typography>
						<Typography variant='body1' className='mini-text'>
							We have very flexible working hours,
							give us a call 7:00 - 5:00 Mon-Sun to arrange your free consultation.</Typography>
						<br/>

						<Typography variant='subtitle1' className='mini-title'>Address</Typography>
						<Typography variant='body1' className='mini-text'>93 Billet Ln, Hornchurch RM11 1XJ</Typography>
						<br/>
						<Typography variant='subtitle1' className='mini-title'>Email</Typography>
						<Typography variant='body1' className='mini-text'>rgsroofingservices@gmail.com</Typography>
						<br/>
						<Typography variant='subtitle1' className='mini-title'>Phone</Typography>
						<Typography variant='body1' className='mini-text'>01708 702 216</Typography>

					</Stack>
				</Grid>
			</Grid>

		</Styles>
	)
}

const Styles = styled.div`

    padding: ${({theme}) => theme.spacing(8, 0)};


    .map-container {
        height: 500px;
	    ${({theme}) => theme.breakpoints.down('md')}{
		    height: 450px;
	    }
    }

    .wrapper {
        max-width: 800px;
        text-align: center;
        margin: auto;
    }

    .title {
        padding: ${({theme}) => theme.spacing(2)};
    }
	
	.map-section{
		padding: ${({theme}) => theme.spacing(8, 0)};
		max-width: 1800px;
		margin: auto;
		${({theme}) => theme.breakpoints.down('md')}{
        	max-width: 100vw;
		}


        .map{
            position: relative;
			overflow: hidden;
			padding: 0;
			max-height: 600px;
		}
		
		img{
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}
	
	.details{
		max-width: 460px;
		${({theme}) => theme.breakpoints.down('sm')}{
			
			max-width: 80vw;
		}
	}
	
	.mini-text{
		font-size: 20px;
	}

`;

export default AreaAvailability;