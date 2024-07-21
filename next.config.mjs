/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|swf|ogv|avi|mkv|flv|wmv|mpg|mpeg|mov)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: `/_next/static/videos/`,
                    outputPath: `${isServer ? '../' : ''}static/videos/`,
                    name: '[name].[hash].[ext]',
                    esModule: false,
                },
            },
        });

        return config;
    },
};

export default nextConfig;