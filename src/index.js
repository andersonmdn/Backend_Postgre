import app from './app';

const port = 4000;

async function main() {
    await app.listen(port);
    console.log(`Servidor iniciado na porta ${ port }`);
    console.log(`http://localhost:${ port }`);
}

main();