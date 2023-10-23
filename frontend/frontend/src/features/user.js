import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
// import { getCookie } from '../utils/utils.js';

export const registerUser = createAsyncThunk(
		"auth/registerUser",
		async (data, thunkAPI) => {
		const {
			first_name,
			last_name,
			email,
			password,	
		} = data;
		try {
			const response = await axios.post(
				'/profiles/register/', {
				first_name,
				last_name,
				email,
				password,
			});	
			return response.data;
		}	catch (error) {
			let errorsData = error.response.data;
			let errors = [];
			for (let key in errorsData){
				errors.push(`${key}: ${errorsData[key]}`);
			} 
			return thunkAPI.rejectWithValue(errors);	
			}
		}
	);


export const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
	try {
		const response = await axios.get("/profiles/user/");
		const { dispatch } = thunkAPI;
		dispatch(getSelection);
		return response.data;
	} 	catch (error) {
		const { dispatch } = thunkAPI;
		dispatch(refreshToken());
		return thunkAPI.rejectWithValue(error.response.data.error);
  }
});
		

export const loginUser = createAsyncThunk('auth/loginUser', async (data, thunkAPI) => {
		const { email, password } = data;
	try {
		const response = await axios.post('/profiles/login/', { email, password });
		const { dispatch } = thunkAPI;
		dispatch(getUser());
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.error);
	}
}
);
		

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
	try {
	  const response = await axios.post("/logout/", { withCredentials: true });
	  return response.data;
	} catch (error) {
	  return thunkAPI.rejectWithValue(error.response.data.error);
	}
  });

export const checkAuth = createAsyncThunk(
    "auth/verify_token",
    async (_, thunkAPI) => {
        try {
            const response = await axios.post("/token/verify/", {}, { withCredentials: true });
            const { dispatch } = thunkAPI;
            dispatch(getUser());
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error);
        }
    }
);

  export const refreshToken = createAsyncThunk(
	"auth/refresh",
	async (_, thunkAPI) => {
	  try {
		const response = await axios.post("/token/refresh/", { withCredentials: true });
		const { dispatch } = thunkAPI;
		dispatch(checkAuth());
		return response.data;
	  } catch (error) {
		console.clear();
		return thunkAPI.rejectWithValue(error.response.data.error);
	  }
	}
  );

const userSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuthenticated: false,
		user: null,
		registerUser: false,
		loading: null,
		redirect: null,
	},
	reducers: {
		resetRedirect: (state) => {
		  state.redirect = false;
		},
		resetError: (state) => {
		  state.error = null;
		},
		resetMessage: (state) => {
		  state.message = null;
		},
		setError: (state, action) => {
		  state.error = action.payload;
		},
		setMessage: (state, action) => {
		  state.message = action.payload;
		},
		setUser: (state, action) => {
		  state.user = action.payload;
		},
	  },


	extraReducers: builder => {
		builder
			.addCase(registerUser.pending, state => {
				state.loading = true;
			})
			.addCase(registerUser.fulfilled, state => {
				state.loading = false;
				state.redirect = true;
				state.registerUser = true;
			})
			.addCase(registerUser.rejected, state => {
				state.loading = false;
			})
			.addCase(loginUser.pending, state => {
				state.loading = true;
			})
			.addCase(loginUser.fulfilled, state => {
				state.loading = false;
				state.isAuthenticated = true;
			})
			.addCase(loginUser.rejected, state => {
				state.loading = false;
			})
			.addCase(getUser.pending, state => {
				state.loading = true;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(getUser.rejected, state => {
				state.loading = false;
			})
			.addCase(checkAuth.pending, state => {
				state.loading = true;
			})
			.addCase(checkAuth.fulfilled, state => {
				state.loading = false;
				state.isAuthenticated = true;
			})
			.addCase(checkAuth.rejected, state => {
				state.loading = false;
			})
			.addCase(logout.pending, state => {
				state.loading = true;
			})
			.addCase(logout.fulfilled, state => {
				state.loading = false;
				state.isAuthenticated = false;
				state.user = null;
			})
			.addCase(logout.rejected, state => {
				state.loading = false;
			})
			.addCase(refreshToken.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(refreshToken.fulfilled, (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			})
			.addCase(refreshToken.rejected, (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
			});
	},
});

export const { resetRedirect, resetError, resetMessage, setError, setMessage, setUser } = 
userSlice.actions;

export default userSlice.reducer;





