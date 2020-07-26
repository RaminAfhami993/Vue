<template>
  <div id="add-blog">
    <h1>Add new blog</h1>
    <form v-if="!submitted">
        <label>Blog title</label>
        <input type="text" required v-model.lazy="blog.title">

        <label>Blog content</label>
        <textarea v-model.lazy="blog.content"></textarea>
        
        <div id="checkBoxes">
            <label>movie</label>
            <input value="movie" type="checkbox" v-model="blog.categories" />
            <label>music</label>
            <input value="music" type="checkbox" v-model="blog.categories" />
            <label>story</label>
            <input value="story" type="checkbox" v-model="blog.categories" />
            <select v-model="blog.author">
                <option v-for="author in authors"> {{ author }}</option>
            </select>
        </div>

        <button @click.prevent="post">Add Blog</button>
    </form>

    <div v-if="submitted">Blog submitted</div>

    <div id="preview">
        <h3>Preview Blog:</h3>
        <p>Blog title: {{ blog.title }}</p>
        <p>Blog content:  {{ blog.content }}</p>
        <h3>items</h3>
        <ul>
            <li v-for="item in blog.categories">{{ item }}</li>
        </ul>
        <h3>author</h3>
        <p>{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        blog: {
            title: "",
            content: "",
            categories: [],
            author: ""
        },
        authors: ["Ramin", "Mahone"],
        submitted: false
    }
  },
  methods: {
      post() {
          this.$http.post('https://jsonplaceholder.typicode.com/posts', {
              title: this.blog.title,
              body: this.blog.content,
              userId: 1
          }).then(response => {console.log(response); this.submitted = true}).catch(response => console.log(response))
      }   
  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkBoxes label {
    display: inline-block;
    margin-left: 20px;
    margin-right: 0px
}
</style>
