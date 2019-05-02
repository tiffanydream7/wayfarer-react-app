import React, { Component } from "react";
import Post from "./Post";


    class PostContainer extends Component {
        render(){
            let posts;
            // let keyNum = 0;
            if(this.props.info.length){
                posts = this.props.info.map((post, key) => {
                    // keyNum++
                    return (
                        <section key={key}>
                            <div className="post-malone">
                                <Post
                                    post={post}
                                    // key={keyNum}
                                />
                            </div>
                        </section>
                    )
                })
            }
            return(
                <div>
                    <h3>Posts by User</h3>
                    {posts}
                </div>
            )
        }
    }
    


    export default PostContainer;
    