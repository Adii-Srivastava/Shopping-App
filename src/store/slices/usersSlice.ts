import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, getUserDetails } from '../../services/api';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ skip, limit }: { skip: number; limit: number }) => {
    const response = await getUsers(skip, limit);
    return response;
  }
);

export const fetchUserDetails = createAsyncThunk(
  'users/fetchUserDetails',
  async (id:number) => {
    const response = await getUserDetails(id);
    return response;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    userDetails:{},
    status: 'idle',
    error: null,
    total: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.users;
        state.total = action.payload.total;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        
        state.status = "succeeded";
        state.userDetails = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;