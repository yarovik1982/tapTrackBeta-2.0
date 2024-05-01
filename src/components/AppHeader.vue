<script setup></script>
<template>
  <nav
    id="topPanel"
    class="navbar navbar-expand navbar-dark bg-dark position-fixed w-100"
    style="z-index: 10"
  >
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img src="../assets/images/Layer1.svg" alt="BEER" />
        <strong style="margin-left: 20px">Tap</strong><span>Treck</span>
      </RouterLink>
      <div
        class="collapse navbar-collapse d-flex justify-content-between"
        id="navbarUnCollapsed"
      >
        <ul class="navbar-nav flex-grow-1">
          <form action="#" class="form px-3 w-100" role="search">
            <div class="input-group input-group-sm">
              <input
                style="
                  border-top-left-radius: 20px;
                  border-bottom-left-radius: 20px;
                "
                type="search"
                class="form-control form-search-input border border-3 border-warning"
                placeholder=""
                aria-label="Имя пользователя"
                aria-describedby="basic-addon1"
              />
              <button
                class="btn btn-warning text-white"
                type="button"
                id="button-addon1"
                style="
                  border-top-right-radius: 20px;
                  border-bottom-right-radius: 20px;
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  />
                </svg>
              </button>
            </div>
          </form>
        </ul>
        <div class="buttons ms-3">
          <button class="btn btn-warning text-white btn-sm text-capitalise">
            Авторизация
          </button>
          <button
            class="btn btn-warning text-white btn-sm text-capitalize ms-1"
          >
            Регистрация
          </button>
        </div>
        <div class="buttons ms-3">
          <button class="btn btn-warning btn-sm text-white text-capitalize">
            выход
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped></style>
