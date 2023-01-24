import {configureStore} from "@reduxjs/toolkit"
import eventsSlice from './eventSlice'
import groupsSlice from './groupSlice'
import usersSlice from './eventSlice'
import storySlice from './storySlice'
export default configureStore({
    reducer:{
        user:usersSlice,
        event:eventsSlice,
        group:groupsSlice,
        story:storySlice
    }
})