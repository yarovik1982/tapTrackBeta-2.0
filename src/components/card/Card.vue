<script setup>
import ImgCard from '@/ImgCard.vue'
import RowCard from '@/RowCard.vue'
</script>
<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <ImgCard
         :divClass="['col-4']"
         :imageClass="['rounded', 'rounded-2' ]"
         :src="'src/assets/images/image-5.png'"
         
      ></ImgCard>
      <!-- <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="..." />
      </div> -->
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title">Заголовок карточки</h5>
          <p class="card-text">
            Это более широкая карточка с вспомогательным текстом ниже в качестве
            естественного перехода к дополнительному контенту. Этот контент
            немного длиннее.
          </p>
          <p class="card-text">
            <small class="text-body-secondary"
              >Последнее обновление 3 мин. назад</small
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
