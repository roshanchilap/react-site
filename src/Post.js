import React from "react";
import "./css/Post.css";

function Post(props) {
  return (
    <div>
      <form class="form" onSubmit={props.handleSubmit}>
        <div class="title">Welcome</div>
        <div class="subtitle">Let's create your new post!</div>
        <div class="input-container ic1">
          <input
            id="userid"
            class="input"
            type="text"
            placeholder=" "
            name="userId"
            value={props.userId}
            onChange={props.handleChange}
            required
          />
          <div class="cut"></div>
          <label for="userid" class="placeholder">
            User id:
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="body"
            class="input"
            type="text"
            placeholder=" "
            name="title"
            value={props.title}
            onChange={props.handleChange}
            required
          />
          <div class="cut"></div>
          <label for="title" class="placeholder">
            Title:
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="body"
            class="input"
            type="text"
            placeholder=" "
            name="body"
            value={props.body}
            onChange={props.handleChange}
            required
          />
          <div class="cut cut-short"></div>
          <label for="body" class="placeholder">
            Body:
          </label>
        </div>
        <button type="text" class="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Post;
