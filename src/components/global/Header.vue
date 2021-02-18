<template>
  <div class="header">
    <b-container class="d-flex justify-content-between align-items-center">
      <div class="logo">Vue</div>
      <ul class="">
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>

        <router-link to="/blog" tag="li">
          <a>
            Blog
          </a>
        </router-link>

        <router-link to="/about" tag="li">
          <a>
            About
          </a>
        </router-link>

        <router-link to="/help" tag="li">
          <a>
            Help
          </a>
        </router-link>
      </ul>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;

  .logo {
    font-size: 24px;
    padding: 20px;
  }

  ul {
    display: flex;
    margin: 0;

    @media (max-width: 500px) {
      flex-direction: column !important;
    }

    li {
      padding: 20px;
      display: flex;
      align-items: center;

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          color: #ccc;
        }
      }
    }
  }
}
</style>
