<template>
    <div class="layout_container">

        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <logo />
            <!-- 滚动条 -->
            <el-scrollbar class="scrollbar">
                <!-- 菜单 -->
                <el-menu background-color=$base-menu-background text-color='white'>
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">数据大屏</el-menu-item>
                    <!-- 折叠菜单 -->
                    <el-sub-menu index="3">
                        <template #title>权限管理</template>
                        <el-menu-item index="2-1">用户</el-menu-item>
                        <el-menu-item index="2-2">角色</el-menu-item>
                        <el-menu-item index="2-3">权限</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar">456</div>
        <!-- 内容展示区域 -->
        <div class="layout_main">
            <h4 style="background: red; height: 10000px;">吾问无为谓</h4>
        </div>

    </div>
</template>
<script setup lang='ts'>
import logo from './logo/index.vue'

</script>
<style scoped lang='scss'>
.layout_container {
    width: 100%;
    height: 100vh;
    background: red;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;

        .scrollbar {
            width: $base-menu-width;
            height: calc(100vh - $base-menu-logo-height);
            color: aliceblue;
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-menu-height;
        background: cyan;
        top: 0px;
        left: $base-menu-width;
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-menu-height);
        background-color: yellowgreen;
        top: $base-menu-height;
        left: $base-menu-width;
        padding: 20px;
        overflow: auto;
    }

}
</style>
