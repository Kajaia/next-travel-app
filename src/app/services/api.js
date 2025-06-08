export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const token = process.env.NEXT_PUBLIC_API_TOKEN;

export const headers = {
  Authorization: `Bearer ${token}`,
};
