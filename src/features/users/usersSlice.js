import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Napulione I Buonaparte' },
  { id: '1', name: 'Alexander I Romanov' },
  { id: '2', name: 'Mikhail Kutuzov' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer