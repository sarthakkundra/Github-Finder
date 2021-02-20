import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    GET_LABELS,
    SET_TEXT,
    SET_HASMORE
    } from '../types';

    export default (state, action) => {
        switch(action.type) {
            case SET_LOADING:
                return{
                    ...state,
                    loading: true
                };

            case SET_HASMORE:
                return{
                    ...state,
                    hasMore: false
                };

            case CLEAR_USERS: 
                return{
                    ...state,
                    users: [],
                    loading: false,
                    hasMore: true
                };

            case SEARCH_USERS:
                return {
                    ...state,
                    users: action.payload,
                    loading: false,
                    hasMore: true
                };

            case GET_USER:
                return{
                    ...state,
                    user: action.payload,
                    loading: false,
                    hasMore: true
                };

            case GET_REPOS:
                return{
                    ...state,
                    repos: action.payload,
                    loading: false,
                    hasMore: true
                };

            case GET_LABELS:
                return{
                    ...state,
                    repos: [],
                    labels: action.payload
                };

            case SET_TEXT:
                return{
                    ...state, 
                    text: action.payload
                };
            default:
                return state
        }
    }