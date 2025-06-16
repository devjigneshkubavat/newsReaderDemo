import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-toast-message';
import axios, {AxiosRequestConfig} from 'axios';
import config from './config';

export const makeAPIRequest = ({
  url,
  data,
  method,
  params,
}: AxiosRequestConfig) =>
  new Promise(async (resolve, reject) => {
    const options = {
      url: url,
      data: data,
      method: method,
      params: params,
      baseURL: config.BASE_URL,
    };
    console.log('options ::: ', options);

    axios(options)
      .then((response: any) => {
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error: any) => {
        reject(error);
      });
  });

export const showToast = (text: string) => {
  Toast.show({type: 'tomatoToast', text1: text});
};

export const setAsyncStorage = async (key: string, value: any) => {
  const tokenRes = await AsyncStorage.setItem(key, JSON.stringify(value));
  return tokenRes;
};

export const getAsyncStorage = async (key: string) => {
  const tokenRes = await AsyncStorage.getItem(key);
  return JSON.parse(tokenRes!);
};

export const removeAsyncStorage = async (key: string, callback: () => void) => {
  await AsyncStorage.removeItem(key, callback);
};

export const generateNewsId = (article: {
  url: string;
  publishedAt?: string;
  title?: string;
}): string => {
  const base = article.url || `${article.title}-${article.publishedAt}`;
  let hash = 0;

  for (let i = 0; i < base.length; i++) {
    const char = base.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }

  return `news_${Math.abs(hash)}`; // ensure ID is positive
};
