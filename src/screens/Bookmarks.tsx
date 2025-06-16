import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import Header from '../components/common/Header';
import {toggleBookmark} from '../store/newsSlice';
import {hp, wp} from '../helper/utils';
import {SVGConst} from '../helper/svgConstansts';
import NewsListItem from '../components/home/NewsListItem';
import {NewsArticle} from '../types/newsTypes';

type BookmarksProps = {};

const Bookmarks: React.FC<BookmarksProps> = ({}) => {
  const {bookmarkNews} = useSelector((state: RootState) => state.newsArticles);

  const dispatch = useDispatch<AppDispatch>();

  const RenderEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.iconWrapper}>
          <SVGConst.Bookmark height={hp(7)} width={hp(7)} />
        </View>

        <Text style={styles.title}>No Bookmarks Yet</Text>
        <Text style={styles.subtitle}>
          Start exploring News and add them to your Bookmarks!
        </Text>
      </View>
    );
  };

  const itemLikePress = (id: string) => {
    dispatch(toggleBookmark(id));
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <NewsListItem
        article={item}
        onPress={() => {}}
        onLikePress={itemLikePress}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      {bookmarkNews?.length > 0 ? (
        <FlatList
          data={bookmarkNews}
          renderItem={renderItem}
          bounces={false}
          keyExtractor={(item: NewsArticle) => item.id}
          contentContainerStyle={styles.containerStyle}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <RenderEmptyComponent />
      )}
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    marginTop: hp(12),
    paddingBottom: hp(16),
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#364153',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 22,
    color: '#677489',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 32,
    marginHorizontal: wp(5),
  },
  iconWrapper: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 100,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 24,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
