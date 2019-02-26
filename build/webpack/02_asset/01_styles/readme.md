## npm
style-loader = Adds CSS to the DOM by injecting a <style> tag
css-loader = The css-loader interprets @import and url() like import/require() and will resolve them.

## Usage
It's recommended to combine style-loader with the css-loader

## module
These options determine how the different types of modules within a project will be treated.

### Rules
An array of Rules which are matched to requests when modules are created. These rules can modify how the module is created. They can apply loaders to the module, or modify the parser.
{
    test: //
    use ['style-loader', 'css-loader']
}

webpack uses a regular expression to determine which files it should look for and serve to a specific loader. 
In this case any file that ends with .css will be served to the style-loader and the css-loader.