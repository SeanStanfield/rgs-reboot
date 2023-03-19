import React from "react";
import styled from "@emotion/styled";
import {Container} from "@mui/material";

const Footer = () => {

	return(
		<Styles>
			<footer className='footer'>
				<Container className='footer-content'>
					<span className='copyright'>&copy; RGS Roofing Services 2023</span>
					<ul className='footer-content-links'>
						<li className='footer-content-links-link'><a
							href='https://www.facebook.com/rgsroofingservices'>Facebook</a></li>
						<li id='footerTel' className='footer-content-links-link'><a href='tel:01708 702 216'>01708 702 216</a>
						</li>
						<li className='footer-content-links-link'><a
							href='mailto:rgsroofingservices@gmail.com'>rgsroofingservices@gmail.com</a></li>
					</ul>
				</Container>
			</footer>
		</Styles>
	)}

const Styles = styled.div`
	
	background-color: #233B5F;
	color: white;
	
	.footer-content{
		padding: ${({theme}) => theme.spacing(6, 4)};
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		
		&-links{
			display: flex;
			list-style: none;
			gap: ${({theme}) => theme.spacing(4)};



            ${({theme}) => theme.breakpoints.down('md')}{
				flex-direction: column;
			}
			
			&-link{
					color: white;
				*{
					color: white;
				}
			}
		}
	}
	
`;

export default Footer;