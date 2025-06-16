import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {getAllNews} from '../apis/newsAPI';
import {hp} from '../helper/utils';
import {toggleBookmark} from '../store/newsSlice';
import {navigate} from '../helper/Navigation';
import config from '../helper/config';
import {NewsArticle} from '../types/newsTypes';
import NewsListItem from '../components/home/NewsListItem';

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dispatch = useDispatch<AppDispatch>();

  const {allNews} = useSelector((state: RootState) => state.newsArticles);

  const fetchAllNewsList = async () => {
    const request = {
      params: {
        // from: moment().format('YYYY-MM-DD'),
        from: '2025-05-16',
        sortBy: 'publishedAt',
        apiKey: config.NEW_API_KEY,
      },
      onSuccess: () => {
        setIsLoading(false);
      },
      onFail: () => {
        setIsLoading(false);
      },
    };
    dispatch(getAllNews(request));
  };

  // In screen API call for demo, not recommended
  useEffect(() => {
    fetchAllNewsList();
  }, []);

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyListContainer}>
        <Text>{isLoading ? 'Loading...' : 'No Data Found'}</Text>
      </View>
    );
  };

  const itemLikePress = (id: string) => {
    dispatch(toggleBookmark(id));
  };

  const onItemPress = (item: NewsArticle) => {
    navigate('ArticleDetailScreen', {article: item});
  };

  const renderItem = ({item, index}: {item: NewsArticle; index: number}) => {
    return (
      <NewsListItem
        article={item}
        onPress={onItemPress}
        onLikePress={itemLikePress}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <FlatList
        data={allNews}
        renderItem={renderItem}
        keyExtractor={item => item.id?.toString()}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={styles.containerStyle}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  containerStyle: {
    marginTop: hp(5),
  },
  emptyListContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(80),
  },
});
