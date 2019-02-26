## Development mode
Sets process.env.NODE_ENV on DefinePlugin to value development . Enables NamedChunksPlugin and NamedModulesPlugin .

## Source maps
In order to make it easier to track down errors and warnings, JavaScript offers source maps, which maps your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.

## automatic deploy
There are a couple of different options available in webpack that help you automatically compile your code whenever it changes:

webpack's Watch Mode
webpack-dev-server
webpack-dev-middleware
In most cases, you probably would want to use webpack-dev-server, but let's explore all of the above options.

### 1) --watch
> npm run watch (you must refresh your browser)

### 2) webpack-dev-server 
> npm run start (devServer in webpack.config.js) (auto browser refresh)
> open in http://localhost:8080/

webpack-dev-server doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path. If your page expects to find the bundle files in different path, you can change this with the publicPath option in the dev server's configuration.
