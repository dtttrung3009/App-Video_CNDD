const url = 'http://5db9b400eddc81001495f0df.mockapi.io/api/videos';

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
