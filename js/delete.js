// DELETE	/posts/1

async function deleteData(url) {
  const response = await fetch(url, {
    method: 'DELETE',
  });

  if (!response.ok) throw Error(response.status);

  return true;
}

deleteData('https://jsonplaceholder.typicode.com/posts/1')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
