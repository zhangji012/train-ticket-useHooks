import { get } from '@/utils/request';
import { API_HOME_CITY } from '@/constants/api';

export async function queryHomeCityData(payload = {}) {
  return get(API_HOME_CITY, payload);
}
