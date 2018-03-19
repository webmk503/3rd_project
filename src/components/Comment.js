import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../styles/global.css';
import {updateAuthor, updateComments} from "../utils/localStorage";
import DateOptions from '../HOC/DateOptions';

class Comment extends Component {

  state = {
    commentsAuthor: '',
    comment: '',
  };

  componentWillMount() {
    const {loggedUser,} = this.props;
    this.setState({
      commentsAuthor: loggedUser.nickname,
    })
  }

  handleEditText = (field) => (e) => {
    this.setState({
      [field]: e.target.value,
    });
  };

  handleCreatingCommentAndAuthor = () => {
    const {authors, options, book, createComment, createAuthor, id} = this.props;
    const author = Object.values(authors).find(() => (name !== this.state.commentsAuthor));
    if (this.state.commentsAuthor.length > 0 &&
      author.name !== this.state.commentsAuthor) {
      const newAuthor = {
        id: Math.random(),
        name: this.state.commentsAuthor,
      };
      const newComment = {
        id: Math.random(),
        comment: this.state.comment,
        bookId: id,
        authorId: newAuthor.id
      };

      createAuthor(newAuthor);
      createComment(newComment);
      updateComments(newComment);
      updateAuthor(newAuthor);
    } else {
      const newComment = {
        id: Math.random(),
        comment: this.state.comment,
        bookId: id,
        authorId: author.id,
      };
      createComment(newComment);
      updateComments(newComment);
    }
    this.setState({
      comment: '',
    });
  };

  render() {
    return (
      <div>
        <Form.TextArea
          autoHeight
          placeholder='Enter a commentary'
          value={this.state.comment}
          onChange={this.handleEditText('comment')}
        />
        <Button
          content='Add Reply'
          onClick={this.handleCreatingCommentAndAuthor}
          labelPosition='left'
          icon='edit'
          primary
        />
      </div>
    );
  }
}

Comment.propTypes = {
  createComment: PropTypes.func,
};

export default DateOptions(Comment);
