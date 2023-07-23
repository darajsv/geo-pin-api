import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const detailLocation = async (placeId) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.GOOGLE_API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return {
      statusCode: 200,
      body: JSON.stringify(data, null, 2),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }, null, 2),
    };
  }
};
