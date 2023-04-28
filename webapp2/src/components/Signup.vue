<script setup>
    import { ref } from 'vue';
    const valid = ref(true);
    const firstName = ref("");
    //call signup with {
    //    firstName
    //}
</script>

<template>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstName"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>
    </v-row>
    </v-container>
    </v-form>

</template>