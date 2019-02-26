##npm
- file-loader = resolves import/require() on a file into a url and emits the file into the output directory.
        - https://webpack.js.org/loaders/file-loader/
- url-loader = url-loader works like file-loader, but can return a DataURL if the file is smaller than a byte limit.       
- image-webpack-loader = Minify PNG, JPEG, GIF, SVG and WEBP images with imagemin

####bodus
- responsive-loader = A webpack loader for responsive images. Creates multiple images from one source image, and returns a srcset

## process
Now, when you import MyImage from './my-image.png', that image will be processed and added to your output directory and the MyImage variable will contain the final url of that image after processing. When using the css-loader, as shown above, a similar process will occur for url('./my-image.png') within your CSS. The loader will recognize this is a local file, and replace the './my-image.png' path with the final path to the image in your output directory. The html-loader handles <img src="./my-image.png" /> in the same manner.        


