import React, {useEffect} from "react";
import styled from "@emotion/styled";
import useFetch from "../contexts/CmsContext";
import {Link, useLocation} from "react-router-dom";
import {Avatar, Card, CardContent, CardMedia, Container, IconButton, Stack, Typography} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";

const BlogList = () => {

	const location = useLocation();

	const subRoute = location?.pathname?.split('/').pop();
	const { loading, error, pageData } = useFetch(`http://localhost:1337/api/blog-posts?populate=*`);
	if (loading) return <p>Loading...</p>;
	if (error) {
		console.log(error)
		return <p>Error :( - {error.code}</p>
	}
	const blogPosts = pageData;

	return(
		<Styles>

			<Container className='container'>
			{blogPosts?.map((post, index) =>

				<Card className="card">
					<CardMedia
						className="card-media"
						component="img"
						src={'https://picsum.photos/200/200'}
					/>
					<CardContent className="card-content">
						<Typography variant="h3" className="full-width">
							{post?.attributes?.title}
						</Typography>
						<Typography variant="body1" className="full-width">
							{post?.attributes?.introduction}
						</Typography>

						<Stack className="card-content-publish">
							<Stack direction="row" alignItems="center" spacing={2}>
								<Stack>
									<Typography
										variant="subtitle1"
										color="text.secondary"
										component="p"
									>
										{post?.attributes?.author?.data?.attributes?.name}
									</Typography>
									{!!post?.attributes?.publishedAt && (
										<Typography
											variant="subtitle2"
											color="text.secondary"
											component="p"
										>
											<span>Published: &nbsp;</span>
											{post?.attributes?.publishedAt.split('T')[0].replaceAll('-', '/')}
										</Typography>
									)}
								</Stack>
							</Stack>
							<IconButton
								color="primary"
								component={Link}
								to={post?.attributes?.slug}
								aria-label={`Navigate to ${post?.attributes?.title}`}
							>
								<ChevronRight sx={{color: 'white'}}/>
							</IconButton>
						</Stack>
					</CardContent>
				</Card>
			)}
			</Container>


		</Styles>
	)

}

const Styles = styled.div`

    .container {
        margin-top: ${({theme}) => theme.spacing(4)};
    }

    .card {
        display: flex;
        max-height: 400px;
        margin: ${({theme}) => theme.spacing(8)};
        box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.12);

        ${({theme}) => theme.breakpoints.down('md')} {
            flex-direction: column;
            max-height: unset;
	        margin: ${({theme}) => theme.spacing(4, 2)};
        }

        .full-width {
            width: 100%;
        }

        &-media {
            max-width: 50%;
            min-width: 200px;
            object-position: top;

            ${({theme}) => theme.breakpoints.down('md')} {
                max-width: 100%;
                object-fit: cover;
                max-height: 300px;
            }
        }

        .chip-wrapper {
            flex-direction: row;

            ${({theme}) => theme.breakpoints.down('md')} {
                flex-direction: column;
            }
        }

        &-content {
            flex: 1;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            &-publish {
                flex-direction: row;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                align-self: flex-end;
            }
        }

        &-tag {
            margin: ${({theme}) => theme.spacing(4, 1)};
            padding: 12px;

            ${({theme}) => theme.breakpoints.down('md')} {
                margin: ${({theme}) => theme.spacing(1, 1)};

            }
        }

        .active {
            ${({theme}) => theme.breakpoints.down('md')} {
                font-size: 12px;
                padding: 8px 10px;
                margin: 16px 0;
            }
        }

        .inactive {
            ${({theme}) => theme.breakpoints.down('md')} {
                display: none;

            }
        }
    }

`;

export default BlogList;