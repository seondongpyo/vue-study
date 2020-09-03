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
    <p v-if="isSuccess">로그인 되었습니다.</p>

    <!-- 유효성 검사 메시지 -->
    <!-- <p v-if="isError">올바르지 않은 ID 형식입니다.</p>
    <p v-if="isUsernameValid">올바른 이메일 형식입니다.</p> -->

    <!-- 토스트 팝업 메시지 -->
    <!-- <toast-popup></toast-popup>과 동일 -->
    <ToastPopup 
      v-bind:open="isSuccess"
      v-on:close="isSuccess = false"
    >
    </ToastPopup>
  </div>
</template>

<script>
import ToastPopup from '@/components/ToastPopup.vue';

// 이메일 형식 유효성 검사 함수
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

export default {
  components: {
    ToastPopup
  },
  data () {
    return {
      username: '',
      password: '',
      isError: false,
      isSuccess: false
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
      this.isSuccess = true;
      // this.isError = true;
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