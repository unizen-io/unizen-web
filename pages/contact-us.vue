<template>
  <div class="form">
    <h1 v-if="!status">
      Send a message!
    </h1>
    <form v-if="!status" @submit="sendForm">
      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="Enter your email..."
        required
      >
      <input
        v-model="message"
        type="text"
        name="message"
        placeholder="Leave a message..."
        required
      >
      <button type="submit">
        Send
      </button>
    </form>
    <h1 v-if="status === 'success'">
      Thank you, we got your submission!
    </h1>
    <h1 v-if="status === 'error'">
      Oops, something went wrong. Please try again.
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      status: null,
      email: null,
      message: null
    }
  },
  methods: {
    sendForm (event) {
      event.preventDefault()

      fetch('https://formcarry.com/s/TV0DUuMk_s', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ email: this.email, message: this.message })
      })
        .then(response => response.json())
        .then((response) => {
          if (response.code === 200) {
            this.status = 'success'
          } else {
            // Formcarry error
            this.status = 'error'
          }
        })
        // network error
        .catch(() => (this.status = 'error'))
    }
  }
}
</script>

<style>
  .form form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 480px;
    padding: 24px;
    margin: 0 auto;
  }

  .form input {
    margin-bottom: 16px;
  }
</style>
