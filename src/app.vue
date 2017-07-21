<style scoped>
    @import 'styles/common.css';
    @import 'http://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css';
</style>
<template>
    <div id="app">

        <v-head></v-head>
        <router-view></router-view>
    </div>
</template>
<script>
import vHead from './components/public/head.vue'
export default {
    components: {
        vHead,
        'remote-js': {
            render(createElement) {
                return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
            },
            props: {
                src: { type: String, required: true },
            },
        },
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
