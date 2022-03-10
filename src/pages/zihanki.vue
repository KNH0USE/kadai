<template>
<div id="zihanki">
<b-link href="/">ログインページへ</b-link><br><br><br><br>

<input v-model="disp">

<p>硬貨,紙幣をお入れください</p>

<b-button @click="coin10">￥10</b-button>
<b-button @click="coin50">￥50</b-button>
<b-button @click="coin100">￥100</b-button>
<b-button @click="coin500">￥500</b-button>
<b-button @click="coin1000">￥1000</b-button>
<b-button variant="primary" @click="clr">返金</b-button><br><br>

<b-button @click="getWater" variant="outline-primary" :disabled="water">お水90円</b-button>
<b-button @click="getTea" variant="outline-primary" :disabled="tea">お茶100円</b-button>
<b-button @click="getVitamin" variant="outline-primary" :disabled="Vitamin">デカビタ330円</b-button>
<b-button @click="getMilktea" variant="outline-primary" :disabled="milktea">ミルクティ500円</b-button>
<b-button @click="getCoffe" variant="outline-primary" :disabled="coffe">最高級コーヒー1000円</b-button><br>

<!-- ↓一定額投入すると出現タイプ -->
<!-- <span v-for="drink in drinkData" :key="drink.id">
    <span v-if="drink.price <= disp ">
    <b-button @click="thankU" variant="outline-primary">{{drink.name}}</b-button>
    </span>
</span> -->


</div>
</template>

<script>
const price90 = 90
const price100 = 100
const price500 = 500
const price1000 = 1000
const price330 = 330

const water = '水'
const tea = 'お茶'
const milktea = 'ミルクティ'
const coffe = '最高級コーヒー'
const Vitamin = 'デカビタ'

export default {
  name: 'zihanki',
  data(){
    return{
      disp:0,
    }},
  method:{
    coin10(){/* 10円 */
       this.calc(10)
    },
    coin50(){
       this.calc(50)
    },
    coin100(){
       this.calc(100)
    },
    coin500(){
       this.calc(500)
    },
    coin1000(){
       this.calc(1000)
    },
    calc(coin) {	/* 加算 */
       this.disp += coin
    },
    clr(){/* 返金 */
       this.disp = 0
    },
    getWater(){
        this.getDrink(water,price90)
    },
    getTea(){
        this.getDrink(tea,price100)
    },
    getVitamin(){
        this.getDrink(Vitamin,price330)
    },
    getMilktea(){
        this.getDrink(milktea,price500)
    },
    getCoffe(){
        this.getDrink(coffe,price1000)
    },
    getDrink(name,price){/* 購入ものアラート表記，からの減算 */
        alert(`${name}を購入`),
        this.disp -= price
    },},
    
    
    
    
    
    }
</script>
