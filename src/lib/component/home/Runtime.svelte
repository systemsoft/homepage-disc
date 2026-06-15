<script lang="ts">
  /*** UTILITY ------------------------------------------ ***/

  import { inViewOnce } from "$lib/in-view";

  /*** STATE -------------------------------------------- ***/

  let visible = $state(false);
</script>

<style lang="scss">
  @use "@inc/uchu/scss" as *;

  .runtime {
    @media (max-width: 1000px) {
      p {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    &:not(.visible) {
      h2 span {
        -webkit-text-fill-color: oklch(var(--uchu-yin-9-raw) / 100%);
      }
    }

    &.visible {
      h2 span {
        -webkit-text-fill-color: oklch(var(--uchu-yin-9-raw) / 0%);
      }
    }

    h2 span {
      background-color: var(--uchu-yin-9);
      background-clip: text;
      background-image: linear-gradient(129deg, oklch(0.9012 0.1676 156.12), var(--uchu-green-4), var(--uchu-green-9));
      box-decoration-break: clone;
      transition: -webkit-text-fill-color 0.5s;
    }

    .logo-wrap {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: center;

      @media (min-width: 1001px) {
        margin-top: 2rem;
      }

      @media (max-width: 1000px) {
        transform: scale(0.7);
      }

      .disc {
        width: 13rem;
      }

      .heart {
        font-size: 5rem;
        margin-left: 2rem;
        margin-right: 2rem;
        transform: translateX(-0.25rem);
      }

      .deno {
        width: 12rem;
      }
    }

    @media (max-width: 1000px) {
      .hide-small {
        display: none;
      }
    }
  }
</style>

<section class="centered alt runtime" class:visible {@attach inViewOnce((isVisible) => visible = isVisible, { threshold: 0.8 })}>
  <div class="undershirt">
    <h2>Deno‑native. <br/><span>By design.</span></h2>

    <p>Disc is built on Deno from the ground up — not ported, not wrapped. That means built‑in TypeScript, a real permissions model, and a modern standard library doing the work, with a single‑language stack <br class="hide-small"/>from schema to server. <br/><br/>One runtime. One language. No glue.</p>

    <div aria-label="Disc loves Deno" class="logo-wrap">
      <svg class="disc" viewBox="0 0 1300 1100" xmlns="http://www.w3.org/2000/svg">
        <path id="black" d="M95 835l-30 0l0 -180l30 0l0 180Zm0 -180l0 -90l30 0l0 90l-30 0Zm30 -90l0 -60l30 0l0 60l-30 0Zm30 -60l0 -30l30 0l0 30l-30 0Zm30 -30l0 -60l30 0l0 60l-30 0Zm30 -60l0 -30l30 0l0 30l-30 0Zm30 -30l0 -30l30 0l0 30l-30 0Zm30 -30l0 -30l30 0l0 30l-30 0Zm30 -30l0 -30l30 0l0 30l-30 0Zm30 -30l0 -30l30 0l0 30l-30 0Zm30 -30l0 -30l60 0l0 30l-60 0Zm60 -30l0 -30l30 0l0 30l-30 0Zm30 -30l0 -30l60 0l0 30l-60 0Zm60 -30l0 -30l60 0l0 30l-60 0Zm60 -30l0 -30l60 0l0 30l-60 0Zm60 -30l0 -30l120 0l0 30l-120 0Zm120 -30l0 -30l300 0l0 30l30 0l0 30l-60 0l0 -30l-270 0Zm330 30l60 0l0 30l-60 0l0 -30Zm60 30l30 0l0 60l-30 0l0 -60Zm30 60l30 0l0 60l-30 0l0 -60Zm30 60l30 0l0 180l-30 0l0 -180Zm0 180l0 90l-30 0l0 -90l30 0Zm-30 90l0 60l-30 0l0 -60l30 0Zm-30 60l0 30l-30 0l0 -30l30 0Zm-30 30l0 60l-30 0l0 -60l30 0Zm-30 60l0 30l-30 0l0 -30l30 0Zm-30 30l0 30l-30 0l0 -30l30 0Zm-30 30l0 30l-30 0l0 -30l30 0Zm-30 30l0 30l-30 0l0 -30l30 0Zm-30 30l0 30l-30 0l0 -30l30 0Zm-30 30l0 30l-30 0l0 -30l30 0Zm-30 30l0 30l-60 0l0 -30l60 0Zm-60 30l0 30l-60 0l0 -30l60 0Zm-60 30l0 30l-60 0l0 -30l60 0Zm-60 30l0 30l-60 0l0 -30l60 0Zm-60 30l0 30l-120 0l0 -30l120 0Zm-120 30l0 30l-270 0l0 -30l270 0Zm-270 0l-60 0l0 -30l60 0l0 30Zm-60 -30l-60 0l0 -30l60 0l0 30Zm-60 -30l-30 0l0 -60l30 0l0 60Zm-30 -60l-30 0l0 -60l30 0l0 60Zm630 -330l0 30l-30 0l0 -30l30 0Zm30 -30l0 30l-30 0l0 -30l30 0Zm0 -120l30 0l0 120l-30 0l0 -120Zm-30 -30l30 0l0 30l-30 0l0 -30Zm-30 210l0 30l-30 0l0 -30l30 0Zm-30 30l0 30l-30 0l0 -30l30 0Zm60 -240l-150 0l0 -30l150 0l0 30Zm-210 210l-30 0l0 -90l30 0l0 90Zm0 -90l0 -30l30 0l0 30l-30 0Zm30 -30l0 -30l30 0l0 30l-30 0Zm30 -30l0 -30l90 0l0 30l-90 0Zm90 0l30 0l0 90l-30 0l0 -90Zm0 90l0 30l-30 0l0 -30l30 0Zm-30 30l0 30l-30 0l0 -30l30 0Zm-30 30l0 30l-90 0l0 -30l90 0Zm-150 60l150 0l0 30l-150 0l0 -30Zm-30 -30l30 0l0 30l-30 0l0 -30Zm0 -120l0 -30l30 0l0 30l-30 0Zm0 120l-30 0l0 -120l30 0l0 120Zm30 -150l0 -30l30 0l0 30l-30 0Zm60 -60l0 -30l30 0l0 30l-30 0Zm-30 30l0 -30l30 0l0 30l-30 0Z" style="fill: #060608; fill-rule: nonzero;"/>
        <path id="green" d="M365 625l0 -30l60 0l0 30l-60 0Zm-30 30l0 30l-30 0l0 30l-30 0l0 30l-60 0l0 30l-30 0l0 30l-30 0l0 30l-60 0l0 -60l30 0l0 -30l60 0l0 -30l30 0l0 -30l60 0l0 -30l60 0Zm0 0l0 -30l30 0l0 30l-30 0Zm630 -150l120 0l0 30l-120 0l0 -30Zm0 0l-90 0l0 -30l90 0l0 30Zm120 30l60 0l0 30l-60 0l0 -30Zm-210 -120l0 -30l60 0l0 -30l60 0l0 -30l90 0l0 -30l60 0l0 -30l60 0l0 60l-60 0l0 30l-90 0l0 30l-90 0l0 30l-90 0Zm0 0l0 30l-60 0l0 -30l60 0Zm-570 180l-180 0l0 -30l180 0l0 30Z" style="fill: #80d1b1; fill-rule: nonzero;"/>
        <path id="lime" d="M215 685l0 -30l60 0l0 30l-60 0Zm120 -60l0 -30l30 0l0 30l-30 0Zm-60 30l0 -30l60 0l0 30l-60 0Zm-60 30l0 30l-30 0l0 30l-60 0l0 30l-30 0l0 -60l30 0l0 -30l90 0Zm120 -90l-30 0l0 -30l30 0l0 30Zm630 -180l0 30l-90 0l0 -30l90 0Zm0 0l0 -30l90 0l0 -30l90 0l0 -30l60 0l0 60l-120 0l0 30l-120 0Zm-720 210l-120 0l0 -30l120 0l0 30Zm840 -120l-120 0l0 -30l210 0l0 60l-90 0l0 -30Zm-660 60l0 30l-30 0l0 -30l30 0Zm420 -120l0 30l-30 0l0 -30l30 0Z" style="fill: #d8eda0; fill-rule: nonzero;"/>
        <path id="yellow" d="M335 595l0 30l-60 0l0 30l-60 0l0 30l-90 0l0 30l-30 0l0 -60l30 0l0 -30l120 0l0 -30l90 0Zm0 0l0 -30l60 0l0 30l-60 0Zm840 -120l-330 0l0 -30l120 0l0 -30l120 0l0 -30l120 0l0 60l-30 0l0 30Z" style="fill: #ffeea0; fill-rule: nonzero;"/>
        <path id="gray" d="M455 505l-60 0l0 -30l-120 0l0 -30l-60 0l0 -30l30 0l0 -30l30 0l0 -30l30 0l0 -30l30 0l0 30l30 0l0 30l60 0l0 30l30 0l0 30l30 0l0 30l-30 0l0 30Zm30 -30l30 0l0 -30l30 0l0 -30l30 0l0 -30l180 0l0 30l30 0l0 120l-30 0l0 30l-30 0l0 30l-30 0l0 30l-30 0l0 30l-180 0l0 -30l-30 0l0 -120l30 0l0 -30Zm0 180l0 30l30 0l0 60l-30 0l0 60l-30 0l0 90l-30 0l0 60l-30 0l0 60l-120 0l0 -30l-30 0l0 -30l30 0l0 -60l30 0l0 -30l30 0l0 -60l30 0l0 -60l30 0l0 -30l30 0l0 -60l60 0Zm270 -270l0 -90l30 0l0 -90l30 0l0 -120l210 0l0 30l-30 0l0 30l-30 0l0 30l-30 0l0 30l-30 0l0 30l-30 0l0 60l-30 0l0 30l-30 0l0 30l-30 0l0 30l-30 0Zm0 180l90 0l0 30l60 0l0 30l60 0l0 30l60 0l0 30l30 0l0 30l-30 0l0 30l-30 0l0 30l-30 0l0 -30l-30 0l0 -30l-30 0l0 -30l-60 0l0 -30l-30 0l0 -30l-30 0l0 -30l-30 0l0 -30Zm-60 -150l-90 0l0 30l-30 0l0 30l-30 0l0 30l-30 0l0 90l30 0l0 30l90 0l0 -30l30 0l0 -30l30 0l0 -30l30 0l0 -90l-30 0l0 -30Zm-210 600l0 -60l30 0l0 -120l30 0l0 -60l30 0l0 -90l30 0l0 180l-30 0l0 120l-30 0l0 30l-60 0Zm180 -660l0 -120l30 0l0 -120l60 0l0 90l-30 0l0 90l-30 0l0 60l-30 0Z" style="fill: #d9e0ea; fill-rule: nonzero;"/>
        <path id="white" d="M395 1015l0 -60l30 0l0 -60l30 0l0 -90l30 0l0 -60l30 0l0 -60l60 0l0 90l-30 0l0 60l-30 0l0 120l-30 0l0 60l-90 0Zm180 -30l0 -120l30 0l0 -180l30 0l0 -30l60 0l0 -30l30 0l0 -30l60 0l0 30l30 0l0 30l30 0l0 30l60 0l0 30l30 0l0 30l30 0l0 60l-30 0l0 30l-30 0l0 30l-60 0l0 30l-60 0l0 30l-60 0l0 30l-60 0l0 30l-90 0Zm-240 -630l0 -60l30 0l0 -30l60 0l0 -30l30 0l0 -30l60 0l0 -30l60 0l0 -30l60 0l0 -30l60 0l0 120l-30 0l0 120l-60 0l0 30l-60 0l0 30l-30 0l0 30l-60 0l0 -30l-30 0l0 -30l-60 0l0 -30l-30 0Zm360 0l0 -60l30 0l0 -90l30 0l0 -120l60 0l0 120l-30 0l0 90l-30 0l0 60l-60 0Z" style="fill: #fff; fill-rule: nonzero;"/>
        <path id="blue" d="M875 505l90 0l0 30l-90 0l0 -30Zm90 30l120 0l0 30l60 0l0 30l-30 0l0 30l-30 0l0 -30l-30 0l0 -30l-90 0l0 -30Zm-90 -30l-60 0l0 -30l60 0l0 30Zm-720 60l0 -60l150 0l0 30l120 0l0 30l-270 0Zm-30 330l0 -60l30 0l0 -30l30 0l0 -30l30 0l0 -30l60 0l0 -30l30 0l0 -30l30 0l0 -30l30 0l0 -30l60 0l0 30l-30 0l0 30l-30 0l0 30l-30 0l0 30l-30 0l0 30l-30 0l0 30l-30 0l0 30l-30 0l0 30l-30 0l0 30l-60 0Zm750 -480l-60 0l0 -30l30 0l0 -30l60 0l0 -30l60 0l0 -30l60 0l0 -30l60 0l0 -30l60 0l0 -30l30 0l0 60l-30 0l0 30l-60 0l0 30l-90 0l0 30l-60 0l0 30l-60 0l0 30Z" style="fill: #83bace; fill-rule: nonzero;"/>
        <path id="purple" d="M425 655l0 60l-30 0l0 30l-30 0l0 60l-30 0l0 60l-30 0l0 30l-30 0l0 60l-30 0l0 30l-30 0l0 -30l-60 0l0 -60l30 0l0 -30l30 0l0 -30l30 0l0 -30l30 0l0 -30l30 0l0 -30l30 0l0 -30l30 0l0 -30l30 0l0 -30l30 0Zm0 0l0 -30l30 0l0 30l-30 0Zm-120 -150l-120 0l0 -30l30 0l0 -30l60 0l0 30l120 0l0 30l30 0l0 30l-120 0l0 -30Zm540 60l-60 0l0 -30l30 0l0 -30l60 0l0 30l90 0l0 30l90 0l0 30l30 0l0 90l-60 0l0 -30l-60 0l0 -30l-60 0l0 -30l-60 0l0 -30Zm-60 -150l0 -60l30 0l0 -30l30 0l0 -30l30 0l0 -60l30 0l0 -30l30 0l0 -30l30 0l0 -30l30 0l0 -30l90 0l0 30l60 0l0 90l-60 0l0 30l-60 0l0 30l-60 0l0 30l-60 0l0 30l-60 0l0 30l-30 0l0 30l-30 0Z" style="fill: #b4b8d3; fill-rule: nonzero;"/>
      </svg>

      <div class="heart">❤️</div>

      <svg class="deno" viewBox="0 0 401 401" xmlns="http://www.w3.org/2000/svg">
        <path d="M261.684 262.058c33.861 1.661 69.225 -13.535 80.203 -43.776c10.978 -30.241 6.721 -60.148 -32.661 -78.086c-39.381 -17.945 -57.569 -39.272 -89.385 -52.14c-20.787 -8.408 -43.915 -3.418 -67.664 9.706c-63.963 35.352 -121.274 147.039 -94.858 250.519c0.379 1.419 -0.257 2.903 -1.544 3.615c-1.279 0.704 -2.885 0.438 -3.877 -0.64c-35.616 -39.287 -55.657 -92.559 -51.305 -149.556c8.405 -110.063 104.585 -192.597 214.648 -184.192c110.055 8.403 192.589 104.583 184.184 214.646c-3.529 46.221 -22.535 87.584 -51.559 119.399c-22.195 22.8 -50.473 32.935 -74.07 32.516c-17.107 -0.303 -33.839 -7.112 -45.409 -17.066c-16.516 -14.228 -23.191 -30.486 -25.474 -48.635c-0.572 -4.508 -0.236 -16.797 2.112 -25.309c1.745 -6.343 6.185 -18.599 12.676 -23.957c-7.595 -3.266 -17.361 -10.388 -20.446 -13.805c-0.753 -0.838 -0.652 -2.156 0.026 -3.057c0.671 -0.909 1.866 -1.262 2.925 -0.88c6.528 2.239 14.477 4.444 22.86 5.851c11.021 1.844 24.729 4.159 38.618 4.847Zm-68.907 -160.063c10.789 -0.846 20.202 8.363 21.825 20.609c2.164 16.314 -3.822 33.166 -23.511 33.554c-16.819 0.335 -21.915 -16.626 -20.8 -26.9c1.107 -10.275 9.577 -26.25 22.486 -27.263Z"/>
      </svg>
    </div>
  </div>
</section>
