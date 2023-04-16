import React, {useState} from "react";
import {BrowserRouter, Route, Link, useNavigate} from "react-router-dom";
import {Box, Drawer, IconButton, List, ListItem, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {Close, Menu} from "@mui/icons-material";


function Navbar() {

	const navigate = useNavigate();
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const listItems = ['home', 'about', 'services', 'blog', 'contact-us'];

	return (
		<Styles>
			<nav className='nav-wrapper'>
				<Box className='logo-box' onClick={() => navigate('/')}>
					<img src='/assets/img/rgsLogoNew.png' alt='RGS Roofing logo'/>
				</Box>
				<div className='flex-navs'>
					<div className='upper-nav'>
							<span className='nav-email'><a
								href='mailto:rgsroofingservices@gmail.com'>rgsroofingservices@gmail.com</a></span>
						<span className='nav-phone'><a href='tel:01708 702 216'>01708 702 216</a></span>
					</div>
					<div className='lower-nav'>
						<ul className='nav-links'>
							<li><a className='nav-link' href='/'>Home</a></li>
							<li><a className='nav-link' href='/about'>About Us</a></li>
							<li><a className='nav-link' href='/services'>Services</a></li>
							<li><a className='nav-link' href='/blog'>Blog</a></li>
							<li><a className='nav-link' href='/contact-us'>Contact</a></li>
						</ul>
					</div>

				</div>
				<div className='mobile-nav'>
					<IconButton className='menu' onClick={() => setSidebarOpen(true)}>
						<Menu className='menu-icon'/>
					</IconButton>
				</div>

				<Drawer
					disablePortal={true}
					className='drawer'
					anchor={'right'}
					open={sidebarOpen}
					onClose={() => setSidebarOpen(false)}

				>
					<IconButton className='close' onClick={() => setSidebarOpen(false)}>
						<Close></Close>
					</IconButton>
					<List className='drawer-list'>
						{listItems.map((item, index) =>
							<ListItem key={index} onClick={() => setSidebarOpen(false)}>
								<Link to={`/${item === 'home' ? '' : item}`}><Typography variant='h3'
								                                                         className='link'>{item.replace('-', ' ')}</Typography></Link>
							</ListItem>
						)}
					</List>
				</Drawer>
			</nav>
		</Styles>
	);
}

const Styles = styled.div`

    .mobile-nav {
        display: none;

        ${({theme}) => theme.breakpoints.down('md')} {
            display: grid;
            place-items: center;
        }
    }

    .close {
        position: absolute;
	    right: ${({theme}) => theme.spacing(1)};
        padding: ${({theme}) => theme.spacing(3)};
	    z-index: 10;
        * {
            width: 32px;
            height: 32px;
        }
    }

    .menu-icon {
        width: 32px;
        height: 32px;
        padding-right: ${({theme}) => theme.spacing(1)};
    }

    .drawer {

        position: relative;
        ${({theme}) => theme.breakpoints.up('md')} {
            display: none;
        }

        &-list {
            min-width: 200px;
            padding: ${({theme}) => theme.spacing(4)};

            * {
                padding: ${({theme}) => theme.spacing(0.75, 0)};
            }

            .link {
                font-size: 18px;
            }
        }
    }
`;

export default Navbar;