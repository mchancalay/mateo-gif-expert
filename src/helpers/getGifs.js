const limit = 20
const apikey = 'eTMEwNfiBN9pld1U0np5MhHGZd5mCHGv';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&limit=${limit}&q=${category}`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }
    ))
    return gifs
}