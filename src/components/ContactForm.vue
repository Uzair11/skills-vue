<template>
  <div class="contactForm">
    <h1>This is an contact us page</h1>
    <form @submit.prevent="onFormSubmit">
      <input required type="text" v-model="formData.email" />
      <br />
      <input required type="text" v-model="formData.message" />
      <br />
      <button type="submit" value="Submit">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        message: '',
      },
      subject: 'skills-vue Submission',
    };
  },
  methods: {
    onFormSubmit() {
      // call post with from data to api
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: this.subject,
          email: this.formData.email,
          message: this.formData.message,
        }),
      };
    },
  },
};
</script>

<style>
.contactForm {
  background-color: red;
}
</style>
