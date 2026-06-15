<script lang="ts"></script>

<style lang="scss">
  @use "@inc/uchu/scss" as *;

  .ui {
    @media (min-width: 1001px) {
      &:not(:hover) {
        figure img {
          transform: translateY(0.5rem);
        }
      }

      &:hover {
        figure img {
          transform: translateY(0);
        }
      }
    }

    @media (max-width: 1000px) {
      padding-bottom: 0;

      p {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    figure {
      height: 400px;
      overflow: hidden;
      margin-top: 3rem;
      padding: 0 2rem;
      position: relative;

      @media (min-width: 1001px) {
        margin-left: auto;
        margin-right: auto;
        max-width: 95%;
      }

      @media (max-width: 1000px) {
        margin-left: unset;
        margin-top: 2rem;
      }

      &::after {
        width: 100%; height: 1px;
        bottom: 0; left: 0;

        content: "";
        position: absolute;

        @media (min-width: 1001px) {
          background-color: oklch(var(--uchu-yin-1-raw) / 20%);
        }

        @media (max-width: 1000px) {
          background-color: var(--uchu-yin-1);
        }
      }

      img {
        transition: transform 0.2s;

        @media (min-width: 1001px) {
          width: 100%;
        }

        @media (max-width: 1000px) {
          transform: translateX(-250px);
          width: 2000px;
        }
      }
    }
  }
</style>

<section class="centered dark ui">
  <div class="undershirt">
    <h2>See your data in <br/>a new light.</h2>

    <p>Disc’s admin console is built to look the part — a modern, built-in interface where everything about your data comes into view. Browse your schema, edit rows inline, compose EdgeQL<sup><a href="#footnote-edgeql">1</a></sup> with autocomplete, and trace a query’s execution plan. <br/><br/>It’s your data’s identity disc, made visible.</p>

    <figure>
      <img alt="Disc admin interface showcasing the Schema page" src="/ui/hero.png"/>
    </figure>
  </div>
</section>
