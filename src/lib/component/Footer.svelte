<script lang="ts"></script>

<style lang="scss">
  @use "@inc/uchu/scss" as *;

  footer {
    align-items: center;
    background-color: var(--uchu-gray-1);
    color: var(--uchu-yin-5);
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    justify-content: space-between;

    @media (min-width: 601px) {
      padding-bottom: 1rem;
      padding-top: 2rem;
    }

    @media (max-width: 600px) {
      padding-top: 1rem;
    }

    div,
    ol,
    ul {
      width: 100%;
    }

    div:not(.undershirt) {
      align-items: center;
      border-top: 1px solid var(--uchu-gray-2);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 1rem;

      @media (min-width: 1551px) {
        padding-top: 1rem;
      }

      @media (min-width: 601px) and (max-width: 1550px) {
        padding: 1rem 2rem 0;
      }

      @media (max-width: 600px) {
        padding: 1rem;
      }
    }

    ol,
    ul {
      line-height: 1.33;

      @media (min-width: 1551px) {
        padding-right: 1rem;
      }

      @media (min-width: 601px) and (max-width: 1550px) {
        padding-right: 2rem;
      }

      @media (max-width: 600px) {
        padding-right: 1rem;
      }

      li {
        &:not(:last-of-type) {
          margin-bottom: 0.75rem;
        }
      }
    }

    ol {
      @media (min-width: 1551px) {
        padding-left: 1rem;
      }

      @media (min-width: 601px) and (max-width: 1550px) {
        padding-left: 3rem;
      }

      @media (max-width: 600px) {
        padding-left: 2rem;
      }
    }

    ul {
      list-style-type: none;
      margin-top: 0.75rem;

      @media (min-width: 601px) and (max-width: 1550px) {
        padding-left: 2rem;
      }

      @media (max-width: 600px) {
        padding-left: 1rem;
      }
    }

    a {
      color: inherit;
    }

    h5 {
      display: flex;
      padding-left: 1.55rem;
      position: relative;

      &::before {
        bottom: 0; left: 0;

        aspect-ratio: 1;
        background-image: url("/disc-shadow.svg");
        background-repeat: no-repeat;
        content: "";
        height: 100%;
        position: absolute;
        transform: scale(1.5);
      }

      svg {
        fill: currentColor;
        width: 4rem;
      }
    }
  }
</style>

<footer>
  <div class="undershirt">
    <ol>
      <li id="footnote-edgeql"><a href="https://www.geldata.com/showcase/edgeql" target="_blank">EdgeQL</a> is a spiritual successor to SQL designed by the original Gel team.</li>
      <li id="footnote-gel">Disc is a spiritual successor to <a href="https://www.geldata.com" target="_blank">Gel</a>, an excellent database wrapper to Postgres.</li>
    </ol>

    <ul>
      <li>The Deno logo is a trademark of Deno Land Inc.</li>
    </ul>
  </div>

  <div class="undershirt">
    <div>
      <h5 aria-label="Disc">
        <svg aria-label="Disc" viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M475 55l0 -30l120 0l0 30l-120 0Zm0 90l-30 0l0 -90l30 0l0 90Zm0 0l120 0l0 30l-120 0l0 -30Zm-90 0l0 30l-120 0l0 -30l120 0Zm0 0l0 -30l-120 0l0 -60l30 0l0 30l120 0l0 60l-30 0Zm-90 -90l0 -30l120 0l0 30l-120 0Zm-150 90l0 30l-120 0l0 -150l120 0l0 30l-90 0l0 90l90 0Zm0 -90l30 0l0 90l-30 0l0 -90Zm60 120l0 -150l30 0l0 150l-30 0Z"/>
        </svg>
      </h5>

      <p>Built with <a href="/loquats.JPG">loquats</a> in Cupertino</p>
    </div>
  </div>
</footer>
