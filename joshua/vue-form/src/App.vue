<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">ID: </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">PW: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">로그인</button>
    </form>

    <!-- 유효성 검사 메시지 -->
    <p v-if="isError">올바르지 않은 ID 형식입니다.</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      isError: false
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

<style>

</style>