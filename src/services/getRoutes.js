import { getDirections } from '../utils/getGoogleDirections.js';

export const getRoutes = async (body) => {
  const { origin, destination, waypoints, mode } = body;
  try {
    const response = await getDirections(origin, destination, waypoints, mode);
    return {
      statusCode: 200,
      body: JSON.stringify(response, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error }, null, 2),
    };
  }
};
