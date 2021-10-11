<template>
  <v-container>
    <h1>Usuários</h1>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-text-field
          v-model="search"
          placeholder="Buscar"
          append-icon="mdi-magnify"
          hide-details="auto"
          dense
          outlined
        />
      </v-col>
      <v-col>
        <v-btn outlined @click="onClickCreate"> Cadastrar usuário </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card outlined>
          <v-data-table :headers="headers" :items="usuarios" :search="search">
            <template #[`item.actions`]="{ item }">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                    @click="onClickEdit(item)"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>Editar</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                    @click="onClickDelete(item)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Remover</span>
              </v-tooltip>
            </template>
          </v-data-table>

          <v-dialog v-model="deleteDialog" width="500">
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Confirmação
              </v-card-title>
              <v-card-text class="pt-6">
                Tem certeza de que deseja remover este usuário?
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="deleteDialog = false"> Cancelar </v-btn>
                <v-btn
                  :disabled="loadingDelete"
                  :loading="loadingDelete"
                  color="red"
                  text
                  @click="onDelete"
                >
                  Remover
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "UsuarioList",

  data() {
    return {
      search: "",

      deleteDialog: false,
      deleteItem: {},
    };
  },

  computed: {
    ...mapState("usuario", {
      usuarios: (state) => state.usuarios,
      loadingDelete: (state) => state.status.delete.loading,
    }),

    headers() {
      return [
        { text: "#", value: "id" },
        { text: "Nome", value: "name" },
        { text: "Email", value: "email" },
        { text: "Ações", value: "actions" },
      ];
    },
  },

  methods: {
    ...mapActions({
      getAll: "usuario/getAll",
      delete: "usuario/delete",
    }),

    onClickCreate() {
      this.$router.push({
        name: "UsuarioCreate",
      });
    },

    onClickEdit(item) {
      this.$router.push({
        name: "UsuarioEdit",
        params: {
          id: item.id,
        },
      });
    },

    onClickDelete(item) {
      this.deleteItem = item;
      this.deleteDialog = true;
    },

    onDelete() {
      this.delete(this.deleteItem).then(() => {
        this.deleteItem = {};
        this.deleteDialog = false;
      });
    },
  },
};
</script>
