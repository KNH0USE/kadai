<template>
<div id="Ramenitems">
<b-link href="/">ログインページへ</b-link>

<h4>人気麺類ラインナップ</h4>

<b-card-group>
<b-col md="4" cols="6" class="mb-4" v-for="item in itemList" :key="item.name">
<b-card :img-src="item.img" :title="item.title" img-top>
  <b-card-text>{{item.text}}</b-card-text>
  <b-button variant="primary">Go somewhere</b-button>
</b-card>
</b-col>
</b-card-group>


</div>
</template>
<script>
export default {
  data(){
    return{
  itemList:[
        {
          img:"img/E001.jpg",
          title:"CARD TITLE1",
          text:"Some quick example text to build on the card and make up the bulk of the card's content.",
        },
        {
          img:"img/E002.jpg",
          title:"CARD TITLE2",
          text:"Some quick example text to build on the card and make up the bulk of the card's content.",
        },
        {
          img:"img/E003.jpg",
          title:"CARD TITLE3",
          text:"Some quick example text to build on the card and make up the bulk of the card's content.",
        },
        {
          img:"img/E004.jpg",
          title:"CARD TITLE4",
          text:"Some quick example text to build on the card and make up the bulk of the card's content.",
        },
        {
          img:"img/E005.jpg",
          title:"CARD TITLE5",
          text:"Some quick example text to build on the card and make up the bulk of the card's content.",
        }]
      }}
      }
</script>