import { Component, Vue } from 'vue-property-decorator';
import { Todo } from '@/store/modules/todo/todo-types';
import TodoStore from '@/store/modules/todo/todo-module';

@Component
export default class TodoList extends Vue {
  async mounted(): void {
    await TodoStore.fetchTodoList();
  }

  get todoList(): Todo[] | null {
    return TodoStore.todos;
  }
}
