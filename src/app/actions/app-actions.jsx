import AppConstants from '../constants/app-constants.jsx'
import {dispatcher,register} from '../dispatchers/app-dispatcher.jsx'

export default {
    addItem(item){
        dispatcher({actionType:AppConstants.ADD_ITEM,item})
    },
    removeItem(item){
        dispatcher({actionType:AppConstants.REMOVE_ITEM,item})
    },
    increaseItem(item){
        dispatcher({actionType:AppConstants.INCREASE_ITEM,item})
    },
    decreaseItem(item){
        dispatcher({actionType:AppConstants.DECREASE_ITEM,item})
    }
}