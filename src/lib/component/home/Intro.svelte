<script lang="ts"></script>

<style lang="scss">
  @use "@inc/uchu/scss" as *;

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      padding-inline-start: var(--inline-padding);
    }

    .cards-wrapper {
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      position: relative;
      scroll-padding: calc(var(--inline-padding));
      scroll-snap-type: x mandatory;
      scrollbar-width: none;

      @media (min-width: 1201px) {
        margin-top: 3rem;
      }

      @media (max-width: 1200px) {
        margin-top: 2rem;
      }

      .cards {
        display: flex;
        gap: 2rem;
        margin: 0;
        min-width: fit-content;
        padding-inline-start: var(--inline-padding);

        &::after {
          align-self: stretch;
          content: "";
          padding-inline-end: calc(var(--inline-padding) * 1.75);
        }

        .card {
          display: flex;
          flex-direction: column;
          scroll-snap-align: start;
          flex-shrink: 0;
          inline-size: 100%;

          @media (min-width: 601px) {
            width: 500px;
          }

          @media (max-width: 600px) {
            width: 350px;
          }

          &:not(:hover) {
            figure {
              padding: 1px;
            }
          }

          &:hover {
            figure {
              padding: 5px;
            }
          }

          &.schema,
          &.runtime {
            img {
              object-position: top;
            }
          }

          &.migrations {
            img {
              object-position: center 60%;
            }
          }

          figure {
            aspect-ratio: 1 / 1;
            background-color: var(--uchu-gray-1);
            margin-bottom: 1rem;
            overflow: hidden;
            transition: padding 0.3s;

            img {
              width: 100%; height: 100%;
              object-fit: cover;
            }
          }

          p {
            @media (min-width: 601px) {
              max-width: 85%;
            }

            @media (max-width: 600px) {
              padding-right: 1rem;
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>

<section class="intro">
  <h2>Take a closer look.</h2>

  <div class="cards-wrapper">
    <ul class="cards">
      <li class="card schema">
        <figure>
          <img alt="Schema displayed in a text editor" src="/intro/schema.png"/>
        </figure>

        <p><strong>Schema.</strong> Declare your types once in <abbr title="Schema Definition Language">SDL</abbr> and Disc takes it from there — validating links, resolving constraints, and turning intent into structure. Your schema is the source of truth, not an afterthought.</p>
      </li>

      <li class="card">
        <figure>
          <img alt="EdgeQL query and its results in Disc's admin interface" src="/intro/edgeql.png"/>
        </figure>

        <p><strong>Query.</strong> Write EdgeQL<sup><a href="#footnote-edgeql">1</a></sup> that mirrors the shape of your result. Select a user, pull their posts, nest a third level deep — and get back precisely that, typed end to end.</p>
      </li>

      <li class="card">
        <figure>
          <img alt="The Postgres elephant backlit by rays of sunlight against a daytime sky" src="/intro/postgres.png"/>
        </figure>

        <p><strong>Storage.</strong> PostgreSQL 18 and up does the heavy lifting underneath, exactly as it always has. Battle‑tested storage, none of the setup.</p>
      </li>

      <li class="card runtime">
        <figure>
          <img alt="Disc source code displayed in a text editor" src="/intro/runtime.png"/>
        </figure>

        <p><strong>Runtime.</strong> Built on Deno, with first‑class TypeScript, a real permissions model, and a modern standard library. Native by design, not by adapter.</p>
      </li>

      <li class="card migrations">
        <figure>
          <img alt="The Live Schema Diff component of Disc's admin interface watching for changes" src="/intro/migration.png"/>
        </figure>

        <p><strong>Migrations.</strong> Disc diffs your schema against history and writes the <abbr title="Data Definition Language">DDL</abbr> for you. Evolve your model with confidence and a paper trail.</p>
      </li>

      <li class="card">
        <figure>
          <img alt="The Data screen of Disc's admin interface" src="/intro/ui.png"/>
        </figure>

        <p><strong>Admin UI.</strong> A SvelteKit console served right alongside your server. Browse, edit, query, and watch your schema evolve.</p>
      </li>
    </ul>
  </div>
</section>
