import {configureStore} from "@reduxjs/toolkit"
import eventsSlice from './eventSlice'
import groupsSlice from './groupSlice'
import usersSlice from './userSlice'

export default configureStore({
    reducer:{
        user:usersSlice,
        event:eventsSlice,
        group:groupsSlice,
    }
})