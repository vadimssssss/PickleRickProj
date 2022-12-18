<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="About The Rick and Morty SPA"/>
    <section class="about">
      <div class="container">
        <h2 class="title">What is this?</h2>
        <p>The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.</p>
        <h2 class="title">Who are you?</h2>
        <p>I`m <a class="link" href="https://t.me/Ghost_Of_Singularity">Ghost of Singularity</a>, a guy who likes to develop things, the "Rick and Morty data scientist" and hardcore fan.</p>
        <h2 class="title">Copyright?</h2>
        <p>Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without claim of ownership and belong to their respective owners.</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.about {
  margin-top: 30px;
  .title {
    color: rgb(92, 41, 124);
  }
  p {
    margin-bottom: 15px;
    color: #606266;
    font-size: 20px;
  }
}
</style>
