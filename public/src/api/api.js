export function fetchComments(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
}

export function saveComment(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
      .then(resolve)
      .catch(reject);
  });
}

