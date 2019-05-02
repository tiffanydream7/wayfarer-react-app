import React, { Component } from "react";


    class Post extends Component {
    render() {
        return (
        <div>
            <h4>{this.props.post.title}</h4>
            <p>{this.props.post.content}</p>
        </div>
        );
    }
    }


    export default Post;
    