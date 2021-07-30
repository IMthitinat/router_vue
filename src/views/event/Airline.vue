<template>
   <div v-if="event">
    <img :src="event.airline.logo" />
    <img
      v-for="airline in event.airline"
      :key="airline.id"
      :src="airline.logo"
    />
        <!-- <div v-if="check"> -->
      <h3>{{ event.airline.country }}</h3>
      <h5>{{ event.airline.head_quaters }}</h5>
      <p>{{ event.airline.website }}</p>
      <h2>Slogan: {{ event.airline.slogan }}</h2>
    <!-- </div> -->
    <!-- <div v-if="check == false"> -->
      <span v-for="airline in event.airline" :key="airline.id">
        <h2>Slogan: {{ airline.slogan }}</h2>
        <h3>{{ airline.country }}</h3>
        <h5>{{ airline.head_quaters }}</h5>
        <p>{{ airline.website }}</p>
      </span>
    <!-- </div> -->
   </div>
</template>

<script>
export default {
  props: ['event']
}
</script>
