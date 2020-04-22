const initState = {
    items: [
        { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110 },
        { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80 }
    ],
    addedItems: [],
    total: 0
}

export const cartReducer = (state = initState, action) => {
    return state;
}


