<template>
    <div class="header">
        <div class="container">
            <ul id="nav" class="left text-left">
                <li><a href="http://www.divcss5.com/"><i class="fa fa-home fa-fw" style="font-size: 14px"></i></a></li>
                <li><a href="http://www.divcss5.com/html/">美东</a></li>
                <li><a href="http://www.divcss5.com/wenji/">热门</a></li>
                <li><a href="http://www.divcss5.com/rumen/">美西</a></li>
                <li><a href="http://www.divcss5.com/css-tool/">中部</a></li>
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

