<script lang="ts">
  /*** IMPORT ------------------------------------------- ***/

  import { default as dedent } from "@netopwibby/dedent";

  /*** UTILITY ------------------------------------------ ***/

  const QUERY_CODE = dedent`
    <span class="line-number">   1  </span> select Merchant {
    <span class="line-number">   2  </span>   autoSettle,
    <span class="line-number">   3  </span>   email,
    <span class="line-number">   4  </span>   organizationName,
    <span class="line-number">   5  </span>   transactions: {
    <span class="line-number">   6  </span>     amount,
    <span class="line-number">   7  </span>     currency,
    <span class="line-number">   8  </span>     status
    <span class="line-number">   9  </span>   }
    <span class="line-number">  10  </span> } filter .email = "user@example.com";
  `;

  const QUERY_RESPONSE = dedent`
    <span class="parameter">email<span class="dots">.............</span></span> user@example.com
    <span class="parameter">autoSettle<span class="dots">........</span></span> 1
    <span class="parameter">transactions<span class="dots">......</span></span> [{...},{...},{...}]
    <span class="parameter">organizationName<span class="dots">..</span></span> Acme Corp
  `;
</script>

<style lang="scss">
  @use "@inc/uchu/scss" as *;

  .query {
    @media (max-width: 1000px) {
      p {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    .pre-wrap {
      align-items: center;
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      margin-top: 2rem;

      @media (min-width: 1001px) {
        flex-direction: row;
      }

      @media (max-width: 1000px) {
        flex-direction: column;
      }

      + p {
        text-align: center;
      }

      .arrow {
        font-size: 5rem;
        pointer-events: none;
        user-select: none;

        @media (min-width: 1001px) {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (max-width: 1000px) {
          transform: rotate(90deg);
        }
      }
    }

    :global(pre) {
      color: var(--uchu-yin-9);

      :global(.parameter) {
        font-weight: 600;

        :global(.dots) {
          color: var(--uchu-yin-1);
        }
      }
    }

    pre {
      pointer-events: none;

      &:nth-of-type(1) {
        padding-right: 2ch;
      }

      &:nth-of-type(2) {
        height: fit-content;
        padding: 1ch 2ch;
      }

      @media (max-width: 1000px) {
        font-size: 0.8rem;
      }
    }

    @media (max-width: 600px) {
      .hide-small {
        display: none;
      }
    }
  }
</style>

<section class="centered dark query">
  <div class="undershirt">
    <h2>Query the light fantastic.</h2>

    <p>EdgeQL<sup><a href="#footnote-edgeql">1</a></sup> is the best part of the original, and Disc keeps it intact. Ask for the shape you want and get the shape you want — objects, nested links, and all — compiled straight to PostgreSQL underneath. <br/><br/>No <abbr title="Object-Relational Mapping">ORM</abbr> to fight. No mapping layer to maintain. No N+1 surprises <br class="hide-small"/>waiting in the dark.</p>

    <div class="pre-wrap">
      <pre><code>{@html QUERY_CODE}</code></pre>
      <div class="arrow">→</div>
      <pre><code>{@html QUERY_RESPONSE}</code></pre>
    </div>

    <p><span class="highlight">One query. One round trip. The exact shape you described.</span></p>
  </div>
</section>
