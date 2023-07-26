<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="w-1/3 mx-auto">
      <Card heading="Create Account">
        <TextInput v-model="username" label="Username" type="text" placeholder="awusuwah" />
        <TextInput v-model="email" label="Email" type="email" placeholder="marko@markomaric.me" />
        <TextInput v-model="password" label="Password" type="password" />

        <div class="flex justify-end">
          <Button @click="createUser">Create Account</Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import Button from "@/button/Button.vue";
import Card from "@/card/Card.vue";
import TextInput from "@/textInput/TextInput.vue";

const username = ref("");
const email = ref("");
const password = ref("");

/**
 * Attempt to create a new user account. If this fails for any reason, an error will be shown.
 */
const createUser = async () => {
  try {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((response) => {
        updateProfile(response.user, {
          displayName: username.value,
        });
      })
      .then((data) => {
        console.info("User created successfully.", data);
      });
  } catch (error) {
    console.error("An error occured: ", error);
  }
};
</script>
