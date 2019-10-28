export const updateObjectArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[objPropName]=== itemId) {
            return {...u, ...newObjProps} //id same - return copy
        }
        return u; //id no same - return u
    })
}
