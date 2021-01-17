<template>
  <div class="row justify-content-center pt-4 pt-lg-4">
    <div class="col-11 text-center ">
      <h2 class="display-2 font-weight-bold">{{ header }}</h2>
      <p class="body">{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: ['header', 'body'],
};
</script>

<style scoped>

.body{
  font-size: 2rem;
}
</style>
