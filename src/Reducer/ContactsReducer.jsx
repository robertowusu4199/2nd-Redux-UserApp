var initialState = {
    contacts :[]
}

const ContactsReducer = (state = initialState, action)=>{
     switch(action.type){
        case "ADD_CONTACT":
            console.log (action.payload)
            return { ...state, contacts: [...state.contacts, action.payload] }

        default:
            return state;
     }
}

export default ContactsReducer;