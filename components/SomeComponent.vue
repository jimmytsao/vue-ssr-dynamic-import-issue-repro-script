<template>
  <div class="SomeComponent">
    Somecomponent with value: {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' }
  }
}
</script>
