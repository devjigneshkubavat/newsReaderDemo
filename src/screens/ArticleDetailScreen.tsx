import React from 'react';
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';

import {AppStackParamList} from '../interface/Navigation.interface';
import {fontSize, hp, wp} from '../helper/utils';
import {SVGConst} from '../helper/svgConstansts';
import {useNavigation} from '@react-navigation/native';

type ArticleDetailScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'ArticleDetailScreen'
>;

const ArticleDetailScreen: React.FC<ArticleDetailScreenProps> = ({route}) => {
  const article = route.params?.article;
  const navigation = useNavigation();

  const onLinkPress = () => {
    if (article?.url) {
      Linking.openURL(article?.url);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp(5)}}>
        <Pressable style={styles.header} onPress={() => navigation.goBack()}>
          <SVGConst.Back height={hp(3)} width={hp(3)} />
          <Text style={styles.backTitle}>Back to Home</Text>
        </Pressable>
        {article?.urlToImage && (
          <Image
            source={{uri: article?.urlToImage}}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        <View style={styles.headerRow}>
          <Text style={styles.title}>{article?.title ?? ''}</Text>
          <SVGConst.BookmarkFilled height={hp(3)} width={hp(3)} />
        </View>

        <View style={styles.authorContainer}>
          <Text style={styles.authorTag}>Author</Text>
          <Text style={styles.authorName}>{article?.author ?? ''}</Text>
        </View>
        <View style={styles.categoryTag}>
          <Text style={styles.categoryText}>
            {article?.publishedAt
              ? moment(article?.publishedAt).format('DD MMM, YYYY')
              : '-'}
          </Text>
        </View>

        {/* Description */}
        <Text style={styles.descTitle}>Description</Text>
        <Text style={styles.descText}>{article?.description ?? '-'}</Text>

        <Text style={styles.descTitle}>URL</Text>
        <Pressable onPress={onLinkPress}>
          <Text style={styles.urlText}>{article?.url}</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default ArticleDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
    marginTop: hp(2),
  },
  backTitle: {
    fontSize: fontSize(16),
    fontWeight: '600',
    color: '#364153',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: hp(2),
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    lineHeight: 30,
  },
  categoryText: {
    color: '#6B7280',
    fontWeight: '500',
  },
  descTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: hp(3),
  },
  descText: {
    color: '#374151',
    fontSize: 14,
    lineHeight: 20,
    marginTop: hp(1),
  },
  urlText: {
    color: '#0000FF',
    fontSize: 14,
    lineHeight: 20,
    marginTop: hp(1),
  },
  image: {
    width: '100%',
    height: hp(50),
  },
  authorTag: {
    fontSize: 16,
    fontWeight: '400',
  },
  categoryTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f3f6',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginTop: 4,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 6,
    flex: 1,
  },
  authorContainer: {
    flexDirection: 'row',
    gap: wp(2),
    alignItems: 'center',
  },
});
