import axios from 'axios';
import utils from '../utils';
import constants from '../constants';

export default async function getSpecificTop(topic) {
  const { LINK_TO_TOPIC } = constants;
  const { processThread } = utils;
  try {
    const { data } = await axios.get(`${LINK_TO_TOPIC}${topic}`);
    return processThread(data);
  } catch (error) {
    console.log(error);
  }
}
