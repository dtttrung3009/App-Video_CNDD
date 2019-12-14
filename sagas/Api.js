const url = 'http://5db9b400eddc81001495f0df.mockapi.io/api/videos';
// const url = 'http://164.132.226.137:9999/youtuber/feeds/get/all';

function* getVideoFromApi() {
    console.log('Ham get api da chay');
    const json = yield fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: '',
    }).then(response => response.json());
    const movies = yield json;
    return movies;
}

export const Api = {
    getVideoFromApi
};
