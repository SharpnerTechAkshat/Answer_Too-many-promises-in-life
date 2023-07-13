function createPost(post) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation
      setTimeout(() => {
        resolve(post);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime(time) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation
      setTimeout(() => {
        resolve(time);
      }, 1000);
    });
  }
  
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation
      setTimeout(() => {
        resolve(postId);
      }, 1000);
    });
  }
  
  function getAllPosts() {
    // Simulating retrieval of all posts
    return [
      { id: 1, content: "Post 1" },
      { id: 2, content: "Post 2" },
      { id: 3, content: "Post 3" },
    ];
  }
  
  // Usage
  function updateLastUserActivityTimeAndDeletePost() {
    const user = {
      id: 1,
      lastActivityTime: null,
    };
  
    const newPost = { id: 4, content: "New Post" };
  
    createPost(newPost)
      .then((post) => {
        console.log("New Post Created:", post);
  
        return updateLastUserActivityTime(new Date());
      })
      .then((activityTime) => {
        user.lastActivityTime = activityTime;
        console.log("Last User Activity Time:", user.lastActivityTime);
  
        const posts = getAllPosts();
        console.log("All Posts:", posts);
  
        const lastPostId = posts[posts.length - 1].id;
        return deletePost(lastPostId);
      })
      .then((deletedPostId) => {
        console.log("Deleted Post ID:", deletedPostId);
  
        const updatedPosts = getAllPosts();
        console.log("Updated Posts:", updatedPosts);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  updateLastUserActivityTimeAndDeletePost();