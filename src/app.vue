<style scoped>
    @import 'styles/common.css';
    @import 'http://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css';
</style>
<template>
    <div id="app">
        <v-head></v-head>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>
<script>
import vHead from './views/public/head.vue'
import vFooter from './views/public/footer.vue'
export default {
    name: 'app',
    components: {
        vHead,
        vFooter,
    },
    data () {
        return {}
    },
    mounted () {

    },
    beforeDestroy () {

    },
    methods: {

    }

}
</script>
