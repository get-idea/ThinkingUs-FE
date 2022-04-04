import { createReducer } from '@reduxjs/toolkit';
import { updateCurrentPageBW, getNickname, updateAdminState, clearChatHistory, changeIsSubmitState, getSubjectBW, postIdea, getMessagesBW, getUserListBW, getRoomIdBW, ideaCardCreate, getTimerBW, timerData, updateStartCurrentPageBW,getUserCount,requsetComment} from './actions';
import {BrainWritingState} from './types'



const initialState: BrainWritingState = {
  StartCurrentPage: 0,
  currentPage: 0,
  nickname: null,
  BWisAdmin: false,
  BWisSubmit: false,
  BWsubject: undefined,
  senderId: null,
  idea: null,
  userId: null,
  BWtimer: null,
  chatHistory: [],
  bwRoomId: null,
  BWUserCount: {
    totalUser: 0,
    currentUser: 0,
  },
  BWUserList: [],
  commentData: []
};

//createReducer로 reducer 생성.
export const brainWritingReducer = createReducer(initialState, builder => {
  builder
    .addCase(updateStartCurrentPageBW, (state, action) => {
      state.StartCurrentPage = action.payload;
    })
    .addCase(updateCurrentPageBW, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(getNickname.fulfilled, (state, action) => {
      const { nickname, userId } = action.payload;
      state.nickname = nickname;
      state.senderId = userId;
    })
    .addCase(changeIsSubmitState, (state, action) => {
      console.log(action.payload)
      state.BWisSubmit = action.payload;
    })
    .addCase(updateAdminState, (state, action) => {
      state.BWisAdmin = action.payload;
    })
    .addCase(getMessagesBW, (state, action) => {
      if (state.chatHistory) {
        state.chatHistory = [action.payload, ...state.chatHistory];
      }
    })
    .addCase(getUserListBW, (state, action) => {
      state.BWUserList = action.payload; 
    })
    .addCase(clearChatHistory, state => {
      state.chatHistory = [];
    })
    .addCase(getSubjectBW, (state, action) => {
      console.log(action.payload)
      state.BWsubject = action.payload;
    })
    .addCase(getRoomIdBW, (state, action) => {
      console.log(action.payload)
      state.bwRoomId = action.payload;
    })
    .addCase(getTimerBW, (state, action) => {
      console.log(action.payload)
      state.BWtimer = action.payload;
    })
    .addCase(getUserCount, (state, action) => {
      state.BWUserCount = action.payload;
    })
    .addCase(requsetComment.fulfilled, (state, action) => {
      console.log(action.payload)
      const {bwIdeaListItemList} =action.payload.data
      state.commentData =bwIdeaListItemList
    })
    .addCase(postIdea.fulfilled, (state, action) => {
      console.log(action.payload)
      const { userId, idea } = action.payload;
      state.idea = idea;
      state.userId = userId;
    })
    .addCase(timerData.fulfilled, (state, action) => {
      console.log(action.payload)
      const {timers} =action.payload.data
      state.BWtimer =timers
    })
});
