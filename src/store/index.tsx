import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import counterReducer from '@/store/slices/counter-slice'

const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action)

  // Save the state to localStorage after every action
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))

  return result
}

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: [...getDefaultMiddleware(), localStorageMiddleware],
  preloadedState: loadStateFromLocalStorage() // Load initial state from localStorage
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
