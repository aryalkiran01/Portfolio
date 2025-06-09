// utils/getAccessToken.ts
import axios from "axios";

let cachedAccessToken: string | null = null;
let tokenExpiryTime: number | null = null;

export const getAccessToken = async (): Promise<string> => {
  const now = Date.now();

  if (cachedAccessToken && tokenExpiryTime && now < tokenExpiryTime) {
    return cachedAccessToken;
  }

  const response = await axios.post(
    "https://accounts.zoho.com/oauth/v2/token",
    null,
    {
      params: {
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: "refresh_token",
      },
    }
  );

  cachedAccessToken = response.data.access_token;
  tokenExpiryTime = now + 50 * 60 * 1000; // 50 minutes

  if (!cachedAccessToken) {
    throw new Error("Failed to obtain access token");
  }
  return cachedAccessToken;
};
