## packages
webpack = (create module bundler)
webpack-cli = (the tool used to run webpack on the command line)

## Base bundle
- npx webpack = (without config file) use default settings. Load files from src and create main.js (bundle file) in dist directory.
not support for IMPORT and EXPORT
- npx webpack --config webpack.config.js
!!! webpack.config.js is default name. You can run only "npx webpack" !!!
    - entry = source
    - output = where webpack can create final bundle