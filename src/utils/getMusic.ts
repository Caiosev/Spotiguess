import words from 'random-words';

import { Music } from '../types/Music';

const valdateTrack = (data: any) => {
  try {
    if (
      data.tracks.items[0].popularity < 70 ||
      data.tracks.total === 0 ||
      data.tracks.items.lemgth === 0
    ) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

export default async function getMusic(token: string): Promise<Music | null> {
  if (token !== '') {
    const authParams = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const query = words({ min: 1, max: 4 }).join('-');

    const music = await fetch(
      `https://api.spotify.com/v1/search?query=${query}&limit=1&type=track&market=NL`,
      authParams,
    ).then((response) =>
      response.json().then((data) => {
        if (valdateTrack(data)) {
          return data.tracks;
        } else {
          return getMusic(token);
        }
      }),
    );
    return music || null;
  }
  return null;
}
