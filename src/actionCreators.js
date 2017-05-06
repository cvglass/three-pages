import axios from 'axios';
import store from './store';

export const LOAD_ENTRY = 'LOAD_ENTRY';
export const LOAD_ENTRIES = 'LOAD_ENTRIES';
export const LOAD_SENTIMENT = 'LOAD_SENTIMENT';

export const loadEntry = entry => {
  return {
    type: 'LOAD_ENTRY',
    entry: entry
  }
}

export const getEntryById = (id) => {
  return dispatch => {
    axios.get(`/api/entries/${id}`)
      .then(res => res.data)
      .then(entry => dispatch(loadEntry(entry)))
      .catch(err => console.log(err))
  }
}

export const loadEntries = entries => {
  return {
    type: LOAD_ENTRIES,
    entries: entries
  }
}

export const getArchives = () => {
  return dispatch => {
    axios.get('api/entries')
      .then(res => res.data)
      .then(entries => dispatch(loadEntries(entries)))
      .catch(err => console.log(err))
  }
}

export const loadSentiment = (sentiment) => {
  return {
    type: LOAD_SENTIMENT,
    sentiment: sentiment
  }
}
