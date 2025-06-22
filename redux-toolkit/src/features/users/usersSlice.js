import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers', async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await res.json();
        return result

    }
);

const userSlice = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        data: [],
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default userSlice.reducer;