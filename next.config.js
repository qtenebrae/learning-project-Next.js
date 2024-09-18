/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['courses-top.ru', 'old-images.hb.ru-msk.vkcs.cloud'],
	},
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: {
								override: {
									removeViewBox: false,
								},
							},
						},
					],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};

module.exports = nextConfig;
