<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>
          <v-btn icon class="mr-2" @click="goBack">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          Editar usuário
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
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "UsuarioEdit",

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

    ...mapGetters({
      getById: "usuario/getById",
    }),
  },

  mounted() {
    const id = this.$route.params.id;
    const user = this.getById(id);
    this.form = { ...user };
  },

  methods: {
    ...mapActions({
      update: "usuario/update",
    }),

    goBack() {
      this.$router.push({ name: "Usuarios" });
    },

    onSubmit() {
      this.update(this.form).then(() => {
        this.$router.go(-1);
      });
    },
  },
};
</script>
