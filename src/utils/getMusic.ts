import { Music } from '../types/Music';

export default async function getMusic(token: string): Promise<Music | null> {
  if (token !== '') {
    const authParams = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const music = await fetch(
      'https://api.spotify.com/v1/search?query=starboy&limit=1&type=track&market=NL',
      authParams,
    ).then((response) => response.json().then((data) => data.tracks));
    return music || null;
  }
  return null;
}
