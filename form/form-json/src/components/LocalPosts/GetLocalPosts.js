import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import posts from './posts.js';
import '/Users/yangjihu/Desktop/GP/form/form-json/src/App.js';

// get posts from online api
// it's return a json file
class GetLocalPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: posts
        };
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                {
                posts.map(post => (
                    <div key={post.id} align="start">
                        <div class="input-group my-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text">{post.fieldname}</span>
                            </div>
                            <input type={post.type} aria-label={post.fieldname} value={post.value1} class="form-control"></input>
                        
                        </div>
                    </div>
                ))
                }
            </div>
        );
    }
}

export default GetLocalPosts;
