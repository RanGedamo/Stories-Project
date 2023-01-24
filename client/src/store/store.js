import {configureStore} from "@reduxjs/toolkit"
import eventsSlice from './eventSlice'
import groupsSlice from './groupSlice'
import usersSlice from './userSlice'
import storySlice from './storySlice'
export default configureStore({
    reducer:{
        user:usersSlice,
        event:eventsSlice,
        group:groupsSlice,
        story:storySlice
    }
})