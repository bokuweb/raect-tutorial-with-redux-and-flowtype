/* @flow */
import * as commentActions from '../actions/comment';
import type { CommentActionType } from '../actions/comment';
import type { Comment } from '../types';

export type CommentsState = {
  comments: Array<Comment>,
}

export default function comment(state: CommentsState = { comments: [] }, action: CommentActionType) {
  switch (action.type) {
    case commentActions.SUBMIT_COMMENT:
      return { comments: state.comments.concat([action.comment]) };
    case commentActions.RECIEVE_COMMENTS:
      return { comments: action.comments };
    default:
      return state;
  }
}
