import data from '../../../system/items.json';

export const itemsList = () => {
  return fetch(data).then((responce) => {return responce.json})
}