<template>
  <ul class="divide-y divide-gray-300">
    <li  v-for="todo in todoStore.dispItems" :key="todo.id" class="flex items-center justify-between p-4">
      <p class="text-gray-500 inline-flex items-center">
        <input type="checkbox" @click="completeTodo(todo.id)" class="checkbox accent-white w-5 h-5 rounded mx-6" />
        {{ todo.title }}
      </p>
      <div class="flex space-x-4">
        <button @click="removeTodo(todo.id)" class="rounded border-2 p-2 text-gray-500">削除</button>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { useTodoStore } from '@/store/todos'

  const todoStore = useTodoStore()
  const removeTodo = (id: number) => {
    todoStore.remove(id)
  }
  const completeTodo = (id: number) => {
    todoStore.complete(id)
  }
</script>