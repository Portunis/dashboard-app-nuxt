<template>
<div>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">

      <div class="demo-basic--circle">
        <el-dropdown trigger="click">
        <div class="block"><el-avatar :size="30"  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="avatar"></el-avatar></div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting"><NuxtLink to="/dashboard/settings">Настройки</NuxtLink> </el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button">Выход</el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>


  </el-row>
</div>
</template>

<script>
export default {
  name: "avatar"
}
</script>

<style scoped>
.demo-avatar{
  z-index: 999;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}

</style>
