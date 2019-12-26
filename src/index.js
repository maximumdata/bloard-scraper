// import 'dotenv/config';
import getSpecificTopic from './operations/getSpecificTopic';

async function run() {
  const satNight = await getSpecificTopic('saturday-night-bloard');
  console.log(satNight);
}

run();
