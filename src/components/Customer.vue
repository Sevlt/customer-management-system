<template>
    <div class="Customer container">
        <!-- 提醒弹窗 -->
        <Alert v-if="alert" v-bind:message="alert"></Alert>
        <h1 class="page-header">客户管理系统</h1>
        <input type="text" class="form-control" placeholder="搜索姓名" v-model="filterInput" />
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(customer, index) in filterBy(customers, filterInput)" :key="index">
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.phone }}</td>
                    <td>{{ customer.email }}</td>
                    <td>
                        <router-link
                            class="btn btn-default"
                            v-bind:to="'/customerdetails/' + customer.id"
                            >详情</router-link
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// 引入 Alert 组件
import Alert from './Alert'
export default {
    name: 'Customer',
    data() {
        return {
            customers: [],
            alert: '',
            filterInput: '',
        }
    },
    methods: {
        fetchCustomers() {
            this.$http.get('http://localhost:3000/users').then((res) => {
                this.customers = res.body
            })
        },
        filterBy(customers, filterInput) {
            // 对 customers 数组依次遍历，返回 name 与输入的 filterInput 匹配的数组项
            return customers.filter(function(customer) {
                return customer.name.match(filterInput)
            })
        },
    },
    components: {
        Alert,
    },
    created() {
        // 路由接受由 Add.vue 传来参数 alert，若参数为真，弹出添加成功提示
        if (this.$route.query.alert) {
            this.alert = this.$route.query.alert
        }
        this.fetchCustomers()
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
