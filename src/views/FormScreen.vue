<template>
  <v-container class="login-container">
    <v-card class="card-container" elevation="16">
      <span class="titulo">Form</span>

      <v-form autocomplete="off" @submit.prevent="login">
        <v-text-field
          label="CPF"
          placeholder="CPF"
          color="primary"
          outlined
          autocomplete="off"
          name="username"
          v-mask="'###.###.###-##'"
          @blur="validate('username')"
          :error-messages="validator.errors.username"
          v-model="user.username"
        >
        </v-text-field>

        <v-text-field
          type="password"
          label="Senha"
          placeholder="Senha"
          autocomplete="off"
          color="primary"
          outlined
          name="password"
          v-mask="'######'"
          @blur="validate('password')"
          :error-messages="validator.errors.password"
          v-model="user.password"
        ></v-text-field>

        <div class="actions">
          <v-btn
            type="submit"
            color="primary"
            :disabled="!validator.isValid"
            :loading="loading">
            Entrar
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts" src="./FormScreen.component" />

<style lang="scss" scoped>
@import '@/shared/styles/colors.scss';

.login-container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 580px;
  padding: 1.5rem 4rem;
  border-left: 0.25rem solid color-theme(primary) !important;
  border-radius: 0.5rem;

  .titulo {
    display: flex;
    width: 100%;
    font-size: 2rem;
    color: color-theme(primary, light);
    text-align: initial;
    margin-bottom: 1rem;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
