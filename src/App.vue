<template>
    <div id="app">
        <!-- bootstrap 导航 -->
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <router-link class="navbar-brand" to="/">客户管理系统</router-link>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><router-link to="/add">添加用户</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
}
</script>

<style></style>
