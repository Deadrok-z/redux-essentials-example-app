import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  { id: '1', title: 'citation', content: 'Случай правит миром.', date: sub(new Date(1810, 5, 5), { minutes: 10}).toISOString(), user:"0" },
  { id: '2', title: 'citation', content: 'Победить не берусь, перехитрить попробую.', date: sub(new Date(1812, 8, 16), { minutes: 10}).toISOString(), user:"2" }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId
          }
        }
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  }
})
export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer