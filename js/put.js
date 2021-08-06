// PUT	   /posts/1
// PATCH	 /posts/1
// DELETE	/posts/1

async function putData(url, data) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw Error(response.status);

  return response.json();
}

putData('https://jsonplaceholder.typicode.com/posts/1', {
  title: 'Title text',
  descr: 'Description text',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem cupiditate odio autem, aperiam vel sint aspernatur reiciendis a similique, repudiandae doloribus sequi illum ab impedit. Similique fugit autem commodi!',
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
