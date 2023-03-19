import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {CmsProvider} from './contexts/CmsContext'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import PageNotFound from "./components/PageNotFound";
import {Services} from "./pages/Services";
import IndividualService from "./components/IndividualService";
import IndividualBlog from "./components/IndidivualBlog";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<CmsProvider>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Layout/>}>
							<Route index element={<Home/>}/>
							<Route path='about' element={<About/>}/>
							<Route path='services' element={<Services/>}/>
							<Route path='services/:slug' element={<IndividualService/>}/>
							<Route path='blog' element={<Blog id={1} title={'An introduction to liquid applications'} content={'Liquid Applications in Roofing: Understanding the Benefits\n' +
								'\n' +
								'As a property owner, you want your roof to be durable, long-lasting, and efficient. One of the most effective ways to achieve this goal is by using liquid applications in roofing. But what are liquid applications in roofing, and why are they beneficial? In this article, we\'ll explore the basics of liquid applications and their advantages.\n' +
								'\n' +
								'What are Liquid Applications in Roofing?\n' +
								'\n' +
								'Liquid applications in roofing refer to the use of liquid materials that are applied to the surface of a roof. These liquids can be used to repair, protect, or enhance the roof\'s performance. Liquid applications are becoming increasingly popular due to their ease of use and effectiveness.\n' +
								'\n' +
								'Benefits of Liquid Applications in Roofing'} coverImage={'https://picsum.photos/800/300'}/>}/>
							<Route path='blog/:slug' element={<IndividualBlog/>}/>
							<Route path='contact-us' element={<Contact/>}/>
							<Route path='*' element={<PageNotFound/>}/>
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</CmsProvider>
	</React.StrictMode>
);
