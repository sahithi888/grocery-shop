export default (state = {cartItems:[]}, action) => {
    switch(action.type){
        case 'ADD':
            const isPresent = state.cartItems.filter(cartItem => cartItem.p_id === action.payload.p_id);
            if(isPresent.length === 0){
                console.log([...state.cartItems, action.payload]);
                return {cartItems:[...state.cartItems, action.payload]}
            }
            else{
                //Not included cumulative addition functionality
                return {cartItems:[...state.cartItems.filter(cartItem => cartItem.p_id !== action.payload.p_id), action.payload]};
            }
            break;
        case 'REMOVE':
            return {cartItems:state.cartItems.filter(cartItem => cartItem.p_id !== action.payload.p_id)};
            break;
        case 'UPDATE':
            for(i=0; i<state.cartItems.length; i++){
                if(state.cartItems[i].p_id === action.payload.p_id){
                    state.cartItems[i].quantity = action.payload.quantity;
                    break;
                }
            }
            return {cartItems:state.cartItems.filter(cartItem => true)};
            break;
    }
    return state;
}