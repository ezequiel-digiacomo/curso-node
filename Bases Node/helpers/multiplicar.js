const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    
    try {

        let salida = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base*index}\n`;
            
        }
         if(listar){
            console.log(colors.cyan('=================='));
            console.log('   Tabla del:', colors.red(base));
            console.log(colors.cyan('=================='));
            console.log(colors.italic.blue(salida));
         }   
            
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;   

    } catch (error) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}