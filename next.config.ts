import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// output: "export",
	images: {
		remotePatterns: [
			{
				hostname: "i.scdn.co",
			},
		],
		qualities: [75, 100],
	},
	turbopack: {
		rules: {
			"*.svg": {
				loaders: [
					{
						loader: "@svgr/webpack",
						options: {
							icon: true,
						},
					},
				],
				as: "*.js",
			},
		},
	},
	reactCompiler: true,
};

export default nextConfig;
