<template>
        <div class="container">
           <div class="test"></div>
        </div>
</template>

<script>
    export default {
        name: 'vFooter',
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
    @import '../../styles/footer.css';
</style>

