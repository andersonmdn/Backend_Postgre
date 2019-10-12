import app from './app';
import '@babel/polyfill';

const port = 4000;

async function main() {
    await app.listen(port);
    console.log(`Servidor iniciado na porta ${ port }`);
    console.log(`http://localhost:${ port }`);
}

main();