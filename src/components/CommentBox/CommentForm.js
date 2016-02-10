import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CommentForm.scss';

class CommentForm extends Component {

  handleAuthorChange (e) {
    // this.setState({ author: e.target.value });
  }

  handleTextChange (e) {
    // this.setState({ text: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    const author = this.props.comment.author.trim();
    const text = this.props.comment.text.trim();
    if (!text || !author) {
      return;
    }

    this.props.onCommentSubmit(this.props.comment);
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.props.comment.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.props.comment.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }

}

export default withStyles(CommentForm, s);
