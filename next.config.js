const IS_DEV_MODE = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
		dirs: ['pages', 'src'],
	},
	publicRuntimeConfig: {
		IS_DEV_MODE: IS_DEV_MODE,
	},
	webpack: config => {
		config.module.rules.push(
			{
				test: /\.glsl$/,
				loader: 'webpack-glsl-loader',
			},
			{
				test: /zcv\.wasm$/,
				type: 'javascript/auto',
				loader: 'file-loader',
			},
		);

		return config;
	},
};

module.exports = (phase, { defaultConfig }) => {
	const plugins = [];

	return plugins.reduce((acc, plugin) => plugin(acc), {
		...defaultConfig,
		...nextConfig,
		...{
			transpilePackages: ['@zappar/zappar-threejs'],
		},
	});
};
