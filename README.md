# SetorCircularJS — Setor circular para Google Maps

Desenhe **setores circulares (arcos)** no Google Maps com JavaScript puro. Ideal para representar áreas de cobertura, zonas de alcance, direções de antenas, análise de proximidade e muito mais.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#licença)
![Status: Stable](https://img.shields.io/badge/status-stable-blue.svg)
![Stack: JS](https://img.shields.io/badge/stack-JavaScript-yellow.svg)

> Este repositório inclui:
> - `setorcircular.js`: funções utilitárias para gerar o setor.
> - `example.html`: página de exemplo mostrando o uso no Google Maps.

---

## ✨ Recursos

- Geração de **setor circular** a partir de um ponto central.
- Controle de **raio (em metros)** e de **ângulos inicial/final** (graus).
- Personalização de **cores**, **opacidade** e **borda**.
- Funciona com o **Google Maps JavaScript API** (sem dependências adicionais).

---

## 🧩 Pré-requisitos

- Uma **API key** válida do [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview).
- Um elemento HTML para renderizar o mapa (ex.: `<div id="map"></div>`).

---

## 🚀 Como usar

1) **Inclua** o Google Maps JS API e o arquivo `setorcircular.js`:

```html
<!-- Substitua YOUR_API_KEY pela sua chave -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>

<!-- Referencie o arquivo local da lib -->
<script src="./setorcircular.js"></script>
