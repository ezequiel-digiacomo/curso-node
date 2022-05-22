const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

console.log(argv);

//const [, , argumento3] = process.argv;
//const [, base = '5'] = argumento3.split('=');

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.magenta, 'creado'.magenta))
    .catch(err => console.log(err));
