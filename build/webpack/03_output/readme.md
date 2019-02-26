## Description
So far we've manually included all our assets in our index.html file, but as your application grows and once you start using hashes in filenames and outputting multiple bundles, it will be difficult to keep managing your index.html file manually. However, a few plugins exist that will make this process much easier to manage.

### html-webpack-plugin
The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates, or use your own loader.

Before we do a build, you should know that the HtmlWebpackPlugin by default will generate its own index.html file, even though we already have one in the dist/ folder. This means that it will replace our index.html

#### html-webpack-template
https://github.com/jaketrent/html-webpack-template

### webpack-manifest-plugin
Webpack plugin for generating an asset manifest.

Plugin will generate a manifest.json file in your root output directory with a mapping of all source file names to their corresponding output file, for example: