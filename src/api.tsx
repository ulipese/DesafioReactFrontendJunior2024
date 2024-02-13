import axios from 'axios';
import { GetItemsResponse } from './types/ItemsType';

async function getItems() {
  try {
    const { data } = await axios.get<GetItemsResponse>(
      'https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024/todos',
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export default getItems;
