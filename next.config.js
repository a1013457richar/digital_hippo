/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "https://digitalhippo-production-4c38.up.railway.app/",
			},
		],
	},
};

module.exports = nextConfig;
