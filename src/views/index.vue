<template>
    <Row>
        <div class="index_bg">
            <img src="../images/dong7.gif" style="width: 100%; height: 100%;" />
            <div class="search_form_area">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <Form-item prop="destination">
                        <Input v-model="value" placeholder="城市或酒店名称" style="width: 300px"></Input>
                    </Form-item>
                    <Form-item prop="checkIn">
                        <Date-picker :value="value1" format="yyyy-MM-dd" type="date" placeholder="入住日期" style="width: 200px"></Date-picker>
                    </Form-item>
                    <Form-item prop="checkOut">
                        <Date-picker :value="value1" format="yyyy-MM-dd" type="date" placeholder="退房日期" style="width: 200px"></Date-picker>
                    </Form-item>
                    <Form-item>
                        <Select v-model="model6" style="width:160px">
                            <Option value="beijing" selected>北京市</Option>
                            <Option value="shanghai" disabled>上海市</Option>
                            <Option value="shenzhen">深圳市</Option>
                        </Select>
                    </Form-item>
                    <Form-item>
                        <Button type="warning" style="width: 100px">搜 索</Button>
                    </Form-item>
                </Form>
            </div>
        </div>
    </Row>

</template>
<script>

export default {
    data(){
        return{
            reason:"test",
            model6: '入住人数'
        }
    },
    created(){
//        var params = {'cityid':12,'dtype':'','key':'62cbf02a594e75b4cbce565642b1dc36'};
        var url ="https://testjkweb.tourongjia.com/outRegister/getVerificationCode";
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
<style scoped>
    @import '../styles/index.css';
</style>
