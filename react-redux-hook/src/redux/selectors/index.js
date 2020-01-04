import {get} from 'lodash';

export const isSearchLoading = state => get(state,'search.isLoading');
export const isResults = state => get(state,'search.searchResult');