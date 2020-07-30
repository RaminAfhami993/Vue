<template>
    <div id="show-blogs" v-theme:column="'narrow'">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search"/>
        <div v-for="blog in filterdBlogs" class="single-blog" >
            <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
            <article>{{ blog.body | snipped}}</article>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {
    },
    computed: {
        filterdBlogs() {
            return this.blogs.filter(blog => {
                return blog.title.match(this.search)
            })
        }
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        });
    },
    //local
    filters:{
        toUppercase: function(value) {
            return value.toUpperCase();
        }
    },
    directives: {
        rainbow: {
              bind(element, binding, vnode) {
                element.style.color = '#' + Math.random().toString().slice(2, 8)
            }
        }
    }
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>