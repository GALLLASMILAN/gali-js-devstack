import InputStream from './input-stream';
import TokenStream from './object-token-stream';
/*const code = `sum = lambda(a, b) {
    a + b;
  };`;*/
const code = `
  name = "gali"'
  a = 2;
  b = 3;
  c = a + b;
`;  

const inputStream = new InputStream(code);

/*while(!inputStream.eof()) {
    console.log(inputStream.next());
}*/
const tokenStream = new TokenStream(inputStream);
try{
    while(!tokenStream.eof()) {
        console.log(tokenStream.next());
    }
} catch(error) {
    console.error(error.message);
    process.exit();
}