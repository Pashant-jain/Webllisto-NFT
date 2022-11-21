import {UPDATE_EXPLORE_PAGE} from '../../types'

const initialState = {
    explorePageNo: 1,
}
export default function galleryReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_EXPLORE_PAGE:
            return { ...state, explorePageNo: action.payload };
      
        default:
            return state
    }
}