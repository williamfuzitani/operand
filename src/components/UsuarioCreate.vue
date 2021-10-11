<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>
          <v-btn icon class="mr-2" @click="goBack">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          Cadastrar usuário
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col col="12" lg="6">
        <v-card outlined>
          <v-card-text>
            <v-form @submit.prevent="onSubmit">
              <v-text-field
                v-model="form.name"
                label="Nome"
                placeholder="Nome"
                dense
                outlined
              />
              <v-text-field
                v-model="form.email"
                label="Email"
                placeholder="Email"
                dense
                outlined
              />
              <v-btn
                :loading="loading"
                :disabled="loading"
                type="submit"
                outlined
                class="mr-4"
              >
                Salvar
              </v-btn>
              <v-btn text @click="goBack">Cancelar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "UsuarioCreate",

  data() {
    return {
      search: "",

      form: {
        id: null,
        name: "",
        email: "",
      },
    };
  },

  computed: {
    ...mapState("usuario", {
      loading: (state) => state.status.usuario.loading,
    }),
  },

  methods: {
    ...mapActions({
      create: "usuario/create",
    }),

    goBack() {
      this.$router.push({ name: "Usuarios" });
    },

    onSubmit() {
      this.create(this.form).then(() => {
        this.$router.go(-1);
      });
    },
  },
};
</script>
