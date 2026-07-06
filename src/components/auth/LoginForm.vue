<template>
  <form
    @submit.prevent="login"
    class="space-y-5"
  >
    <!-- Username -->
    <div>
      <label
        for="text_username"
        class="mb-2 block text-sm font-semibold text-slate-700"
      >
        Username
      </label>

      <input
        id="text_username"
        v-model="form.text_username"
        type="email"
        autocomplete="username"
        placeholder="Digite seu e-mail"
        class="w-full rounded-lg border border-slate-300 bg-slate-800 px-4 py-3 text-cyan-300 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
        required
      >
      <p
  v-if="errors.text_username"
  class="mt-2 text-sm text-red-500"
>
  {{ errors.text_username[0] }}
</p>
    </div>

    <!-- Password -->
    <div>
      <label
        for="text_password"
        class="mb-2 block text-sm font-semibold text-slate-700"
      >
        Password
      </label>

      <input
        id="text_password"
        v-model="form.text_password"
        type="password"
        autocomplete="current-password"
        placeholder="Digite sua senha"
        class="w-full rounded-lg border border-slate-300 bg-slate-800 px-4 py-3 text-cyan-300 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
        required
      >
      <p
  v-if="errors.text_password"
  class="mt-2 text-sm text-red-500"
>
  {{ errors.text_password[0] }}
</p>
    </div>

    <button
      type="submit"
      :disabled="loading"
      class="w-full rounded-lg bg-slate-700 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {{ loading ? 'Entrando...' : 'LOGIN' }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import api from '@/services/api'

const loading = ref(false)

const errors = ref({})

const form = reactive({
  text_username: '',
  text_password: '',
})

async function login() {

  loading.value = true
  errors.value = {}

  try {

    const response = await api.post('/loginSubmit', form)

    console.log(response.data)

  } catch (error) {

    console.log(error)

    if (error.response?.status === 422) {
      errors.value = error.response.data.errors
    }

  } finally {

    loading.value = false

  }

}
</script>