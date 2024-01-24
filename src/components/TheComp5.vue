<template>
  <div style="margin-left: -200px;">
  <q-page class="login-page" style="margin-left: -2200px;">
    <div class="login-container">
      
      <div class="login-image">
        <img
          src="https://www.hpstore.com.tr/Data/EditorFiles/rdm/uye-kayit/uye-kayit-gorsel.jpg"
          alt="Login Image"
        />
      </div>
      <q-card class="q-ma-md transparent-card" style="max-width: 370px; ">
        <q-card-section>
          <div class="img-container" style="margin-left: 110px;">
        <img src="https://www.hpstore.com.tr/Data/EditorFiles/tasarim/hp-logo-black.svg">
      </div>
          <div class="text-h6 text-center custom-login-text"></div>
          <q-card-section>
            <div class="form-1">Üye Kayıt</div>
          </q-card-section>
          <q-card-section>
            <div class="formheader">
              <q-icon name="account_box" />
              <p>Üyelik Bilgileri</p>
            </div>
          </q-card-section>

          <q-form style="width: 300px">
            <div style="margin-bottom: 5px; font-weight: 500"></div>
            <q-input v-model="ad" outlined label="ad" class="ust-3btn" />

            <div style="margin-bottom: 5px; font-weight: 500"></div>
            <q-input v-model="soyad" outlined label="soyad" class="ust-3btn" />

            <div style="margin-bottom: 5px; font-weight: 500">
              
            </div>
            <q-input v-model="email" label="e-mail" outlined class="ust-3btn" />
            <div style="margin-bottom: 5px; margin-top: 15px; font-weight: 500">
              
            </div>
            <div class="formheader">
              <q-icon name="account_box" />
              <p>Şifre Bilgileri</p>
            </div>
            <q-input v-model="password1" label="şifre" outlined type="password" class="ust-3btn" />

            <div style="margin-bottom: 5px; margin-top: 15px; font-weight: 500">
              
            </div>
            <q-input v-model="password2" label="şifre"  outlined type="password" class="ust-3btn" />

            <div
              class="q-gutter-sm"
              style="margin-left: -15px; margin-top: 5px"
            ></div>
            <q-btn
              class="q-mt-md"
              type="submit"
              label="KAYDET"
              @click="signUp"
              style="
                background-color: #084793;
                color: white;
                font-family: inherit;
                width: 100%;
                text-transform: capitalize;
                height: 40px;
              "
            />
            
          </q-form>
          
        </q-card-section>
      </q-card>

      
    </div>
  </q-page>
</div>

  <q-dialog ref="signupDialogRef">
    <q-card>
      <q-card-section>
        <q-banner :inline="true" :class="dialogMessageClass">{{
          dialogMessage
        }}</q-banner>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useMyStore } from 'src/stores/example-store';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { QCard, QDialog } from 'quasar';

export default {
  name: 'SignUp',
  components: {
    QCard,
    QDialog,
  },
  setup() {
    const loginDialogRef = ref<QCard | null>(null);
    return {
      loginDialogRef,
    };
  },
  data() {
    return {
      val: ref(true),
      password1: '',
      password2: '',
      ad: '',
      soyad: '',
      email: '',
      errorMessage: '',
      dialogMessage: '',
      dialogMessageClass: '',
    };
  },
  methods: {
    async signUp() {
      try {
        const auth = getAuth();
        const { user } = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password1
        );

        const userData = {
          ad: this.ad,
          soyad: this.soyad,
          email: this.email,
          password: this.password1,
          uid: user.uid,
        };

        await useMyStore().signup(userData);

        this.ad = '';
        this.soyad = '';
        this.email = '';
        this.password1 = '';
        this.password2 = '';
        this.errorMessage = '';

        this.showDialog('Üye kaydı başarılı', 'positive');
        setTimeout(() => {
          this.$router.push('/PageMain/');
        }, 2000);
      } catch (error) {
        console.error('Firebase Authentication or Firestore Error:', error);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((error as any).code === 'auth/email-already-in-use') {
          this.errorMessage = 'Bu e-posta zaten kullanılıyor.';
        } else {
          this.errorMessage = 'Lütfen tekrar deneyin.';
        }
        this.showDialog(this.errorMessage, 'negative');
      }
      //ana sayfaya git
    },
    showDialog(message: string, messageClass: string) {
      this.dialogMessage = message;
      this.dialogMessageClass = messageClass;
      (this.$refs.signupDialogRef as QDialog).show();
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form-1 {
  text-align: center;
  font-size: 26px;
}
.formheader {
  text-align: center;
  font-size: 15px;
}
.img-container {
  max-width: 70px;
  height: 70px;
  margin-right: 20px; /* Adjust the margin as needed */
}

.transparent-card {
  background-color: transparent;
  border: none;
  box-shadow: none;
  margin-top: 50px;
  margin-right: 600px;
  
}
.login-page {
  justify-content: center;
  align-items: center;
  height: 100vh;

}
.custom-login-text {
  font-family: SFProDisplay, arial, sans-serif;
  font-size: 22px;
  font-weight: bolder;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  margin-bottom: 15px;
}
.ust-buttonlar {
  margin-bottom: 20px;
  padding: 5px 0px 5px 0px;
}
.ust-btn {
  width: 550px;
  color: #084793;
  background-color: #dbe1e98d;
  border: 1px solid #eaf3ff8d;
  border-radius: 0;
  text-transform: capitalize;
}
.ust-3btn {
  color: #084793;
  background-color: #dbe1e98d;
  text-transform: capitalize;
  font-weight: 300;
}
.robot-card {
  width: 500px;
  height: 70px;
  margin-top: 10px;
  background-color: #e3e6ea8d;
  border: 1px solid #565656;
}
.reCaptha {
  width: 50px;
  margin-left: 250px;
  margin-top: -80px;
}
.login-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
}
.login-image {
  flex: 1;
  text-align: right;
  margin-left: 0px;
  margin-right: 100px;
}
.login-image img {
  max-width: 100%;
  max-height: 100%;
}
</style>