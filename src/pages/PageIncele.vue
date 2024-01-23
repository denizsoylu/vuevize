<template>
    <q-page>
        <ThePage2></ThePage2>
        <div style="display: flex; height: 1100px; margin-top: -750px;">
            <div style="background-color: rgb(255, 255, 255);  width: 1100px"></div> 
            <RouterLink to="/Sepet">
                <q-btn style="background-color: rgb(22, 93, 186); color: white; margin-top: 430px; width: 400px; font-size: 14px; height: 50px;" label="SEPETE EKLE"/>
            </RouterLink>
        </div>
        <div style="height: 900px;"></div>


        <FooterPage style="margin-top: 750px;"> </FooterPage>
    </q-page>
  </template>
  
  <script setup lang="ts">
  import ThePage2 from 'src/pages/ThePage2.vue';
  import FooterPage from './FooterPage.vue';
  import TheNewsFormPage from './TheNewsFormPage.vue';
  </script>
  