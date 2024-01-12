
import React from "react";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io5";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
	return (
		<>
			<div className=" h-60 bg-gray-700 text-white flex justify-between  pt-10 px-20">
				<div>
					<div>
						<img
							src="https://forum.ibrodev.com/assets/evangadi-logo-footer-f73bca57.png"
							alt=""
						/>
					</div>
					<br />
					<div className="flex justify-between"> 
						 <a href=""><FacebookRoundedIcon/></a>
						<a href=""><InstagramIcon/></a>
						<a href=""><YouTubeIcon /></a> 
					</div>
{/* <div className="row m-0 p-0 cir_br ">
            <div className="col-2"><a href='#'><InstagramIcon/></a></div>
            <div className="col-2"><a href='#'><FacebookRoundedIcon/></a></div>
            <div className="col-2"><a href='#'><YouTubeIcon/></a></div>
          </div> */}
				</div>
				<div>
					<h2 className="text-2xl">Useful Link</h2><br />
					<a href="">How it works</a>
					<br />
					<a href="">Terms of Service</a>
					<br />
					<a href="">Privacy policy</a>
					<br />
				</div>
				<div>
					<h2 className="text-2xl">Contact Info</h2><br />
					<p>Serkadis Mehiret</p>
					<p>serkadismehiret0411@gmail.com</p>
					<p>301-787-8509</p>
				</div>
			</div>
		</>
	);
}

export default Footer;
