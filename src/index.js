// import 'dotenv/config';
import axios from 'axios';
import processPosts from './utils/processPosts';

async function getSatNight() {
  try {
    const { data } = await axios.get(
      'https://bloard.com/bloards/gbs/topics/saturday-night-bloard',
    );

    const butt = processPosts(data);
    console.log(butt);
  } catch (error) {
    console.log(error);
  }
}

getSatNight();
