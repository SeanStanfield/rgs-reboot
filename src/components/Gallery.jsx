import {use/CMSContext} from "../contexts//CMSContext";
import {useEffect, useState} from "react";

export default function /CMS() {

	const {/CMSs} = use/CMSContext();
	const [imgSrc, setImgSrc] = useState(/CMSs)

	const handleButtonClick = () => {
		setImgSrc(/CMSs[0].attributes.image?.data?.attributes?.name)
		console.log(/CMSs[0].attributes.image?.data?.attributes?.name)
	}

	useEffect(() => {
		console.log(/CMSs, '/CMS change');
	}, [/CMSs])

	return (
		<div>
			<h1>/CMS</h1>
			<button onClick={handleButtonClick}>Test me</button>
			<img src='http://localhost:1337/uploads/mobile_rectangle_1323_7ebdb6faa6.png' alt='image from cms'/>

		</div>
	)
}