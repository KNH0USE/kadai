<template>
<div id="shopInfo">

<b-link href="/">ログインページへ</b-link>
<!-- 外枠↓ -->
<b-card-group>
<b-col md="4" cols="6" class="mb-4" v-for="iL in itemList" :key="iL.id">
<b-card :img-src="iL.img" :title="iL.name" img-top>
<b-card-text>{{iL.explanation}}</b-card-text>

<b-button variant="primary"  @click="$bvModal.show('modal'+iL.shop_id)">ショップ情報</b-button>
<!-- ↑ボタン押下でモーダル飛ぶ仕組み解説＝＞モーダルの引数に('変数'と連結させる値) -->
</b-card>
</b-col>
</b-card-group>

<!--モーダル中身↓-->
<div v-for="(sL,index) in shopList" :key="index"><!-- キーとv-forは紐付け必須 -->
<b-modal :id="'modal'+index" title="ショップ情報" ok-only>
  <!-- ボタン押下された場合の解説＝＞モーダル詳細のidをv-bindさせる。中身は先ほどの変数+indexを-->
<b-card-img :src="sL.img"></b-card-img>
<p>店名/{{sL.name}}</p>
<p>連絡先/{{sL.tel}}</p>
<p>住所/{{sL.addr}}</p>
<p>価格帯/{{sL.price}}</p>
<p>休業日/{{sL.holiday}}</p>
<p>営業時間/{{sL.open}}</p>
<p>{{sL.explanation}}</p>
</b-modal>
</div>


</div>
</template>
<script>
export default {
  name: 'shopInfo',
  data(){
    return{
itemList: {
1: {name: "担々麺", img: "img/E001.jpg", explanation: "820円。13種類の香辛料を使用してピリっとした味が癖になりまた食べたくなります。", shop_id: 2 },
2: {name: "チャーシューメン", img: "img/E002.jpg", explanation: "980円。柔らかな肉と秘伝のスープでコクとまろやかな風味を活かし、麺はかためで食べ応えのある触感になっています。", shop_id: 2 },
3: {name: "味噌ラーメン", img: "img/E003.jpg", explanation: "840円。野菜たっぷりの食べ応えのあるラーメン。野菜不足の方にはぴったりのラーメンです。", shop_id: 2 },
4: {name: "ミートソース", img: "img/E004.jpg", explanation: "960円。チーズたっぷり肉感のある粗目のミンチを使ったこだわりのソース。ぜひ食べてみたい逸品です。", shop_id: 1 },
5: {name: "ペペロンチーノ", img: "img/E005.jpg", explanation: "800円。茹で加減を自由に選べるお客様第一。自分にあったパスタを食べたいならこのメニューで間違いなし。", shop_id: 3 },
},
shopList: {
1: { name: "〇〇カフェ", img: "img/S001.jpg", explanation: "店内は広々とした空間が特徴であり、解放感によるリラックス効果がある。ランチやちょっとした休憩時間には有意義な時間を過ごせること間違いなし。", category: "カフェ", update: "2021-04-06", tel: "073-222-2222", addr: "田中街4丁目-2", open: "7:00～15:00", holiday: "年中無休", price: "400円～" ,show:true},
2: { name: "△△ラーメン", img: "img/S002.jpg", explanation: "低価格で注文からラーメンが席に届く時間が非常に短く、時間の無いサラリーマンにはうってつけのお店。", category: "ラーメン", update: "2021-08-14", tel: "073-222-2222", addr: "田中街4丁目-2", open: "17:00～25:00", holiday: "火曜日", price: "800円～",show:true },
3: { name: "××カフェ", img: "img/S003.jpg", explanation: "独特な世界観のある店内のレイアウトが特徴。冒険してみたいかたはぜひお立ち寄りください。", category: "カフェ", update: "2021-05-06", tel: "073-222-2234", addr: "田中街4丁目-3", open: "7:00～15:00", holiday: "年中無休", price: "400円～",show:false },
}
    }},
}
</script>
