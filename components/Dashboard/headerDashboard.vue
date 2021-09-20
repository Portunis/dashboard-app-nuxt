<template>
<div>
  <div class="header">
<Avatar />
  </div>
</div>
</template>

<script>
import Avatar from "~/components/Dashboard/avatar";
export default {
  name: "header",
  components: {Avatar}
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  margin: 0;
  height: 50px;
  background: none;
  position: relative;

}
</style>
