<template>
  <DefaultLayout>
    <div class="flex items-center justify-center">
      <div class="w-full mx-auto">
        <Card heading="Login">
          <TextInput v-model="email" label="Email" type="email" placeholder="marko@markomaric.me" />
          <TextInput v-model="password" label="Password" type="password" />
          <div class="flex justify-end">
            <Button @click="loginUser">Login</Button>
          </div>
        </Card>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import DefaultLayout from "~/layouts/Default.vue";
import Button from "@/button/Button.vue";
import Card from "@/card/Card.vue";
import TextInput from "@/textInput/TextInput.vue";

const email = ref("");
const password = ref("");

/**
 * Attempt to log the user into the application. If this fails for any reason, an error will be shown.
 */
const loginUser = async () => {
  try {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.info("User logged in successfully", response);
  } catch (error) {
    console.error("An error occured: ", error);
  }
};
</script>
