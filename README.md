# 客户管理系统

#### 基于 Vue 框架实现

[客户管理系统数据库](https://github.com/SEVLT/db-customer-management-system)

### 效果预览

![效果预览](https://i.loli.net/2020/06/16/1Z9rGAcoKWV8BO4.png)

### CSS 框架

> Bootstrap

### 组件

> `Customer.vue` 默认页  
> `Alert.vue` 提示消息（默认页顶部）  
> `Add.vue` 添加客户页  
> `CustomerDetails.vue` 客户详情页  
> `Edit.vue` 编辑客户页面

### 编辑页获取客户修改前信息

> 点击“详情”按钮后，调用函数 `fetchCustomers(id)`
>
> ```javascript
> fetchCustomers(id) {
>            this.$http.get('http://localhost:3000/users/' + id).then((res) => {
>                this.customer = res.body
>            })
>        }
> ```

### 搜索功能

> `Customer.vue` 中，客户列表处使用 v:for 在 `filterBy(customers, filterInput)` 函数中过滤结果
>
> ```javascript
> filterBy(customers, filterInput) {
>            // 对 customers 数组依次遍历，返回 name 与输入的 filterInput 匹配的数组项
>            return customers.filter(function(customer) {
>                return customer.name.match(filterInput)
>            })
>        }
> ```
