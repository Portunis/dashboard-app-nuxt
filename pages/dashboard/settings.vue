<template>
  <div>
    settings
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Настройки',
      meta: [
        ...this.meta
      ]
    }
  },
  name: "settings",
  layout: 'dashboard',


  data() {
    return {
      _seo: [
        {hid: 'description', name: 'description', content: 'settings'}, //(из документации)Чтобы избежать дублирования при использовании в дочерних компонентах, укажите уникальный идентификатор с  hid ключом к метаописанию. Таким образом vue-metaбудет известно, что он должен перезаписать тег по умолчанию.
        {name: 'title', content: 'Проверка settings'},
      ],

    }
  },
  computed: {
    meta() {
      return this.$data._seo
    }

  },


}
</script>


<style scoped>

</style>
