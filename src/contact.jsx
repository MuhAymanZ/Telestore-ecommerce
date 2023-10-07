import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faWhatsapp,
	faGoogle,
} from "@fortawesome/free-brands-svg-icons";
function Contact() {
	return (
		<>
			<section id="contact" class="contact">
				<h2>Want help? Call us here!</h2>
				<div className="social-media">
					<div className="whatsapp">
						<a href="https://www.facebook.com/MrAymon666/" target="blank">
							<FontAwesomeIcon icon={faWhatsapp} />
						</a>
						<p>01102465132</p>
					</div>
					<div className="facebook">
						<a href="https://www.facebook.com/MrAymon666/" target="blank">
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a href="https://www.facebook.com/MrAymon666/" target="blank">
							<p>Click Here</p>
						</a>
					</div>
					<div className="google">
						<a href="https://www.facebook.com/MrAymon666/" target="blank">
							<FontAwesomeIcon icon={faGoogle} />
						</a>
						<p>muh.aymanzayed@gmail.com</p>
					</div>
				</div>
			</section>
		</>
	);
}
export default Contact;
