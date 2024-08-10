<template>
  <router-view />
</template>

<script setup lang="ts">
import { generateArray } from 'Utils/tools' // 使用Utils别名
console.log(generateArray(20))
</script>
