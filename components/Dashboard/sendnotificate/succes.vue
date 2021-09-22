<template>

 <div class="body-notificate">
<!--   <div class="success-checkmark">-->
<!--     <div class="check-icon">-->
<!--       <span class="icon-line line-tip"></span>-->
<!--       <span class="icon-line line-long"></span>-->
<!--       <div class="icon-circle"></div>-->
<!--       <div class="icon-fix"></div>-->
<!--     </div>-->
<!--   </div>-->
   <svg id="successAnimation" class="animated" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" >
     <path id="successAnimationResult" fill="#D8D8D8" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"/>
     <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" stroke-width="2" stroke-linecap="round" fill="transparent"/>
     <polyline id="successAnimationCheck" stroke="#979797" stroke-width="2" points="23 34 34 43 47 27" fill="transparent"/>
   </svg>
   <div class="text-notificate">
     <p>Успешно</p>
   </div>
 </div>
</template>

<script>
export default {
  name: "succes"
}
</script>

<style lang="scss" scoped>
.body-notificate{
  width: 350px;
  height: 300px;
  border-radius: 10px;
  background: #7d6aa5;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  z-index: 999999999999;
}
.text-notificate{
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  font-family: sans-serif;
  color: #fff;
}
.animated{
  margin: 93px 140px 12px;
}
.success-checkmark {
  width: 80px;
  height: 115px;
  margin: 70px auto 0;


  .check-icon {
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 50%;
    box-sizing: content-box;
    border: 4px solid #4CAF50;

    &::before {
      top: 3px;
      left: -2px;
      width: 30px;
      transform-origin: 100% 50%;
      border-radius: 100px 0 0 100px;
    }

    &::after {
      top: 0;
      left: 30px;
      width: 60px;
      transform-origin: 0 50%;
      border-radius: 0 100px 100px 0;
      animation: rotate-circle 4.25s ease-in;
    }

    &::before, &::after {
      content: '';
      height: 100px;
      position: absolute;

      transform: rotate(-45deg);
    }

    .icon-line {
      height: 5px;
      background-color: #4CAF50;
      display: block;
      border-radius: 2px;
      position: absolute;
      z-index: 10;

      &.line-tip {
        top: 46px;
        left: 14px;
        width: 25px;
        transform: rotate(45deg);
        animation: icon-line-tip 0.75s;
      }

      &.line-long {
        top: 38px;
        right: 8px;
        width: 47px;
        transform: rotate(-45deg);
        animation: icon-line-long 0.75s;
      }
    }

    .icon-circle {
      top: -4px;
      left: -4px;
      z-index: 10;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: absolute;
      box-sizing: content-box;
      border: 4px solid rgba(76, 175, 80, .5);
    }

    .icon-fix {
      top: 8px;
      width: 5px;
      left: 26px;
      z-index: 1;
      height: 85px;
      position: absolute;
      transform: rotate(-45deg);

    }
  }
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}

@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 45px;
  }
}

@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
}

//new
$circle-length: 151px;
$check-length: 36px;
@keyframes scaleAnimation {
  0% {
    opacity: 0;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes drawCircle {
  0% {
    stroke-dashoffset: $circle-length;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes drawCheck {
  0% {
    stroke-dashoffset: $check-length;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#successAnimationCircle {
  stroke-dasharray: $circle-length $circle-length;
  stroke: #FFF;
}

#successAnimationCheck {
  stroke-dasharray: $check-length $check-length;
  stroke: #FFF;
}

#successAnimationResult {
  fill: #FFF;
  opacity: 0;
}

#successAnimation.animated {
  animation: 1s ease-out 0s 1 both scaleAnimation;

  #successAnimationCircle {
    animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCircle,
    0.3s linear 0.9s 1 both fadeOut;
  }

  #successAnimationCheck {
    animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both drawCheck,
    0.3s linear 0.9s 1 both fadeOut;
  }

  #successAnimationResult {
    animation: 0.3s linear 0.9s both fadeIn;
  }
}

#replay {
  background: rgba(255,255,255,0.2);
  border: 0;
  border-radius: 3px;
  bottom: 100px;
  color: #FFF;
  left: 50%;
  outline: 0;
  padding: 10px 30px;
  position: absolute;
  transform: translateX(-50%);
  &:active {
    background: rgba(255,255,255,0.1);
  }
}

</style>
