/* eslint-disable no-unused-vars */
import {createSlice} from "@reduxjs/toolkit"

//localStorage.clear();

const initialState = {
    data: []
}

const collection = JSON.parse(localStorage.getItem('data'));

if(collection){
    initialState.data = collection;
}

// eslint-disable-next-line react-refresh/only-export-components
const AppSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        addData: (state, action) => {
            state.data = [...state.data, action.payload];
            localStorage.setItem('data', JSON.stringify(state.data));
        },
        removeData: (state, action) => {
            state.data = state.data.filter((data) => data.id != action.payload);
            localStorage.setItem('data', JSON.stringify(state.data));
        },
        updateData: (state, action) => {
            const { id, name, title, description, createdAt } = action.payload;
            let _data = state.data.find((data) => data.id == id)
            if(_data){
                _data.name = name,
                _data.title = title;
                _data.description = description;
                _data.createdAt = createdAt;
                localStorage.setItem('data', JSON.stringify(state.data));
            }
        },
        getData: (state, action) => {
            const _data = state.data.find((data) => data.id == action.payload);
            return _data;
        }
    }
});

export const {addData, removeData, updateData, getData} = AppSlice.actions;
export default AppSlice.reducer;