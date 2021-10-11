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
            <v-form ref="form" v-model="validForm" @submit.prevent="onSubmit">
              <v-text-field
                v-model="form.name"
                :rules="[(v) => !!v || 'Nome é obrigatório']"
                label="Nome"
                placeholder="Nome"
                dense
                outlined
              />
              <v-text-field
                v-model="form.email"
                :rules="[
                  (v) => !!v || 'E-mail é obrigatório',
                  (v) => /.+@.+\..+/.test(v) || 'Entre com um e-mail válido',
                ]"
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

      validForm: true,

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
      this.$refs.form.validate();

      if (this.validForm) {
        this.update(this.form).then(() => {
          this.$router.go(-1);
        });
      }
    },
  },
};
</script>
