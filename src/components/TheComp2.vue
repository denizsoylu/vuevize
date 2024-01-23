<template>
  <q-page>
    <q-page-sticky position="fixed"  >
      <q-header
        elevated
        style="background-color: white; color: black; width: 100vw; height: 9vh ; margin-top: 20px;"
      >
        <q-toolbar>
          <q-avatar size="50px">
            <RouterLink to="/Anasayfa"> <a href=""><img
              src="https://www.hpstore.com.tr/Data/EditorFiles/tasarim/hp-logo-black.svg"
              alt="HP Logo"
              style="width: 70px; height: 50px"
            /></a>
            </RouterLink>
          </q-avatar>

          <q-input
            dense
            placeholder="Ara..."
            v-model="searchQuery"
            style="border: none; margin-left: 2vw; width: 25vw"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

          <div
            class="q-gutter-xs q-ml-auto q-mr-none"
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 11vw;
            "
          >
            <q-btn flat dense round color="black" icon="headset" size="17px" />
            <q-btn
              flat
              dense
              round
              icon="account_circle"
              size="17px"
            >
              <q-popup-proxy style="width: 250px; height: 250px;">
                <div style="display: flex; flex-direction: column; ">
                  <q-banner style="text-align: center;">
                    HOŞGELDİNİZ
                  
                  </q-banner>

                  <div style="display: flex; justify-content: center;">
                  <q-btn style="background-color: blue; width: 150px; height: 50px; "
                    flat
                    text-color="white"
                    color="primary"
                    label="Üye GİRİŞİ"
                    class="popup-btn"
                  />
                  </div>
                  <q-banner style="text-align: center; ">
                    Üye Değil misiniz?
                  
                  </q-banner>
                  <div style="display: flex; justify-content: center;">
                    <RouterLink to="/UyeOl"> <q-btn style="border: 1px solid #2c3038; width: 150px; height: 50px;"
                        flat
                        text-color="black"
                        color="positive"
                        label="Üye Ol"
                        class="popup-btn" /></RouterLink>
                    </div>
                </div>
              </q-popup-proxy>
            </q-btn>

            <q-btn
              flat
              dense
              round
              color="black"
              icon="shopping_cart"
              size="17px"
            />
          </div>
        </q-toolbar>
      </q-header>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const searchQuery = ref('');

    return {
      searchQuery,
    };
  },
};
</script>
