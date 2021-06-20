<template>
  <v-container>
    <div class="todo d-flex justify-center">
      <h1>Todo page</h1>
    </div>
    <v-divider />
    <v-card class="mx-auto" tile>
      <v-list v-if="todoList" disabled>
        <v-subheader>Todos</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="todo in todoList" :key="todo.id">
            <v-list-item-content>
              <v-list-item-title v-text="todo.title">
              </v-list-item-title>
              <div>
                <v-chip
                  v-if="todo.completed"
                  small
                  text-color="white"
                  color="green">
                  Completo
                </v-chip>
                <v-chip v-else color="orange" small text-color="white">Incompleto</v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script lang="ts" src="./TodoList.component" />
