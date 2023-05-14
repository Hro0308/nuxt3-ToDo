import { defineStore } from 'pinia';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const useTodoStore = defineStore('todo', {

  state: () => ({
    items: [] as Todo[],
  }),

  getters: {
    completeItems: (state) => {
      return state.items.filter(todo => todo.completed)
    },
    dispItems: (state) => {
      return state.items.filter(todo => !todo.completed)
    },
  },

  actions: {
    async add(todoText: string) {
      const itemList: Todo[] = this.items
      const pushTodo: Todo = {
        // 末尾のidに+1したものを追加する。なければ0
        id: itemList.length === 0 ? 0 : itemList[itemList.length - 1].id + 1,
        title: todoText,
        completed: false,
      }
      this.items.push(pushTodo)
    },
    async complete(id: number) {
      const item = this.items.find((item) => item.id === id);
      if (item) {
        item.completed = !item.completed;
      }
    },
    async remove(id: number) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  }
})