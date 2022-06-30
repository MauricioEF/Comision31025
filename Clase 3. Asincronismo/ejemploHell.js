const copiarArchivo = (ruta,callback)=>{
    buscarArchivo(ruta,(error,archivo)=>{
        if(error){
            callback(error);
        }else{
            leerArchivo(ruta,'utf-8',(error,text)=>{
                if(error){
                    callback(error);
                }else{
                    EscribirArchivo(nuevaRuta,text,(error,resultado)=>{
                        if(error){
                            callback(error)
                        }else{
                            callback(null,resultado);
                        }
                    })
                }
            })
        }
    })
}








const buscarArchivo = (ruta,callback)=>{
    //buscar archivo en la ruta.

    //OPERACION


    //El archivo no existió
    callback('El archivo no existe');

    //El archivo sí existió
    //me posiciono sobre el archivo
    callback(null,archivito)
}