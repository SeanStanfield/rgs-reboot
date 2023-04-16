import React from "react";
import styled from "@emotion/styled";
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import useFetch from "../contexts/CmsContext";
import Faqs from "./Faqs";
let md = require('markdown-it')();
let result = md.render('# markdown-it rulezz!');

const IndividualBlog = () => {

	const location = useLocation();

	const subRoute = location?.pathname?.split('/').pop();
	const {
		loading,
		error,
		pageData
	} = useFetch(`https://rgs-heroku.herokuapp.com/api/blog-posts?filters[slug][$eq]=${subRoute}&populate=blogContent&populate=FAQs`);
	if (loading) return <p> Loading... </p>;
	if (error) return <p> Error :( </p>;

	const blog = pageData?.[0]?.attributes;
	const blogContent = md.render(blog?.content);

	console.log(blog, 'blog')

	return (
		<Styles>

			<Box className='blog-header'>
				<Typography variant='h2' component="h1" className='blog-header-title'>{blog?.title}</Typography>
				<Typography variant='subtitle1' className='blog-header-title'>{blog?.subtitle}</Typography>
			</Box>

			<Container className='blog' dangerouslySetInnerHTML={{__html: blogContent}}/>

			<Faqs faqs={blog?.FAQs ?? []} title={`Frequently asked questions`}/>

		</Styles>
	)
}

const Styles = styled.div`

    display: grid;
    place-items: center;
	
	.blog{
		
		padding-top: ${({theme}) => theme.spacing(8)};

        h1, h2, h3 {
            font-family: ${({theme}) => theme.typography.h3.fontFamily};
            font-size: ${({theme}) => theme.typography.h3.fontSize}
        }

        p {
            font-family: ${({theme}) => theme.typography.body1.fontFamily};
            font-size: ${({theme}) => theme.typography.body1.fontSize}
        }
		
		img{
			max-width: 100%;
			width: 100%;
			max-height: 400px;
			object-fit: cover;
		}
		
	}

    .grid {
        width: 100vw;
	    max-width: 100vw;
	    overflow: hidden;
	    padding-top: ${({theme}) => theme.spacing(12)};
	    
	    .content{
            padding-bottom: ${({theme}) => theme.spacing(4)};
	    }

        .text {
            background: white;
            color: black;
            display: grid;
            place-items: center;

            * {
                max-width: 850px;
            }

            .grid-title {
                color: ${({theme}) => theme.palette.primary.darker};
                padding-bottom: ${({theme}) => theme.spacing(2)};
            }

            .grid-review {
                font-style: italic;
            }
        }

        .image {
            display: grid;
            place-items: center;
	        
        }
    }


    .blog-header {
        background-image: url("/assets/img/cta-shaded.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        min-height: 40vh;
        padding-bottom: 0;
        margin-bottom: 0;
	    width: 100vw;
	    
	    display: flex;
        justify-content: center;
	    flex-direction: column;
        align-items: center;
	    gap: ${({theme}) => theme.spacing(4)};
	    
	    

        &-title {
            color: white;
	        text-align: center;
	        max-width: 800px;
	        
        }

        &-intro {
	        text-align: center;
            color: black;
            background-color: white;
            padding: ${({theme}) => theme.spacing(4)};
            position: absolute;
            bottom: 0;
	        margin: ${({theme}) => theme.spacing(0, 8)};
	        min-height: 80px;
	        display: grid;
	        place-items: center;

        }

    }


`;

export default IndividualBlog;