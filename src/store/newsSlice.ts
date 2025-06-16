import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {generateNewsId} from '../helper/globalfunctions';
import {NewsArticle} from '../types/newsTypes';

export interface newsState {
  allNews: NewsArticle[];
  bookmarkNews: NewsArticle[];
}

const initialState: newsState = {
  allNews: [],
  bookmarkNews: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {
    setAllNews: (state, action) => {
      const bookmarkedIds = new Set(state.bookmarkNews.map(item => item.id));
      const dataWithID = action.payload.map((item: any) => {
        const id = generateNewsId(item);
        return {
          ...item,
          id,
          isLiked: bookmarkedIds.has(id),
        };
      });
      state.allNews = dataWithID;
    },
    toggleBookmark(state, action: PayloadAction<string>) {
      const articleId = action.payload;

      // Update isLiked in bookmarkNews
      const news = state.allNews.find(p => p.id === articleId);

      if (news) {
        news.isLiked = !news.isLiked;
      }

      // Update bookmarkNews list
      const likedIndex = state.bookmarkNews.findIndex(
        (p: any) => p.id === articleId,
      );

      if (likedIndex !== -1) {
        state.bookmarkNews.splice(likedIndex, 1); // remove from liked
      } else if (news) {
        state.bookmarkNews.push(news); // add to liked
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAllNews, toggleBookmark} = newsSlice.actions;

export default newsSlice.reducer;
