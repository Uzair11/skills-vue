<template>
  <div class="contactForm">
    <h1>This is an contact us page</h1>
    <form @submit.prevent="onFormSubmit" class="mx-auto px-5" style="width: 500px">
      <div class="mb-3 mt-5">
        <label for="emailInput" class="form-label">Email address</label>
        <input
          required
          type="email"
          class="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          v-model="formData.email"
        />
      </div>
      <div class="mb-3">
        <label for="messasgeInput" class="form-label">Message</label>
        <textarea
          required
          type="text"
          class="form-control"
          id="messasgeInput"
          v-model="formData.message"
          rows="3"
        ></textarea>
      </div>
      <button
        :disabled="isSubmitting ? true : false"
        type="submit"
        value="Submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
  <h3 v-if="messageSent">email sent 👍</h3>
  <h3 v-if="messageFail">failed to send email 😟</h3>
</template>

<script>
export default {
  data() {
    return {
      isSubmitting: false,
      messageSent: false,
      messageFail: false,
      formData: {
        subject: 'skills-vue Submission',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    async onFormSubmit(payload) {
      this.isSubmitting = true;
      try {
        await this.axios.post('https://enociv9ekmecyez.m.pipedream.net', payload);
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
