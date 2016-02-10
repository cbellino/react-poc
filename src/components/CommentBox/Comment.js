import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Comment.scss';
import marked from 'marked';

class Comment extends Component {

  rawMarkup () {
    let rawMarkup = marked(this.props.children.toString(), { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <div dangerouslySetInnerHTML={this.rawMarkup()} />
        <hr />
      </div>
    );
  }

}

export default withStyles(Comment, s);
