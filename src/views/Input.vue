<template>
  <v-text-field
    solo
    height="98px"
    color="#313030"
    @change="onChange"
  ></v-text-field>
</template>

<script>
export default {
  name: "Input",
  methods: {
    onChange(value) {
      this.$emit("change", value);
    }
  }
}
</script>