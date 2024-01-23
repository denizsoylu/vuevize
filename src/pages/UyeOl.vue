<template>
    <q-page>
      <ThePage2></ThePage2>
      <div style="height: 1500px; width: 1500px; margin-left: 100px; margin-right: 100px; overflow: hidden;">
    <div style="float: left; width: 50%;">
        <img src="https://www.hpstore.com.tr/Data/EditorFiles/rdm/uye-kayit/uye-kayit-gorsel.jpg" alt="" style="width: 100%; height: auto;">
    </div>
    <div style="float: left; width: 50%;">
        <ThePage5 style="margin-top: -750px; margin-left: 0;"></ThePage5>
    </div>
</div>



   
      <FooterPage style="margin-top: 1750px;"> </FooterPage>
    </q-page>
  </template>
  
  <script setup lang="ts">
  import ThePage5 from 'src/pages/ThePage5.vue';
  import FooterPage from 'src/pages/FooterPage.vue';
  import ThePage2 from 'src/pages/ThePage2.vue';
</script>
  