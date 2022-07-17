<template>
  <section class="">
    <div class="card">
      <div class="card-image">
        <div class="skeleton skeleton-img"></div>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <div class="skeleton skeleton-medium"></div>
          </div>
        </div>

        <div class="content">
          <div class="skeleton skeleton-medium"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'SkeletonCard',
}
</script>

<style>

.skeleton {
    background-color: #e2e2e2;
    animation: loading .5s infinite alternate;
}
.skeleton-img {
  width: 100%;
  height: 200px;
}

.skeleton-medium {
  width: 100%;
  height: 40px;
}

.skeleton-small {
  width: 100%;
  height: 15px;
}

@keyframes loading {
  from {background-color:#b8b3b3;}
  to {background-color: hsl(0, 5%, 78%);}
}

</style>
