const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        description: 'Se ingresa la base de la tabla de multiplicar',
        demandOption: true
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        description: 'Se ingresa hasta donde se quiere la tabla',
        default: 10
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        description: 'Muestra la tabla completa',
        default: false
    })
    .check((argv, options) =>{
        if( isNaN(argv.b)){
            throw 'La base debe ser un number';
        }
        return true;
    })
    .argv;

module.exports = argv;