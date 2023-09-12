import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import baseURL from '../api/axiosDefault'


export const register = createAsyncThunk(
		"auth/register",
		async (data, thunkAPI) => {
		const {
			first_name,
			last_name,
			email,
			password,	
		} = data;
		console.log("register done");
		try {
			const response = await axios.post('/profiles/register/', {
				first_name,
				last_name,
				email,
				password,
			},);
			
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


export const getUser = createAsyncThunk('', async (_, thunkAPI) => {
	try {
		const response = await axios.get("user");
		const { dispatch } = thunkAPI;
		dispatch(getSelection);
		return response.data;
	} 	catch (error) {
		const { dispatch } = thunkAPI;
		dispatch(refreshToken());
		return thunkAPI.rejectWithValue(error.response.data.error);
  }
});
		

export const login = createAsyncThunk('auth/profiles/login', async (data, thunkAPI) => {
		const { email, password } = data;
	try {
		const response = await axios.post(`${baseURL}/api/profiles/login/`, { email, password });
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
	  const response = await axios.post("logout/", { withCredentials: true });
	  return response.data;
	} catch (error) {
	  return thunkAPI.rejectWithValue(error.response.data.error);
	}
  });

  const initialState = {
	isAuthenticated: false,
	user: null,
	registered: false,
	loading: null,
	redirect: null,
};



  export const checkAuth = createAsyncThunk(
	"auth/checkAuth",
	async (_, thunkAPI) => {
	  try {
		const response = await axios.get("verify-token/", {
			withCredentials: true,
		});
		const { dispatch } = thunkAPI;
		dispatch(getUser());
		console.clear();
		return response.data;
	  } catch (error) {
		console.clear();
		return thunkAPI.rejectWithValue(error.response.data.error);
	  }
	}
  );

  export const refreshToken = createAsyncThunk(
	"auth/refreshToken",
	async (_, thunkAPI) => {
	  try {
		const response = await axios.post("refresh/", { withCredentials: true });
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
	name: 'user',
	initialState,
	reducers: {
		resetRegistered: state => {
			state.registered = false;
		},
	},


	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.loading = true;
			})
			.addCase(register.fulfilled, state => {
				state.loading = false;
				state.registered = true;
			})
			.addCase(register.rejected, state => {
				state.loading = false;
			})
			.addCase(login.pending, state => {
				state.loading = true;
			})
			.addCase(login.fulfilled, state => {
				state.loading = false;
				state.isAuthenticated = true;
			})
			.addCase(login.rejected, state => {
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
			});
	},
});

export const { resetRegistered, resetRedirect, resetError, resetMessage, setError, setMessage, setUser } = 
userSlice.actions;

export default userSlice.reducer;





