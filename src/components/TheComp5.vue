<template>
  <q-page>
    <div class="container">
      <img src="https://www.hpstore.com.tr/Data/EditorFiles/rdm/uye-kayit/uye-kayit-gorsel.jpg">
      <div class="img-container">
        <img src="https://www.hpstore.com.tr/Data/EditorFiles/tasarim/hp-logo-black.svg">
      </div>
      <q-form @submit.prevent="submitForm" class="custom-form">
        <q-card>
          <q-card-section>
            <div class="form-1">Üye Kayıt</div>
          </q-card-section>
          <q-card-section>
            <div class="formheader">
              <q-icon name="account_box" />
              <p>Üyelik Bilgileri</p>
            </div>
          </q-card-section>

          <q-card-section>
            <q-input
              v-model="user.name"
              placeholder="Ad"
              outlined
              
            />
          </q-card-section>
          <q-card-section>
            <q-input
              v-model="user.surname"
              placeholder="Soyad"
              outlined
              
            />
          </q-card-section>

          <q-card-section>
            <q-input
              v-model="user.email"
              placeholder="E-Mail"
              outlined
            />
          </q-card-section>

          <q-card-section>
            <div class="password-header">
              <q-icon name="vpn_key" /> 
              <p>Şifre Bilgileri</p>
            </div>
          </q-card-section>

          <q-card-section>
            <q-input
              v-model="user.password"
              placeholder="Şifre"
              type="password"
              outlined
              
            />
          </q-card-section>
      

          <q-card-section>
            <q-checkbox v-model="user.checkbox1" label="Üyelik sözleşmesini Okudum, Kabul Ediyorum." />
          </q-card-section>

          <q-card-section>
            <q-checkbox v-model="user.checkbox2" label="Üyelik Formu Aydınlatma Metni ve Yurtdışına Veri Aktarımı Açık Rıza Metnini okudum, rıza gösteriyorum." />
          </q-card-section>

          <q-card-section class="q-mb-md text-center">
        <q-btn type="submit" color="primary" label="Kaydet" @click="submitForm"/>
      </q-card-section>

        </q-card>
      </q-form>
    </div>
  </q-page>
</template>



<script>
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // setDoc'u içe aktarın

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO-zUzYn8gYdXptCRJ88CgOZdPBnWtJyE",
  authDomain: "vuevize.firebaseapp.com",
  projectId: "vuevize",
  storageBucket: "vuevize.appspot.com",
  messagingSenderId: "932079460330",
  appId: "1:932079460330:web:ded815dca106e776f59c93",
  measurementId: "G-N87C2MY0Z7"
};

// Firebase uygulamasını başlatın
const app = initializeApp(firebaseConfig);

// Firestore'u alın
const db = getFirestore(app);

export default {
  data() {
    return {
      user: {
        name: '',
        surname: '',
        email: '',
        password: '',
        checkbox1: false,
        checkbox2: false,
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        await setDoc(doc(db, 'users', new Date().toISOString()), {
          name: this.user.name,
          surname: this.user.surname,
          email: this.user.email,
          password: this.user.password,
          checkbox1: this.user.checkbox1,
          checkbox2: this.user.checkbox2,
          createdAt: new Date(),
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>



<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

}

.img-container {
  max-width: 70px;
  height: 70px;
  margin-right: 20px; /* Adjust the margin as needed */
}

.custom-form {
  max-width: 500px;
  width: 100%; /* Make sure the form takes the available width */
}

.form-1 {
  text-align: center;
  font-size: 26px;
}
.formheader {
  text-align: center;
  font-size: 15px;
}
.password-header {
  text-align: center;
  font-size: 15px;
}
</style>
