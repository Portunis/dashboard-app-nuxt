<template>
<div>
  <nuxt-link to="/dashboard" tag="button" class="error__button">Вернуться назад</nuxt-link>
</div>
</template>

<script>
export default {
  name: "errorFooter"
}
</script>

<style lang="scss" scoped>
.error__button{
  font-size: 18px;
  font-family: sans-serif;
  padding: 10px 10px;
  text-align: center;
  color: #fff;
  background-color: #4e4066;
  margin: 0 auto;
  border: none;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(#4e4066, .5);
  -webkit-animation: pulse 1.5s infinite;
  border-radius: 5px;
}


.error__button:hover {
  -webkit-animation: none;
}

@-webkit-keyframes pulse {
  0% {
  }
  70% {

    box-shadow: 0 0 0 15px rgba(#4e4066, 0);
  }
  100% {

    box-shadow: 0 0 0 0 rgba(#4e4066, 0);
  }
}

</style>
