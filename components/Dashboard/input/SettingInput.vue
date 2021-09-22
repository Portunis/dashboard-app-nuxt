<template>
<div>
  <div class="body-input">
    <label class="label-input">Настройки</label>
    <input class="setting-input error-input"  aria-placeholder="fddsfaf"/>
    <span class="error-message"> Ошибка</span>
  </div>
</div>
</template>

<script>
export default {
  name: "SettingInput"
}
</script>

<style scoped>
.body-input{
  display: flex;
  flex-direction: column;
}
.error-message{
  color: red;
  font-size: 14px;
  font-family: sans-serif;
}
.error-input{
  border: 2px solid red;
  background-color: #f58080;
  color: #fff;
}
.label-input{
  color: #fff;
}
.setting-input{
  width: 200px;
  height: 32px;
  outline:none;
  border-radius: 5px;
  border: none;
}
</style>
