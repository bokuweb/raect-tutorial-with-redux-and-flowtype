/* @flow */

import type { Comment } from '../types';

export function fetchComments(url: string): Promise<Array<Comment>> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
}

export function saveComment(url: string, comment: Comment): Promise<Comment> {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
}

