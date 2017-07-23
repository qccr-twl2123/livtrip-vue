<template>
    <div class="header">
        <div class="container">
            <ul id="nav" class="text-left">
                <li><router-link to="/"><Icon type="ios-home" size="15"></Icon></router-link></li>
                <li><router-link to="/list">美东</router-link></li>
                <li><a href="http://www.divcss5.com/wenji/">热门</a></li>
                <li><a href="http://www.divcss5.com/rumen/">美西</a></li>
                <li><a href="http://www.divcss5.com/css-tool/">中部</a></li>
                <li class="right"><a href="http://www.divcss5.com/css-tool/">
                    <Icon type="gear-a" size="15"></Icon></a></li>
                <li class="right"><a href="http://www.divcss5.com/css-tool/">
                    <Icon type="email" size="15"></Icon></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vHead',
        data() {
            return {
                searchText: '',
                isActive: false,
                placeholder: '搜索音乐，歌手，歌词，用户',
                showOption: false,
                showTheme: false,
                user: {}
            }
        },
        mounted() {

        },
        computed: {
            theme() {
                return this.$store.state.theme
            }
        },
        methods: {

        }
    }
</script>
<style scoped>
    @import '../../styles/head.css';
</style>

