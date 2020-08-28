<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">ID: </label>
        <input id="username" type="text" v-model="username" 
          class="username-input"
          v-bind:class="{ 'error': isError }"
        >
      </div>
      <div>
        <label for="password">PW: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button v-bind:disabled="!isUsernameValid" type="submit">로그인</button>
    </form>

    <!-- 유효성 검사 메시지 -->
    <p v-if="isError">올바르지 않은 ID 형식입니다.</p>
    <p v-if="isUsernameValid">올바른 이메일 형식입니다.</p>
  </div>
</template>

<script>
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

export default {
  data () {
    return {
      username: '',
      password: '',
      isError: false
    }
  },
  computed: {
    isUsernameValid () {
      return validateEmail(this.username);
    }
  },
  methods: {
    submitForm () {
      console.log('로그인');
      this.isError = true;
      // this.initForm();
    },
    initForm () {
      this.username = '';
      this.password = '';
    }
  }
}
</script>

<style scoped>
.username-input {
  outline: none;
}
.username-input.error {
  border: 1px solid red;
}
</style>