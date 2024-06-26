<template>
<q-card to="./TeamsPage.vue"
class="my-card"
:style="$q.screen.gt.sm ? 'width:5vw;' : 'width:20vw; margin-top:1.5vh'">
    <img :src=logo alt="">
    <q-tooltip>
        {{ nom }}
    </q-tooltip>
</q-card>

</template>
<script>

export default{
    name:'GameComponent',
    props: {
    nom: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    }
}
}
</script>

<style scoped>
.my-card {
  transition: transform 0.3s;
  margin: 0.5vw;
}
img {
  height: 5vw;
  object-fit: cover;
}
.my-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 50px rgba(122, 235, 255, 0.5);
}
</style>
