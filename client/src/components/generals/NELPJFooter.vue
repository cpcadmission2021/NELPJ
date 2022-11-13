<template>
  <q-layout>
    <q-footer elevated class="bg-grey-10 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar> -->
          <div align="center">© Copyright 2023 NELPJ. All rights reserved.</div>
        </q-toolbar-title>
      </q-toolbar>
      <section align="center" class="grey-12" padding="10px">
        <!-- Facebook -->
        <RouterLink to="facebook.com">
          <img
            border="0"
            alt="facebook logo"
            src="src/assets/footerImages/fblogo.png"
            width="40"
            height="40"
            href="https://www.facebook.com/profile.php?id=100064466929007"
          />
        </RouterLink>
        <!-- Twitter -->
        <RouterLink to="twitter.com">
          <img
            border="0"
            alt="twitter logo"
            src="src/assets/footerImages/twitterlogo.png"
            width="40"
            height="40"
          />
        </RouterLink>
        <!-- Google -->
        <RouterLink to="gmail.com">
          <img
            border="0"
            alt="gmail logo"
            src="src/assets/footerImages/gmaillogo.png"
            width="40"
            height="40"
          />
        </RouterLink>
        <!-- Donation -->
        <RouterLink to="gcash.com">
          <img
            border="0"
            alt="donate logo"
            src="src/assets/footerImages/donate.png"
            width="40"
            height="40"
          />
        </RouterLink>
      </section>
    </q-footer>
  </q-layout>
</template>
