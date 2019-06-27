import { get } from '@/utils/request';
import { API_HOME_CITY, API_HOME_search } from '@/constants/api';

export async function queryHomeCityData(payload = {}) {
  return get(API_HOME_CITY, payload);
}
export async function queryHomeSearch(payload = {}) {
  return get(API_HOME_search, payload);
}

