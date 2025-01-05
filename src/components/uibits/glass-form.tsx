import "./glass-form.css";
import Image from "next/image";
import PurpleAbstractThingImage from "@/assets/codebits/glass_form_bg.webp";

export default function GlassForm() {
	return (
		<section id="contact">
			<Image src={PurpleAbstractThingImage} alt="Purple abstract thing" />
			<div className="contact-overlay" />
			<div className="inner-form">
				<div>
					<h1 className="text-xl lg:text-2xl font-semibold">
						Let&apos;s work together
					</h1>
					<p>Contact me regarding any concerns or inquiries.</p>
				</div>
				<div className="input-con">
					<input
						autoComplete="off"
						name="name"
						id="name"
						placeholder="Eg. John Doe"
						type="text"
					/>
					<label htmlFor="name">Name</label>
				</div>
				<div className="input-con">
					<input
						autoComplete="off"
						name="email"
						id="email"
						placeholder="Eg. xyz@abc.com"
						type="text"
					/>
					<label htmlFor="email">Email</label>
				</div>
				<div className="input-con">
					<textarea
						name="msg"
						id="msg"
						rows={3}
						placeholder="Type your message here..."
					/>
					<label htmlFor="msg">Message</label>
				</div>
				<button type="button">Submit</button>
			</div>
		</section>
	);
}
