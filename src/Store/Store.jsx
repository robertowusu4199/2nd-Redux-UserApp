import {createStore} from 'redux'
import ContactsReducer from '../Reducer/ContactsReducer'

export const Store = createStore(ContactsReducer)