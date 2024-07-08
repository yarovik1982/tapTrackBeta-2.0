<script setup>
const props = defineProps({
  cssClass:String,
  content:String,
  animateClass:String
})
</script>
<template>
      <div :class="['note', cssClass ]">
      <div class="note-content">{{ content }}</div>
      <div class="note-progress mt-1">
        <div class="note-progress-track">
          <div :class="['note-progress-thumb', animateClass]"></div>
        </div>

      </div>
    </div>
</template>
<style scoped >
.note{
  border-radius: 8px;
  position: absolute;
  top: 80px;
  /* left: 100%; */
  right: 320px;
  padding: 20px;
  width: 300px;
  height: 80px;
  display: grid;
  place-content: center;
  color: #ccc;
  transition:transform .4s linear;
  z-index: 10000000;
}
.note.info{
  background: rgb(13,202,240);
  color: #000;
  animation: show  linear 2s;
}
.note.warning{
  background: rgb(255,193,7);
  color:#000;
  animation: show  linear 2s;
}
.note.danger{
  background: rgb(220,53,69);
  animation: show  linear 2s;
}
.note.success{
  background: rgb(25,135,84);
  
  animation: show  linear 2s;
}

@keyframes show{
  0% {
    left: 100%;
  }
  20% {
    left: calc(100% - 320px);
  }
  80% {
    left: calc(100% - 320px);
  }
  100% {
    left: 100%;
  }
}
.note-progress {
  padding: 4px 0;
  width: 100%;
  transform: translateX(-50%);
}

.note-progress-track {
  position: relative;
  overflow: hidden;
  height: 5px;
  border-radius: 5px;
  background-color: #ccc;
  width: 200%;
}
.note-progress-thumb {
  position: absolute;
  width: 100%;
  height: 5px;
  left: -100%;
  background: blueviolet;
  z-index: 10;
}
.note-progress-thumb.animate{
  animation: width  linear 1.2s;
  left: 0;
  transition-property: left ;
  transition-delay: 0.4s;
  transition-duration: 1.2s;
  transition-timing-function: linear;
}
/* @keyframes width{
  0%{
    left: -100%;
  }
  100%{
    width: 0;
  }
} */
</style>