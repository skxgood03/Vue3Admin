<template>
    <div>

        <template v-for="(item) in  menuList" :key="item.path">
            <template v-if="!item.children && !item.meta.hidder">
                <el-menu-item :index="item.path" v-if="!item.meta.hidder">
                    <template #title>

                        <p>{{ item.meta.title }}</p>

                    </template>
                </el-menu-item>
            </template>

            <template v-if="item.children && item.children.length == 1">
                <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidder">

                    <template #title>
                        <span>{{ item.children[0].meta.title }}</span>
                    </template>
                </el-menu-item>
            </template>

            <!-- 当菜单项有子菜单且子菜单项数量大于等于1时，渲染为级联菜单 -->
            <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
                <!-- 设置菜单项的标题 -->
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
                <!-- 渲染子菜单 -->
                <Menu :menuList="item.children"></Menu>
            </el-sub-menu>



        </template>
    </div>
</template>
<script setup lang='ts' >
defineProps(['menuList'])

</script>
<script  lang='ts' >
export default {
    name: "Menu"
}

</script>


<style scoped lang='scss'></style>
