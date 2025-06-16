import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SVGConst} from '../../helper/svgConstansts';
import {NewsArticle} from '../../types/newsTypes';
import {hp, wp} from '../../helper/utils';
import moment from 'moment';

type NewsListItemProps = {
  article: NewsArticle;
  onPress: (id: NewsArticle) => void;
  onLikePress: (id: string) => void;
};

const NewsListItem: React.FC<NewsListItemProps> = ({
  article,
  onPress,
  onLikePress,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleLikeToggle = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsLiked(!isLiked);
    });
    onLikePress(article.id);
  };

  // console.log('article.isLiked ::: ', article.isLiked);

  return (
    <Pressable style={styles.card} onPress={() => onPress(article)}>
      <Image
        source={{uri: article?.urlToImage ?? ''}}
        style={styles.image}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.heartIcon} onPress={handleLikeToggle}>
        <Animated.View style={{transform: [{scale: scaleAnim}]}}>
          {article.isLiked ? (
            <SVGConst.BookmarkFilled height={20} width={20} />
          ) : (
            <SVGConst.Bookmark height={20} width={20} />
          )}
        </Animated.View>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {article?.title}
        </Text>

        <Text style={styles.description} numberOfLines={3}>
          {article?.description}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(1),
          }}>
          <View
            style={{flexDirection: 'row', gap: wp(2), alignItems: 'center'}}>
            <Text style={styles.authorTag}>Author</Text>
            <Text style={styles.authorName} numberOfLines={1}>
              {article?.author}
            </Text>
          </View>
          <View style={styles.categoryTag}>
            <Text style={styles.categoryText}>
              {moment(article?.publishedAt).format('DD MMM, YYYY')}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default NewsListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  heartIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 999,
    padding: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  content: {
    padding: 12,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 6,
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
  categoryText: {
    color: '#8892a0',
    fontWeight: '500',
  },
  description: {
    fontWeight: '500',
    fontSize: 14,
    color: '#333',
    marginTop: hp(1),
  },
});
