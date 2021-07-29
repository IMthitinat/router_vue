<template>
  <div v-if="event">
    <img :src="event.airline.logo" />
    <img
      v-for="airline in event.airline"
      :key="airline.id"
      :src="airline.logo"
    />
    <h1>Name: {{ event.name }}</h1>
    <div v-if="check">
      <h3>{{ event.airline.country }}</h3>
      <h5>{{ event.airline.head_quaters }}</h5>
      <p>{{ event.airline.website }}</p>
      <h2>Slogan: {{ event.airline.slogan }}</h2>
    </div>
    <div v-if="check == false">
      <span v-for="airline in event.airline" :key="airline.id">
        <h2>Slogan: {{ airline.slogan }}</h2>
        <h3>{{ airline.country }}</h3>
        <h5>{{ airline.head_quaters }}</h5>
        <p>{{ airline.website }}</p>
      </span>
    </div>
  </div>
</template>

<script>
// import PassengerService from '@/services/PassengerService.js'

import PassengerService from '../services/PassengerService.js'
export default {
  props: ['id'],
  computed: {
    check: function () {
      var check = this.event._id
      if (check == '5f1c59d0fa523c3aa793c0ac') {
        return true
      } else {
        return false
      }
    }
  },
  data() {
    return {
      event: null
    }
  },
  created() {
    PassengerService.getPassenger(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

img {
  width: 300px;
  height: auto;
  margin-bottom: 20px;
}
</style>
