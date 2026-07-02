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
          <form @submit.prevent="login">
            <div class="mb-4">
              <label class="mb-2 block">
                Username
              </label>

              <input
                v-model="form.username"
                type="text"
                class="w-full rounded-md bg-slate-800 px-4 py-2 text-cyan-300 outline-none"
                required
              >
            </div>

            <div class="mb-6">
              <label class="mb-2 block">
                Password
              </label>

              <input
                v-model="form.password"
                type="password"
                class="w-full rounded-md bg-slate-800 px-4 py-2 text-cyan-300 outline-none"
                required
              >
            </div>

            <button
              type="submit"
              class="w-full rounded-md bg-slate-600 py-3 text-white transition hover:bg-slate-700"
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