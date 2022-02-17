<template>
<div>
  <loading v-show="loading"/>
  <div class="container">
    <navbar />
    <div v-if="!Data.length" class="nothing text-center">
      <p class="p1">There is nothing on Store!</p>
      <p class="p1"><nuxt-link to="/pricelists">Go to Products</nuxt-link></p>
    </div>
    <div v-else>
    <h2>My Orders: </h2>
    <table class="table table-striped">
      <caption align="top">You can submit here!</caption>
      <thead class="thead-dark text-center">
        <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Delete</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="(item) of Data" :key="item.id">
        <td>{{item.fields.Name}}</td>
        <td>{{item.fields.prize}}</td>
        <th class="quantity">
        <fa class="fa"
        @click.prevent="Decrement(item.id)"
        icon="minus" />
        {{item.fields.quantity}}
        <fa class="fa"
         @click.prevent="Increment(item.id)"
         icon="plus" />
        </th>
        <td><button class="btn btn-default"
        @click.prevent="deleteCard(item.id)">
        Delete</button></td>
        </tr>
      </tbody>
    </table>
    <div class="address">
      <h1>Address</h1>
      <div class="input">
        <p>Name</p>
        <input
        v-model="name"
         class="form-control" type="text">
      </div>
      <div class="input">
        <p>Country</p>
        <input
        v-model="country"
        class="form-control" type="select" />
      </div>
      <div class="input">
        <div class="input_inside">
          <div><p>City</p>
          <input
          v-model="city"
          class="form-control" type="text"></div>
          <div><p>Post Code</p>
          <input
          v-model="postCode"
          class="form-control" type="text"></div>
        </div>
      </div>
      <div class="input">
        <p>Full Address</p>
          <textarea
            cols="10"
            rows="2"
            class="form-control"
            placeholder="Hmmm ... :)"
            v-model="full"
          ></textarea>
      </div>
    </div>
    <div class="total text-center">
      <p class="p2">Total: </p>
      <p class="p2">{{TotalCost}}$</p>
      <input v-model="number" placeholder="Your WhatsApp number" class="input" type="number">
      <button @click.prevent="Submit" class="btn btn-dark">Submit.</button>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import "firebase/compat/auth";
import db from '../../plugins/firebaseinit.js';
import moment from 'moment';
export default {
  data(){
    return {
      number: "",
      loading: null,
      name: '',
      city: "",
      postCode: "",
      full: "",
      country: "",
      title: 'Olubolu | MyCart'
    }
  },
  head(){
    return {
      title: this.title,
      meta : [
        {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
      ]
    }
  },
  methods: {
    ...mapActions({
      deleteCart: "products/shops/DeleteCart",
      Decrement1: "products/shops/Decrement",
      Increment1: "products/shops/Increment",
    }),
    Decrement(index){
      this.Decrement1(index)
    },
    Increment(index){
      this.Increment1(index)
    },
    deleteCard(id){
      this.deleteCart(id)
    },
    async Submit(){
        if(this.number !== ""){
          this.loading = true;
          const Time = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss') ;
          let Result = []
          this.Data.map(item => {
            Result.push(item.fields)
          });
          const dataBase = db.collection("Zhejiang").doc();
          await dataBase.set({
            Result: Result,
            Total: this.TotalCost,
            date: Time,
            PhoneNumber: this.number,
            name: this.name,
            city: this.city,
            full: this.full,
            postCode: this.postCode,
            country: this.country,
          });
          await this.Data.splice(0, this.Data.length);
          await this.$router.push('/submitted')
        }else{
          this.loading = false;
          window.alert("Please Enter Your PhoneNumber to Contact with us!!")
        }
    }
  },
  mounted(){
  },
  computed: {
    ...mapGetters({
      Data: "products/shops/productData"
    }),
    TotalCost(){
      let result = []
      if(this.Data.length){
        for(let item of this.Data){
          result.push(item.fields.prize * item.fields.quantity)
        }
        result = result.reduce((sum, el) =>{
          return sum+el;
        })
      return result;
      } else {
        return 0;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.nothing{
  color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .p1{
    font-size: 32px;
  }
}
.total{
  // position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #73ff00;
  color: #fff;
  font-size: 20px;

  .input{
    height: 42px;
    font-size: 14px;
    margin-left: 5px;
    margin-top: -10px;
    @media  screen and (max-width: 400px){
      width: 100px;
    }
  }

  .p2{
    color: rgb(0, 0, 0);
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    @media screen and (max-width: 400px){
      margin-left: 5px;
    }
  }
  button{
    margin-left: 20px;
    margin-top: -10px;
    font-size: 16px;
  }
}
.fa{
  color: red;
  margin-right: 3px;
  margin-left: 3px;
  cursor: pointer;
  width: 18px;
  height: 18px;

}
.quantity{
  font-size: 22px;
}
.address{
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;

  .input{
    display: flex;
    flex-direction: column;
    p{
      font-size: 20px;
    }
    .input_inside{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 5px;
      padding: 8px;
      p{
        margin-right: 10px;
      }
    }
  }
}
textarea {
  outline: none;
  font-size: 18px;
  overflow: auto;
  -moz-appearance: none;
  resize: none;
  display: flex;
  border: 2px solid #435ba8;
}
</style>
