function customFetch(URL, method) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, URL, true);
        if (method === 'GET') {
            xhr.send()
        } else {
            let formData = new FormData();
            xhr.send(formData);
        }
        xhr.onload = () => resolve(console.log('successfully!'));
        xhr.onerror = () => reject(console.log(`Error ${xhr.status}`));
    });
}

module.exports = customFetch;