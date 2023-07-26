import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);

  function setUser(user: any) {
    user.value = user;
  }

  return { user, setUser };
});
