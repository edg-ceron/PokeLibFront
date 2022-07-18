<template>
  <section class="login hero is-fullheight is-primary">
    <div class="hero-body main-login">
      <div class="container columns container-login">
        <div class="column is-12-mobile is-6-is-desktop is-hidden-touch">
          <div class="img-main"></div>
        </div>
        <div class="column is-12-mobile is-6-desktop is-flex is-align-items-center container-form">
          <form
              @submit.prevent="onLogin"
              class="columns is-multiline is-full-width"
            >
              <div class="column is-12 login-icon mt-6-mobile is-flex is-justify-content-center">
                <img src="/pokeball.png" alt="Logo">
                <p class="title">PokeLib</p>
              </div>
              <h1 class="subtitle column is-12 has-text-centered has-text-white is-size-3">Inicio de sesion</h1>
              <div class="column is-12 field">
                <input class="input"
                  type="text"
                  name="user"
                  placeholder="Usuario"
                  autofocus=""
                  autocomplete="off"
                  v-model="user"
                  >
              </div>
              <div class="column is-12 field">
                  <input
                    class="input"
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    v-model="password"
                  >
                </div>
                <div class="column is-12" v-if="incorrectUser">
                  <p class="has-text-danger has-text-centered">Usuario y/o contraseña incorrecta</p>
                </div>
                <div class="column is-12">
                  <button class="button is-block is-fullwidth is-success" :class="{'is-loading': loadingLoading}" type="susubmitbt">Ingresar</button>
                </div>
                <div class="column is-12 has-text-centered">
                  <router-link class="" :to="{ name: 'proximamente' }">¿Olvidaste tu contraseña?</router-link>
                </div>
                <div class="column is-12 has-text-centered">
                  <router-link to="proximamente">Registrarse</router-link>
                </div>
            </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  data () {
    return {
      loadingLoading: false,
      user: "",
      password: "",
      incorrectUser: false
    }
  },
  beforeMount () {
    if (localStorage.getItem("token")) this.$router.push({name: "list"})
  },
  methods: {
    ...mapActions(['login']),
    async onLogin () {
      this.loadingLoading = true
      const data = {
        user: this.user,
        password: this.password
      }
      let response = await this.login(data)
      if (response?.status) {
        this.loadingLoading = false
        return this.incorrectUser = true
      }
      localStorage.setItem("token", response.data.token)
      this.$router.push({name: "list"})
    }
  },
  watch: {
    user(newValue, oldValue) {
      if (this.incorrectUser && newValue !== oldValue) {
        this.incorrectUser = false
      }
    },
    password(newValue, oldValue) {
      if (this.incorrectUser && newValue !== oldValue) {
        this.incorrectUser = false
      }
    }
  }
}
</script>


<style scoped>
.main-login {
  display: flex;
  flex-direction: column;
}
.container-login {
  min-height: 80vh;
  /* background: #232C3F; */
  background-image: linear-gradient(108.6deg, rgb(76, 40, 54) -11%, rgb(17, 20, 29) 19%, rgb(35,44,63) 91.7%);
  border-radius: 40px;
  width: 100%;
}

.img-main {
  background-image: url(/Mewtwo.webp);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  height: 95%;
  width: auto;
  -webkit-animation: bounce-down 3s linear infinite;
  animation: bounce-down 3s linear infinite;

}

.container-form {
  border-left: 1px solid #f5f5f51f;
}

.login-icon {
  justify-content: c;
}

.login-icon img{
  height: 50px;
}

@media screen and (max-width: 768px) {
  .container-form{
    border-left: 0px;
    display: flex;
    align-items: center;
  }
}
</style>

