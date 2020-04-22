
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export function addItem(item) {
    return {
        type: ADD_ITEM,
        item
    };
}

export function deleteItem(index) {
    return {
        type: DELETE_ITEM,
        index
    }
}