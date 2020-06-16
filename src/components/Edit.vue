<template>
    <div class="Edit container">
        <Alert v-if="alert" v-bind:message="alert"></Alert>
        <h1 class="page-header">编辑客户</h1>
        <form v-on:submit="updateCustomer">
            <div class="well">
                <h4>客户信息</h4>
                <div class="form-group">
                    <label>姓名</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="name"
                        v-model="customer.name"
                    />
                </div>
                <div class="form-group">
                    <label>手机</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="phone"
                        v-model="customer.phone"
                    />
                </div>
                <div class="form-group">
                    <label>邮箱</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="email"
                        v-model="customer.email"
                    />
                </div>
                <div class="form-group">
                    <label>学历</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="education"
                        v-model="customer.education"
                    />
                </div>
                <div class="form-group">
                    <label>学校</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="school"
                        v-model="customer.school"
                    />
                </div>
                <div class="form-group">
                    <label>职业</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="profession"
                        v-model="customer.profession"
                    />
                </div>
                <div class="form-group">
                    <label>个人简介</label>
                    <textarea class="form-control" v-model="customer.profile" rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">确认</button>
            </div>
        </form>
    </div>
</template>

<script>
import Alert from './Alert'
export default {
    name: 'Edit',
    data() {
        return {
            customer: {},
            alert: '',
        }
    },
    components: {
        Alert,
    },
    methods: {
        fetchCustomer(id) {
            // 进入编辑后原始值仍然存在于编辑表单
            this.$http.get('http://localhost:3000/users/' + id).then((res) => {
                this.customer = res.body
            })
        },
        updateCustomer(e) {
            if (!this.customer.name || !this.customer.phone || !this.customer.email) {
                this.alert = '前三项为必填选项！'
            } else {
                let newCustomer = {
                    name: this.customer.name,
                    phone: this.customer.phone,
                    email: this.customer.email,
                    education: this.customer.education,
                    school: this.customer.school,
                    profession: this.customer.profession,
                    profile: this.customer.profile,
                }
                // put 请求
                this.$http
                    .put('http://localhost:3000/users/' + this.$route.params.id, newCustomer)
                    .then((res) => {
                        // 路由传参，跳转到主页并传递 alert 字符串
                        this.$router.push({ path: '/', query: { alert: '客户信息编辑成功！' } })
                    })
            }
            e.preventDefault()
        },
    },
    created() {
        // 路由接收由 CustomerDetails.vue 传来的参数 id
        this.fetchCustomer(this.$route.params.id)
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
