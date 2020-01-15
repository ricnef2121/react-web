//Encuentre todos los nodos en el árbol de renderizado que coincidan con el selector proporcionado
/**
 * Recibe un componente y el nombre del selectora buscar
 * retorna el nodo o elemento que corresponde con el selector
 * 
 * @param {*} component Componente sobre el que se realiza un busqueda
 * @param {*} attr Selector a buscar sobre el componenete
 */
export const findByAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}
