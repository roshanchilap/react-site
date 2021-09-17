import React from "react";
import axios from "axios";
import "./css/Posts.css";
import { Table, TableRow, TableCell } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Post from "./Post";

const AppUrl = "https://jsonplaceholder.typicode.com/posts";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      id: "",
      userId: "",
      title: "",
      body: "",
      isPostShow: false,
    };
  }

  // Create post
  createPost = async () => {
    try {
      const { userId, title, body } = this.state;
      const { data: post } = await axios.post(`${AppUrl}`, {
        userId,
        title,
        body,
      });
      console.log(post);
      let posts = [...this.state.posts];
      posts.push(post);
      this.setState({ posts, userId: "", body: "", title: "" });
    } catch (error) {
      console.error("Error while creating data", error);
    }
  };

  // GET POSTS
  getPosts = async () => {
    try {
      const { data: posts } = await axios.get(`${AppUrl}`);
      this.setState({ posts });
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };

  // DELETE POSTS
  deletePost = async (postId) => {
    try {
      await axios.delete(`${AppUrl}/${postId}`);
      let posts = [...this.state.posts];
      posts = posts.filter((post) => post.id !== postId);
      this.setState({ posts });
    } catch (error) {
      console.error("Error while deleting data", error);
    }
  };

  updatePost = async () => {
    try {
      const { id, userId, title, body } = this.state;
      const { data: post } = await axios.put(`${AppUrl}/${id}`, {
        userId,
        title,
        body,
      });
      console.log(post);
      let posts = [...this.state.posts];
      const index = posts.findIndex((post) => post.id === id);
      posts[index] = post;
      this.setState({ posts, userId: "", body: "", title: "" });
    } catch (error) {
      console.error("Error while creating data", error);
    }
  };

  selectPostToUpdate = (post) => {
    console.log(post);
    this.setState({ ...post });
    this.setState({ isPostShow: !this.state.isPostShow });
  };

  componentDidMount() {
    this.getPosts();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.updatePost();
    } else {
      this.createPost();
    }
  };

  isPostShow = () => {
    if (!this.state.isPostShow) {
      <Post />;
    } else {
      <></>;
    }
  };

  render() {
    return (
      <>
        <Button
          className="show"
          variant="contained"
          color="primary"
          onClick={() => this.setState({ isPostShow: !this.state.isPostShow })}
        >
          Add Post
        </Button>
        {this.state.isPostShow ? (
          <Post
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            selectPostToUpdate={this.selectPostToUpdate}
            userId={this.state.userId}
            id={this.state.id}
            body={this.state.body}
            title={this.state.title}
          />
        ) : (
          <></>
        )}
        {/* <Table>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Userid</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
          {this.state.posts.map((post) => {
            return (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.userId}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => this.selectPostToUpdate(post)}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => this.deletePost(post.id)}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </Table> */}

        {this.state.posts.map((post) => {
          return (
            <div className="main">
              <div class="row">
                <div class="col s12 m6">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">{post.title}</span>
                      <p>{post.body}</p>
                    </div>
                    <div class="card-action">
                      <Button
                        variant="contained"
                        onClick={() => this.selectPostToUpdate(post)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => this.deletePost(post.id)}
                      >
                        DELETE
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Posts;
