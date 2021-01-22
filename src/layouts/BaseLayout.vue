<template>
  <section class="base-layout">
    <div class="layout-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'BaseLayout',
  };
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
}
</style>