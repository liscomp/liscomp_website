<template>
  <div class="hamburger" id="hamburger-1">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </div>
</template>

<script>

</script>

<style>
.hamburger .line{
  width: 25px;
  height: 2px;
  background-color: black;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger:hover{
  cursor: pointer;
}

/* ONE */

#hamburger-1.is-active .line:nth-child(2){
  opacity: 0;
}

#hamburger-1.is-active .line:nth-child(1){
  -webkit-transform: translateY(10px) rotate(22.5deg);
  -ms-transform: translateY(10px) rotate(22.5deg);
  -o-transform: translateY(10px) rotate(22.5deg);
  transform: translateY(10px) rotate(22.5deg);
}

#hamburger-1.is-active .line:nth-child(3){
  -webkit-transform: translateY(-10px) rotate(-22.5deg);
  -ms-transform: translateY(-10px) rotate(-22.5deg);
  -o-transform: translateY(-10px) rotate(-22.5deg);
  transform: translateY(-10px) rotate(-22.5deg);
}
</style>
