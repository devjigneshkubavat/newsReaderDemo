import {apiConst, method} from '../helper/apiConst';
import {makeAPIRequest} from '../helper/globalfunctions';
import {setAllNews} from '../store/newsSlice';
import {AppDispatch} from '../store/store';

export const getAllNews = (request: any) => async (dispatch: AppDispatch) => {
  return makeAPIRequest({
    method: method.get,
    params: request?.params,
  })
    .then((response: any) => {
      dispatch(setAllNews(response?.data?.articles));
      if (request?.onSuccess) request?.onSuccess(response?.data?.articles);
    })
    .catch(err => {
      console.log('error of getnews ::: ', err);

      if (request?.onFail) request?.onFail(err);
    });
};
