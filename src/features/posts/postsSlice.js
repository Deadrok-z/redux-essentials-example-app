import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'citation', content: 'Победить не берусь, перехитрить попробую.', date: '1812-07-07T13:53:39.410Z', user:"2" },
  { id: '2', title: 'citation', content: 'Не ищите злой умысел там, где все можно объяснить глупостью.', date: '1812-07-07T13:53:39.410Z', user:"0" }
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