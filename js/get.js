// GET	   /posts
// GET	   /posts/1
// GET  	 /posts/1/comments
// GET	   /comments?postId=1
// POST	  /posts
// PUT	   /posts/1
// PATCH	 /posts/1
// DELETE	/posts/1

async function getData(url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) throw Error(response.status);

  return response.json();
}

getData('https://jsonplaceholder.typicode.com/posts')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
