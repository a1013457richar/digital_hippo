/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "digitalhippo-production-4c38.up.railway.app",
			},
		],
	},
	async headers() {
		return [
		  {
			source: "/:path*",
			headers: createSecureHeaders({
			  contentSecurityPolicy: {
				directives: {
				  defaultSrc: "'self'",
				  scriptSrc: "'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com",
				  connectSrc: "'self' https://api.stripe.com",
				  imgSrc: "'self' data: https://*.stripe.com https://digitalhippo-production-4c38.up.railway.app",
				  frameSrc: "'self' https://js.stripe.com",
				  fontSrc: "'self' data:",
				  styleSrc: "'self' 'unsafe-inline'",
				  baseUri: "self",
				  formAction: "self",
				  
				},
			  },
			  referrerPolicy: "no-referrer",
			}),
		  },
		];
	  },
};

module.exports = nextConfig;
