<template>
    <div class="Add container">
        <Alert v-if="alert" v-bind:message="alert"></Alert>
        <h1 class="page-header">添加客户</h1>
        <form v-on:submit="addCustomer">
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
                <button type="submit" class="btn btn-primary">添加</button>
            </div>
        </form>
    </div>
</template>

<script>
import Alert from './Alert'
export default {
    name: 'Add',
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
        addCustomer(e) {
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
                this.$http.post('http://localhost:3000/users', newCustomer).then((res) => {
                    // 路由传参，跳转到主页并传递 alert 字符串
                    this.$router.push({ path: '/', query: { alert: '客户信息添加成功！' } })
                })
            }
            e.preventDefault()
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
