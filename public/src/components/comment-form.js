/* @flow */

import React, { Component, PropTypes } from 'react';
import type { Comment } from '../types';

type Props = {
  onCommentSubmit: Function,
}

export default class CommentForm extends Component {
  static propTypes = {
    onCommentSubmit: PropTypes.func.isRequired,
  };

  props: Props;
  author: HTMLInputElement;
  text: HTMLInputElement;

  handleSubmit(e: Event) {
    e.preventDefault();
    const author = this.author.value.trim();
    const text = this.text.value.trim();
    if (!text || !author) return;
    const comment: Comment = { author, text };
    this.props.onCommentSubmit(comment);
    this.author.value = '';
    this.text.value = '';
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name" ref={c => {this.author = c;}} />
        <input type="text" placeholder="Say something..." ref={c => {this.text = c;}} />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
