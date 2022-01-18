<template>
  <div class="contactUs">
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
    };
  },
  methods: {
    onFormSubmit() {
      console.log(this.formData);
    },
  },
};
</script>
