export default async function getToken(): Promise<string> {
  const authParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${
      import.meta.env.VITE_CLIENT_ID
    }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`,
  };
  const token = await fetch(import.meta.env.VITE_TOKEN_URL, authParams).then((response) =>
    response.json().then((data) => data.access_token),
  );
  return token || '';
}
