import Todos from "./Todos.js";
import Assert from 'assert';

const assert = Assert.strict;

describe('Todos', () => {
    it('Cuando se instancíe la clase, no debería tener Todos', () => {
        const todos = new Todos();
        assert.strictEqual(todos.list().length, 0)
    })
    it('Si yo agrego un todo, debería agregarse correctamente y en false por default',()=>{
        const todos = new Todos();
        todos.add('Dar clase de testing')
        assert.strictEqual(todos.list().length,1);
        assert.deepStrictEqual(todos.list(),[{title:'Dar clase de testing',complete:false}])
    })
    it('Debería marcar la tarea como completada, si le doy en un complete',()=>{
        const todos = new Todos();
        todos.add('resolver tarea');
        todos.complete('resolver tarea');
        assert.deepStrictEqual(todos.list(),[
            {title:'resolver tarea',complete:true}
        ])
    })
})