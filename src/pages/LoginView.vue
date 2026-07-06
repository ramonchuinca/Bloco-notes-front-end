<template>
  <AuthLayout>
    <div class="container mx-auto mt-16 px-4">
      <div class="flex justify-center">
        <div class="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">

          <!-- Logo -->
          <div class="mb-8 flex justify-center">
            <img
              :src="logo"
              alt="Notes Logo"
              class="w-40"
            >
          </div>

          <LoginForm />

          <div class="mt-6 text-center text-sm text-slate-500">
            © {{ new Date().getFullYear() }} Notes
          </div>

        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import logo from '@/assets/logo.png'
</script>