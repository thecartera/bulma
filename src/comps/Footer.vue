<template>
<footer class="footer">
  <div class="container">
    <div class="level">
      <!-- Logo -->
      <div class="level-left">
        <div class="level-item">
          <figure class="image is-96x96">
            <img src="@/assets/imgs/logo.png">
          </figure>
        </div>
        <div class="level-item">
          <div class="has-text-centered-mobile">
            <p class="title is-spaced">cartera</p>
            <p class="subtitle">Acompanhe carteiras de amigos</p>
          </div>
        </div>
      </div>

      <!-- Icons -->
      <div class="level-right">
        <div class="level-item">
          <div>
            <p class="has-text-centered-mobile has-text-weight-bold">
              Siga-nos
            </p>
            <a href="https://www.facebook.com/cartera.com.br" class="has-text-grey-dark">
              <span class="icon is-large">
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </span>
            </a>
            <a href="https://www.instagram.com/cartera.com.br/" class="has-text-grey-dark">
              <span class="icon is-large">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </span>
            </a>
            <a href="https://www.linkedin.com/company/acartera/" class="has-text-grey-dark">
              <span class="icon is-large">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </span>
            </a>
<!--        <span class="icon is-large">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </span>
            <span class="icon is-large">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </span>-->
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="container">
    <div class="level">
      <!-- Copyright -->
      <div class="level-left">
        <p class="level-item"> &copy; 2021 | Todos os direitos reservados </p>
      </div>

      <!-- Links -->
      <div class="level-right">
        <a class="level-item"> Home </a>
        <a class="level-item">
          <router-link to="/settings">
            Política de privacidade
          </router-link>
        </a>
        <a class="level-item">
          <router-link to="/settings">
            Termos de uso
          </router-link>
        </a>
        <a href="https://www.linkedin.com/in/gmbueno/" class="level-item"> Contato </a>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
