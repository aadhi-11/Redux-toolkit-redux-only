const redux = require('redux');
const createStore = redux.createStore;
const produce = require('immer').produce

const initialState = {
    name:'Adithya',
    address:{
        street:'123 Main st',
        city:'Boston',
        state:'MA'
    }
}

const STREET_UPDATED='STREET_UPDATED'

const updateStreet = street => {
    return {
        type:STREET_UPDATED,
        payload:street,
    }
}

const streetreducer = (state=initialState,action) =>{
    switch(action.type){
        case STREET_UPDATED:
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }
            // }
            return produce(state,(draft)=>{
                draft.address.street=action.payload
            })
        default:
            return state;

    }
}

const store = createStore(streetreducer);

const unsubscribe = store.subscribe(
    ()=>console.log("Updated State is ",store.getState())
)

store.dispatch(updateStreet('231 Indian street'));
unsubscribe()