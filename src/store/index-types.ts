import TodoStore from './modules/todo/todo-module';

export interface AppStore {
    todo?: typeof TodoStore;
}
