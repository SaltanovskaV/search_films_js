const getData = (url) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const json = JSON.parse(xhr.response);
        resolve(json.Search);
      } else reject(xhr.statusText);
    };

    xhr.onerror = (err) => reject(err);
  });

const search = 'Iron Man';

getData(`http://www.omdbapi.com/?apikey=547ee8ad&s=${search}`)
  .then((movies) => movies.forEach((movie) => console.log(movie)))
  .catch((err) => console.log(err));
