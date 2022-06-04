<template>
  <div class="HomePage">
    <section class="HomePage-card">
      <div class="HomePage-cardPic">
        <img src="@/assets/ej.jpeg" alt="Esteban Jelicich" />
      </div>
      <div class="HomePage-cardText">
        <h1>Esteban Jelicich</h1>
        <h2>Front-end developer</h2>
        <p>
          ...with over 8 years hands-on exeprience in web application and
          website development in enterprise as well as start-up size companies.
          Interested in latest technologies, good practices and agile
          methodologies.
        </p>
        <div class="HomePage-actions">
          <a href="https://github.com/jelicich" target="_blank">Github</a>
          /
          <a href="https://www.linkedin.com/in/ejelicich/" target="_blank">
            Linkedin
          </a>
        </div>
      </div>
    </section>
    <section class="HomePage-pinnedRepos">
      <h1>Latest repos</h1>
      <article class="HomePage-repo" v-for="(repo, i) in pinnedRepos" :key="i">
        <h1>{{ repo.node.name }}</h1>
        <p>{{ repo.node.description }}</p>
        <a :href="repo.node.url" target="_blank">View repo</a>
      </article>
    </section>
  </div>
</template>

<script>
import GithubService from "@/services/Github.service";

export default {
  name: "HomePage",

  data() {
    return {
      pinnedRepos: [],
    };
  },

  async mounted() {
    const response = await GithubService.getPinnedRepos();
    this.pinnedRepos = response.user.pinnedItems.edges;
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.HomePage {
  padding-left: $gap * 2;
  padding-top: $gap * 2;

  &-card {
    align-items: center;
    display: flex;
    margin-bottom: $gap * 2;
  }

  &-cardPic {
    border: 1px solid $gray-dark;
    border-radius: 50%;
    height: 150px;
    margin-right: $gap;
    max-height: 150px;
    max-width: 150px;
    min-height: 150px;
    min-width: 150px;
    overflow: hidden;

    img {
      flex: 1;
      height: 150px;
      width: 150px;
    }
  }

  &-cardText {
    // border-left: 20px solid rgba(0, 0, 0, 0.3);
    padding-left: 5px;

    p {
      border-left: 1px solid $gray-dark;
      margin-bottom: 0;
      padding-left: $gap;
    }
  }

  &-repo {
    &:after {
      content: "---";
      display: block;
    }

    h1 {
      color: $green;
    }

    p {
      border-left: 1px solid $gray-dark;
      margin-bottom: 0;
      padding-left: $gap;
    }
  }
}
</style>
