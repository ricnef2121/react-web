import React from 'react';
import { shallow } from 'enzyme'; //Importamos shallow de enzyme que nos permite probar un componente de forma unitaria
import {findByAtrr}  from '../../utils' //Esta es una utileria que hemos creado para apuntar a un nodo es especifico de nuestro componente
import Header from './index'; //Corresponde al elemento a probar

/**
 * Creamos una constante para no tener que declarar una y otra ves el componente por cada suite o prueba unitaria (test)
 * @param {*} props corresponde a las propiedades que se le pasen al componente
 * @returns retorna el componente sobre el que se va trabajar
 */
const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

/**
 * Declaramos un describe que sera nuestro espacio de trabajo para una cierta cantidad de pruebas
 * , sirve para separar entrornos de pruebas unos de otros
 * 
 * @reference https://jestjs.io/docs/es-ES/api#describename-fn
 */
describe('Header Component', () => {

    /**
     * Desclaramos una variable a la que se le asignara el valor de nuestro componente 
     */
    let component;
    /**
     * El metodo beforeach nos permite inicializar variables, asi como tambien cierta logica de programacion
     * que se desee antes de cada prueba , los elemento declarados dentro del beforeEach son accesible 
     * desde cada prueba unitaria (test)
     * @reference https://jestjs.io/docs/es-ES/api#describename-fn
     * 
     * En este caso asignamos el componente a nuestra variable component
     */
    beforeEach(() => {
        component = setUp();
    });


    /**
     * test es como su nombre lo indica la prueba que ejecutaremos tambiene se puede utilizar la palabra it en lugar de test
     * recibe como primer parametro un string el cual por lo regular es la descripcion de lo que ara la prueba, mientras que
     * el segundo parametro es una callback, dentro se ella se ejecuta la logica con la que validamos nuestra prueba.
     * @reference https://jestjs.io/docs/es-ES/api#pruebanombre-fn-tiempo
     */
    test('should render without errors', () => {        
        const wrapper =  findByAtrr(component,'headerComponent');

        /**
         * expect se utiliza cada vez que desea testear un valor
         * @reference https://jestjs.io/docs/es-ES/expect#expectvalue
         * 
         * toBe se utiliza para comparar valores primitivos es similiar a un '==='
         * @reference https://jestjs.io/docs/es-ES/expect#tobevalue
         */
        expect(wrapper.length).toBe(1);

    });
    test('should render a logo ', () => {
        const logo = findByAtrr(component,'logoImg');
        expect(logo.length).toBe(1);
    });
});