<template>
    <div class="m-4 flex items-center">
        <input v-model="todoTitle" class="mr-4 w-full appearance-none rounded border py-2 px-3 shadow" placeholder="タスクを入力"/>
        <button @click="addTodo" class="rounded bg-blue-500 hover:bg-blue-400 text-white rounded px-4 py-2 w-24">追加</button>
    </div>
</template>

<script setup lang="ts">
    import { useTodoStore } from '@/store/todos'

    const todoTitle = ref<string>('')
    const todoStore = useTodoStore()
    const addTodo = () => {
        if (todoTitle.value) {
            todoStore.add(todoTitle.value)
            todoTitle.value = ''
        }
    }
</script>