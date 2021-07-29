<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <div id="nav">
            <router-link :to="{ name: 'EventDetails', parems: { id } }">
                   Passenger Details </router-link>  
     
            |

            <router-link :to="{ name: 'EventAirline', parems: { id } }">
                   Airline Details </router-link>
            

        </div>
        <router-view :event="event" />
        </div>    

</template>

<script>
import PassengerService from '@/services/PassengerService.js'
export default {
    props: ['id'],
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
            if (error.response && error.response.status == 404) {
                this.$router.push({
                    name: '404Resource',
                    parems: { resource: 'event' }
                })
            } else {
                this.$router.push({ name: 'NetworkError' })
            }
        })
    }
}
</script>