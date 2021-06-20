import { AxiosResponse } from 'axios';
import Api from '@/services/api';
import { VuexModule, Module, getModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store/index';
import { Todo } from './todo-types';

@Module({ namespaced: true, name: 'todo', dynamic: true, store })
class TodoStore extends VuexModule {
  todoList: Todo[] | null = null;

  @MutationAction({ mutate: ['todoList'] })
  async fetchTodoList() {
    const { data: todoList } = await Api.get<any, AxiosResponse<Todo[]>>('todos');
    return { todoList };
  }

  get todos() {
    return this.todoList;
  }
}

export default getModule(TodoStore);
