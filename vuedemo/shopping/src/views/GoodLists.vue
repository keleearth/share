<template>
    <div>
      <nav-header></nav-header>
      <nav-bread></nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price" v-on:click="reSort">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" v-on:click="showPricePop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd >
                  <a href="javascript:void(0)" v-on:click="setPriceChecked('All')" v-bind:class="{'cur':priceChecked=='All'}">All</a>
                </dd>
                <dd v-for="(item,index) in priceLists">
                  <a href="javascript:void(0)" v-on:click="setPriceChecked(index)" v-bind:class="{'cur':priceChecked==index}">{{item.lowPrice}}-{{item.highPrice}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="(item,index) in goodLists">
                    <div class="pic">
                      <a href="#"><img v-lazy="'/static/image/'+item.productImage" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.productPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" v-on:click="closeFilterPop"></div>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
    import './../assets/css/base.css';
    import './../assets/css/product.css';
    import './../assets/css/login.css';
    import './../assets/css/checkout.css';
    import NavHeader from '@/components/Header';
    import NavFooter from '@/components/footer';
    import NavBread from "../components/Bread";
    import axios from "axios";
    export default {
        name: "GoodLists",
        data(){
            return {
                goodLists:[],
                priceLists:[
                    {lowPrice:0,highPrice:100},
                    {lowPrice:100,highPrice:500},
                    {lowPrice:500,highPrice:1000},
                    {lowPrice:1000,highPrice:2000}
                    ],
                priceChecked:'All',
                overLayFlag:false,  //遮罩
                filterBy: false,   //价格弹出层

                pageSize:12,
                pageNo:1,
                sortFlag:false    //true 升序 false降序

            }
        },
        components:{
            NavHeader:NavHeader,
            NavFooter:NavFooter,
            NavBread:NavBread
        },
        mounted(){
            this.getGoodList();
        },
        methods:{
            getGoodList(){
                let param= {
                    pageSize:this.pageSize,
                    pageNo:this.pageNo,
                    sortFlag:this.sortFlag? 0:-1
                };
                axios.get("/goods",{
                    params:param
                }).then(res=>{
                    this.goodLists = res.data.list
                    console.log(res.data);
                })
            },
            showPricePop(){
                this.overLayFlag = true;  //遮罩\
                this.filterBy = true
            },
            setPriceChecked(index){
                this.priceChecked=index;
                this.closeFilterPop();
            },
            closeFilterPop(){
                this.overLayFlag=false;
                this.filterBy=false
            },
            reSort(){
                this.sortFlag = !this.sortFlag;
                this.getGoodList();
            }
        }
    }
</script>

<style scoped>

</style>
