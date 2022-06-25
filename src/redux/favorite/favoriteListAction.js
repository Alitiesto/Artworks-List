const addItem = artwork =>{
    return {
        type: 'ADD_ITEM',
        payload: artwork
    }
}

const removeItem = artwork =>{
    return {
        type: 'REMOVE_ITEM',
        payload: artwork
    }
}

export {addItem , removeItem}