<script setup lang="ts">
import { withBase } from 'vitepress'

const homeHref = withBase('/')
const brandSrc = withBase('/branding/cread-ifmt-horizontal.jpeg')
const startHref = withBase('/comece-por-aqui/')
const glossaryHref = withBase('/glossario/')
</script>

<template>
  <footer class="cread-footer" aria-label="Identificação institucional">
    <div class="cread-footer__inner">
      <a class="cread-footer__brand" :href="homeHref" aria-label="Ir para a página inicial do Portal Moodle 5.2">
        <img
          :src="brandSrc"
          alt="Instituto Federal de Mato Grosso — Centro de Referência em Educação a Distância"
          width="2048"
          height="408"
          loading="lazy"
        >
      </a>
      <div class="cread-footer__identity">
        <strong>CREaD IFMT — Centro de Referência em Educação a Distância — IFMT</strong>
        <p>Portal de apoio e documentação sobre Moodle 5.2.x.</p>
      </div>
      <nav class="cread-footer__links" aria-label="Links úteis do rodapé">
        <a :href="homeHref">Início</a>
        <a :href="startHref">Comece por aqui</a>
        <a :href="glossaryHref">Glossário</a>
      </nav>
    </div>
    <p class="cread-footer__note">Instituto Federal de Mato Grosso · Conteúdo de apoio para educação a distância.</p>
  </footer>
</template>
