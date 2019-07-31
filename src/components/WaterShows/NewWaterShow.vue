<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new water show</h1>
        <v-form v-model="valid" ref="form" validation class="mb-3">

          <v-flex xs12 sm6 d-flex>
            <v-select
              :items="items"
              label="select address"
            ></v-select>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field
              v-model="cold"
              label="cold"
              outline
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field
              v-model="hot"
              label="hot"
              outline
            ></v-text-field>
          </v-flex>


        </v-form>


        <v-layout row>
          <v-flex xs12>
            <img src="" height="100">
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              class="success"
              @click="createShow"
            >
              Create show
            </v-btn>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }),
    methods: {
      createShow () {
        if (this.$refs.form.validate()) {
          // logic
          const show = {
            hot: this.hot,
            cold: this.cold
          }
          console.log(show)
        }
      }
    }
  }
</script>
