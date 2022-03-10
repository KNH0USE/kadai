<template>
<div id="login">

<div>
  <b-card no-body style="max-width: 1000px; margin:0 auto;">
    <b-row no-gutters>
      <b-col md="6">
       <b-card-img :src="require('../assets/G002.jpg')"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text class="fs-3">課題一覧ページ</b-card-text>
          <b-form>
<!-- label-colsとはレスポンシブ対応されてるサイズ -->
            <b-form-group label-cols-sm="3" label="ユーザーID" class="fw-bold">
            <b-form-input type="text" placeholder="Enter ID" required></b-form-input>
            </b-form-group>

            <b-form-group label-cols-sm="3" label="パスワード" class="fw-bold">
            <b-form-input type="password" placeholder="Enter password" required></b-form-input>
            </b-form-group>

          <b-button type="submit" variant="primary" class="m-1">ログイン</b-button>
          <b-button variant="danger" href="/Ramenitems" class="m-1">課題２へ</b-button>
          <b-button variant="secondary" href="/shopInfo" class="m-1">課題３へ</b-button>
          <!-- <b-button variant="success" href="/zihanki" class="m-1">自販機へ</b-button> -->

          </b-form>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>

</div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{}}}
</script>