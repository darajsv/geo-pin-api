import { Client } from '@googlemaps/google-maps-services-js';
import dotenv from 'dotenv';
dotenv.config();
const googleMapsClient = new Client({});

export const getDirections = async (origin, destination, waypoints, mode) => {
    try {
        const response = await googleMapsClient.directions({
            params: {
                origin: `${origin.lat},${origin.lng}`,
                destination: `${destination.lat},${destination.lng}`,
                waypoints: waypoints.map(
                    (waypoint) => `${waypoint.lat},${waypoint.lng}`
                ),
                optimizeWaypoints: true,
                mode: mode,
                key: process.env.GOOGLE_API_KEY, // Replace with your Google Maps API key
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error getting directions:', error);
        return null;
    }
};
