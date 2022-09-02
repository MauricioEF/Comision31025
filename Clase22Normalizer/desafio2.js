import holding from './holding.json' assert {type:'json'}
import {normalize,denormalize,schema} from 'normalizr';


const empleado = new schema.Entity('empleados');
const company = new schema.Entity('empresas',{
    gerente:empleado,
    encargado:empleado,
    empleados:[empleado]
})
const holdingSchema =  new schema.Entity('holdings',{
    empresas:[company]
})

const normalizedData = normalize(holding,holdingSchema)

// console.log(JSON.stringify(normalizedData,null,'\t'))

const denormalizedData = denormalize(normalizedData.result,holdingSchema,normalizedData.entities)

// console.log(JSON.stringify(denormalizedData,null,'\t'))