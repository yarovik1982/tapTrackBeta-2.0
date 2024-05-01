<script setup>
import FavoriteIcon from '../components/UI/FavoriteIcon.vue'
</script>
<template>
  <div class="card mb-3 border-2 border-warning bg-opacity-50 bg-white">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title">Заголовок карточки</h5>
            <favorite-icon></favorite-icon>
          </div>
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
