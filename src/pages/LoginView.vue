<template>
  <AuthLayout>
    <div class="container mx-auto mt-16 px-4">
      <div class="flex justify-center">
        <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">

          <!-- Logo -->
          <div class="mb-8 flex justify-center">
            <img
              src="/src/assets/logo.png"
              alt="Notes logo"
              class="w-40"
            >
          </div>

          <!-- Formulário -->
    <form @submit.prevent="login" class="space-y-5">

  <!-- Username -->
  <div>
    <label
      for="username"
      class="mb-2 block text-sm font-medium text-slate-700"
    >
      Username
    </label>

    <input
      id="username"
      v-model="form.username"
      type="text"
      autocomplete="username"
      placeholder="Digite seu usuário"
      class="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-cyan-300 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
      required
    >
  </div>

  <!-- Password -->
  <div>
    <label
      for="password"
      class="mb-2 block text-sm font-medium text-slate-700"
    >
      Password
    </label>

    <input
      id="password"
      v-model="form.password"
      type="password"
      autocomplete="current-password"
      placeholder="Digite sua senha"
      class="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-cyan-300 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
      required
    >
  </div>

  <!-- Botão -->
  <button
    type="submit"
    class="w-full rounded-lg bg-slate-700 py-3 font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99]"
  >
    LOGIN
  </button>

</form>

          <!-- Rodapé -->
          <div class="mt-6 text-center text-sm text-slate-500">
            © {{ new Date().getFullYear() }} Notes
          </div>

        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup>
import { reactive } from 'vue'
import AuthLayout from '../layouts/AuthLayout.vue'

const form = reactive({
  username: '',
  password: '',
})

function login() {
  console.log(form)
}
</script>