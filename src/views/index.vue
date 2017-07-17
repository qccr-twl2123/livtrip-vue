<style scoped lang="less">
    .index{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        h1{
            height: 150px;
            img{
                height: 100%;
            }
        }
        h2{
            color: #666;
            margin-bottom: 200px;
            p{
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex{
            height: 100%;
        }
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="../images/logo.png">
                </h1>
                <h2>
                    <p>Welcome to your iView app!</p>
                    <Button type="ghost" @click="handleStart">Start iView</Button>
                </h2>

                <p>{{reason}}</p>
            </Col>
        </Row>
    </div>
</template>
<script>

export default {
    data(){
        return{
            reason:"test"
        }
    },
    created(){
//        var params = {'cityid':12,'dtype':'','key':'62cbf02a594e75b4cbce565642b1dc36'};
        var url ="http://www.livtrip.com/front/product/getCity.json?query=ne";
        this.axios.get(url)
            .then(data => {
                console.log("success:"+data);
            })
            .catch(err => {
                console.log("error");
            })
    },
    methods: {
        handleStart () {
            this.$Modal.info({
                title: 'Bravo',
                content: 'Now, enjoy the convenience of iView.'
            });
        }
    }
}
</script>
