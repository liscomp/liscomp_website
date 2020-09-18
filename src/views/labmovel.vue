<template>
  <b-container>
    <b-breadcrumb class="p-0">
      <router-link :to="{ name: 'home' }">
        <font-awesome-icon icon="house-user" class="fas" />
        Home
      </router-link>
      <span class="divisoria">></span>
      <router-link class="active" :to="{ name: 'labmovel' }"
        >Laboratório Móvel</router-link
      >
    </b-breadcrumb>
    <img
      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221920%22%20height%3D%221200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20%25%7Bw%7D%20%25%7Bh%7D%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22fill%3Atransparent%3B%22%3E%3C%2Frect%3E%3C%2Fsvg%3E"
      alt="Blank image"
      width="1920"
      height="1200"
      class="img-fluid w-100 d-block"
      style="background-color:gray"
    />
  </b-container>
</template>

<script></script>

<style></style>
