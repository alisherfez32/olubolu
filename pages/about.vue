<template>
    <div class="container text-center">
        <div class="text text-center">
            <p class="p1">Olubolu - We’re the #1 second hand supplier.</p>
            <p>🙌Hello. Welcome. It’s a pleasure to see you in our platform😊</p>
            <p>You’re talking to… <b>Abdulloh, Michelle and Alisher!</b></p>
            <div class="introduce">
              <p><strong>Abdulloh</strong>- Salom guys! I’m Abdulloh, I am from Tajikistan and currently staying in Russia. I’m a software engineer at Olubolu. I’m the one who
               wrote all the codes to built this platform!👨‍💻</p>
              <p class="indon"><strong>Michelle</strong>- Hallooo guyss🥰.This is Michelle. I’m product designer at Olubolu. I’m the one who designed all the interfaces, blocks, the logo and
              fonts!😎 and then hand it over to Abdullo to make it come true! I’m from Indonesia!&#x1F1EE;&#x1F1E9; </p>
            </div>
            <p><strong>Alisher</strong>- Heyyy friend! It’s really awesome to see you reading this! I’m Alisher and I’m from Tajikistan!&#x1F1F9;&#x1F1EF;. At Olubolu, my role is to take care of
              my amazing team and expand our business. I’ll be the one talking to you and get the items delivered to your doorstep!😉
            </p>
            <div class="extra">
              <div class="vline">
                <p>We’re very passionate about selling 2nd hand products. We work 7 days a week, sometimes 16 hours a day to make this platform convenient, easy to use and give you the best service. We’re #1 second hand supplier!
              </p>
              </div>
            </div>
            <div class="choice">
              <p class="p1">You made the best choice</p>
              <p>Trading 2nd hand clothing is indeed the best and most profitable business. <b>Why? How?</b> It has a high profit margin, because you buy in KG andsell 1 by 1.
              </p>
              <div class="warn">
                <div><info /></div>
                <p><b>Let’s do calculation</b> : Ex. You buy 1 KG of Ladies cotton blouse for $1.61; + $0.4 shipping cost = $2; Now you’re paying $2 for 1 KG.
                and 1 KG has about 5 pcs inside. At the very very lowest, you can sell 1 piece for $1. 5pcs = $5. $5 - $2 = 3. <b>Now you made $3 with 1KG! 1000KG = $3000!</b></p>
              </div>
              <p>Of course this is just a hypothetical example. It’s different from country to country. However, We believe you can make even more
                With this in mind, We created this platform in order to make it easy for you to start your business ASAP.</p>
            </div>
            <hr>
            <div class="problem">
              <p class="p1">
                Problem - We’re solving
              </p>
              <p class="text-left">If you have already Googled Second hand supplier or Used clothes wholesale,
              I guarantee 100% you cannot find any supplier that provides you:
              </p>
                <div class="list text-left">
                <ul>
                  <li>Price list</li>
                  <li>Cheap prices</li>
                  <li>Low MOQ (Minimum order)</li>
                  <li>Fast shipping</li>
                  <li>Time to talk</li>
                </ul>
                </div>
              <p>
                First you will need to email them and get response in a week or so. Then, when you ask to see their price list, they will not show you! Another
                big headache. Until you get their prices you’ll be stressed out. Right?
              </p>
            </div>
            <hr>
            <div class="problem">
              <p class="p1">Solution - We’re providing</p>
              <p class="text-left">If you noticed, <a href="https://olubolu.com">Olubolu.com</a> is super easy-to-use!</p>
              <div class="list text-left">
                <ul>
                  <li>1 click and see all the Price lists!</li>
                  <li>As cheap as $0.65/KG</li>
                  <li>MOQ 100-200 KG for the first order!</li>
                  <li>Less than 1 month shipping (depending of country)</li>
                  <li>Fast process</li>
                  <li>Always happy to talk to you🙂</li>
                </ul>
              </div>
              <p>We have hundreds of price lists and different MOQs. You can easily find information about each batch, visualize the photos and videos as well.
                Now, Let’s see the order process:
              </p>
              <div class="list2 text-left">
                <ul>
                  <li>Add to cart products you want to buy</li>
                  <li>Submit using your WhatsApp number.</li>
                  <li>Talk with us to ask questions</li>
                  <li>Make Payment</li>
                  <li>Wait and Receive asap!</li>
                </ul>
              </div>
              <p>
                Second hand is the Easiest and most Profitable business
              </p>
              <p>| Enjoy your visit in our platform - Olubolu team</p>
            </div>
        </div>
    </div>
</template>

<script>
import info from '../assets/info.vue'
    export default {
      layout: "product",
      data() {
        return {
          title: "Oludolu | AboutUs"
        }
      },
      components: {
        info
      },
      head(){
        return {
          title: this.title,
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'Are you thinking to start a SECOND HAND BUSINESS?  We have all the SUPPORT you need. We are the #1 GRADE A USED CLOTHES, USED SHOES and USED BAGS wholesale supplier in bulk. Our CHEAP PRICES, LOW MOQ, LOTS OF OPTIONS and FAST SHIPPING is all you need to get your THRIFT STORE or SECOND HAND STORE BUSINESS up and running.'
            }
      ]
        }
      }

    }
</script>

<style lang="scss" scoped>
.indon {
  display: flex;
  flex-direction: row;
}

.container {
  .text{
    .extra {
    display: flex;
    margin-left: 50px;
    @media screen and (max-width: 400px){
    margin-left: 20px;
    }
    .vline{
    padding-left: 13px;
    border-left: 5px solid green;
    @media screen and (max-width: 400px){
     border-left: 3px solid green;
     padding-left: 8px;
     }
    height: 100%;
    }
   }
   .choice{
     .warn{
      //  border: 2px solid #3652cc;
      margin-bottom: 6px;
      padding: 2px;
      margin: 12px;
      background-color: rgba(75, 103, 231, 0.3);
      display: flex;
      flex-direction: row;
     }
   }
   .problem{
     .list{
       display: flex;
       flex-direction: column;
       justify-content: flex-start;
       margin-left: 20px;
     }
     .list2{
       display: flex;
       flex-direction: column;
       justify-content: flex-start;
       margin-left: 20px;
       ul{
         list-style: number;
       }
     }
   }
  }
}
hr{
  border: 1px solid rgba(128, 128, 128, 0.6);
  margin-bottom: 40px;
}
.p1{
  font-size: 28px;
  font-weight: bold;
  @media screen and (max-width: 400px){
    font-size: 17px;
    font-weight: bold;
  }
}
p{
  font-size: 16px;
}

</style>
