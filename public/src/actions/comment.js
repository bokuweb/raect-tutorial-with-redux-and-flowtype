/* @flow */

import * as api from '../api/api';
import type { Comment } from '../types';
import type { Dispatch } from 'redux';

export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';
export const RECIEVE_COMMENTS = 'RECIEVE_COMMENTS';

export type CommentActionType =
  { type: 'SUBMIT_COMMENT', comment: Comment } |
  { type: 'RECIEVE_COMMENTS', comments: Array<Comment> };


export function submitComment(comment: Comment): CommentActionType {
  return {
    type: SUBMIT_COMMENT,
    comment,
  };
}

export function recieveComments(comments: Array<Comment>): CommentActionType {
  return {
    type: RECIEVE_COMMENTS,
    comments,
  };
}

export function fetchComments() {
  return (dispatch: Dispatch) => {
    api.fetchComments('/api/comments')
      .then((comments) => {
        dispatch(recieveComments(comments));
      }).catch(error => {
        console.error(error);
      });
  };
}

export function saveComment(comment: Comment) {
  return (dispatch: Dispatch) => {
    dispatch(submitComment(comment));
    api.saveComment('/api/comments', comment)
      .then(() => {
        console.log('save comment');
      }).catch(error => {
        console.error(error);
      });
  };
}
