<template>
  <div class="contactForm">
    <h1>This is an contact us page</h1>
    <form @submit.prevent="onFormSubmit">
      <input required type="email" v-model="formData.email" />
      <br />
      <input required type="text" v-model="formData.message" />
      <br />
      <button :disabled="isSubmitting ? true : false" type="submit" value="Submit">submit</button>
    </form>
  </div>
  <h3 v-if="messageSent">email sent 👍</h3>
  <h3 v-if="messageFail">failed to send email 😟</h3>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isSubmitting: false,
      messageSent: false,
      messageFail: false,
      formData: {
        email: '',
        message: '',
      },
      subject: 'skills-vue Submission',
    };
  },
  methods: {
    async onFormSubmit() {
      this.isSubmitting = true;
      try {
        await this.axios.post('https://enociv9ekmecyez.m.pipedream.net', {
          subject: this.subject,
          email: this.formData.email,
          message: this.formData.message,
        });
        this.isSubmitting = false;
        this.messageSent = true;
      } catch (error) {
        this.isSubmitting = false;
        this.messageFail = false;
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
