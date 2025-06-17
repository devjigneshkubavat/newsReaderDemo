import {NewsArticle} from '../types/newsTypes';

export type BottomTabParamList = {
  HomeScreen: undefined;
  Bookmarks: undefined;
};

export type AppStackParamList = {
  BottomTab: BottomTabParamList;
  HomeScreen: undefined;
  Bookmarks: undefined;
  ArticleDetailScreen: {article: NewsArticle};
  DummyScreen: undefined;
};
