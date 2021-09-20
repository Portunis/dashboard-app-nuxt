<template>
<div>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true">
    <el-submenu  class="el-menu-item el-menu-item-hover" index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">Групповое меню(вложенности)</span>
      </template>
      <el-menu-item-group>
        <span slot="title">Группа 1</span>
        <el-menu-item index="1-1">1</el-menu-item>
        <el-menu-item index="1-2">2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Группа 2">
        <el-menu-item index="1-3">3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">4</span>
        <el-menu-item index="1-4-1">4</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item class="el-menu-item" index="/dashboard" :route="{ name: 'dashboard' }" >
      <i class="el-icon-menu"></i>
      <span slot="title" >
         Главная
        </span>
    </el-menu-item>
    <el-menu-item class="el-menu-item" index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">Без доступа</span>
    </el-menu-item>
    <el-menu-item class="el-menu-item"  index="/about" :route="{ name: 'dashboard-settings' }">

      <i class="el-icon-setting"></i>
      <span >Настройки</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      isCollapse: false
    };
  },
  async mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onResize() {
      this.isCollapse = document.documentElement.clientWidth < 800;

    },
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  max-width: 300px;
  width: 300px;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  margin-right: 50px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  min-height: 400px;
  height: 100vh;
  background-color: rgb(22, 28, 36) !important;
}
.el-menu-item{
  color: #fff;
}
.is-active{
  background: #7d6aa5 !important;
}
.el-menu-item-hover{
  &:hover{
    background-color: #7d6aa5 !important;
  }

}
</style>
