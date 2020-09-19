// import { search } from './api'

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS'
export const FETCH_CHARACTERS_FULFILLED = 'FETCH_CHARACTERS_FULFILLED'

// Thunk'd action creator -> calls regular redux action when promise resolves
// export const fetchTweets = () => {
//   return (dispatch) => {
//     // 💰 ways to hit an API endpoint - (fetch api, axios, jquery.ajax)
//     fetch('http://tweet-stream.glitch.me/api/tweets')
//       .then((response) => response.json())
//       .then((response) => {
//         // console.log('made it here')
//         // console.log(response, dispatch)
//         dispatch(addTweets(response.tweets));
//       });
//   };
// };

export const fetchCharacters = (searchTerm) => {
  return {
    type: FETCH_CHARACTERS,
    payload: { searchTerm },
  }
}

export const fetchCharactersFulfilled = (payload) => ({
  type: FETCH_CHARACTERS_FULFILLED,
  payload,
})
