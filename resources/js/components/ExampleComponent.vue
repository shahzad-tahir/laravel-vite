<template>
    <div>
        This is an Example Vue Component by {{ name }}
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    const props = defineProps(['name']);

    onMounted(() => {
        console.log('Mounted Vue 3 SFC')
    })
</script>

<style scoped>

</style>
