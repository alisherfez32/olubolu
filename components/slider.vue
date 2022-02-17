<template>
  <div>
        <div class="container">
        <div id="fer" class="slide">
          <h3>Batch 1</h3>
        </div>
        <div id="lambo" class="slide">
          <h3>Batch 2</h3>
        </div>
        <div id="bmw" class="slide">
          <h3>Batch 3</h3>
        </div>
        <!-- <div id="ford" class="slide">
          <h3>Batch 4</h3>
        </div> -->
        <div id="tesla" class="slide">
          <h3>Batch 4</h3>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
    slidesPlugin(activeSlide) {
      const slides = document.querySelectorAll('.slide');

      slides[activeSlide].classList.add('active');
      for (const slide of slides) {
        slide.addEventListener('click', () => {
          clearActiveClasses()
          slide.classList.add('active');
        })

      }

      function clearActiveClasses() {
        slides.forEach( (slide) => {
          slide.classList.remove('active');
        })
      }
    }
  },
  mounted() {
    this.slidesPlugin(3);
  }
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

.container {
  width: 100%;
  display: flex;
  padding: 0 20px;
}

#fer {
  background-image: url(../static/images/slide1.jpeg)
}
#lambo {
  background-image: url(../static/images/slide2.jpeg);
}
#bmw {
  background-image: url(../static/images/slide3.jpeg);
}
#tesla {
  background-image: url(../static/images/slide4.jpeg);
}
// #ford {
//   background-image: url(../static/images/logo.jpg);
// }


.slide {
  border-radius: 20px;
  cursor: pointer;
  color: #fff;
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: all 500ms ease-in-out;
    @media screen and (max-width: 400px){
    margin: 2px;
    height: 200px;
  }
  @media screen and (min-width: 1024px) and (min-height: 1320px) {
    /* iPad Pro */
    margin: 5px;
    height: 250px;
  }
  @media screen and (min-width: 1024px) and (max-height: 1310px) {
    /* Laptop */
   margin: 10px;
    height: 300px;
  }
}

.slide h3 {
  position: absolute;
  font-size: 24px;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.slide.active {
  flex: 10;
}

.slide.active h3{
   opacity: 1;
   transition: opacity 0.1s ease-in 0.4s;
}

</style>
