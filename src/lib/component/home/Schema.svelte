<script lang="ts">
  /*** IMPORT ------------------------------------------- ***/

  import { default as dedent } from "@netopwibby/dedent";

  /*** UTILITY ------------------------------------------ ***/

  import { inViewOnce } from "$lib/in-view";

  const DISC_SDL = dedent.withOptions({ trimWhitespace: false })`
    type Merchant extending BaseRecord {
      allowedOrigins -> array<str>;
      multi apiKeys -> api::ApiKey;
      autoSettle -> int64 {
        constraint one_of (0, 1);
        <span class="yellow"># 0 === false</span>
        default := 1;
      };
      customBranding -> json;
      required email -> str { constraint exclusive; };
      metadata -> json;
      onboardingCompleted -> int64 {
        constraint one_of (0, 1);
        <span class="yellow"># 0 === false</span>
        default := 0;
      };
      required organizationName -> str;
      multi paymentRequirements -> payment::PaymentRequirements;
      payoutAddresses -> PayoutAddresses;
      multi payouts -> settlement::Payout;
      settlementDelaySeconds -> int64 { default := 0; };
      status -> MerchantStatus { default := MerchantStatus.PENDING; };
      tier -> MerchantTier { default := MerchantTier.STARTER; };
      multi transactions -> payment::Transaction;
      multi webhookEndpoints -> webhook::WebhookEndpoint;
      webhookRetries -> int64 { default := 3; };
      <span class="yellow">#</span>
      index on ((.created, .status, .tier));
    }
  `;

  /*** STATE -------------------------------------------- ***/

  let visible = $state(false);
</script>

<style lang="scss">
  @use "@inc/uchu/scss" as *;

  .schema {
    @media (max-width: 1000px) {
      p {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    &:not(.visible) {
      pre {
        box-shadow: 5px 5px oklch(var(--uchu-yin-3-raw) / 5%);
      }
    }

    &.visible {
      pre {
        box-shadow: 15px 15px oklch(var(--uchu-yin-3-raw) / 10%);
      }
    }

    pre {
      height: 400px;
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 2ch;
      padding-left: 2ch;
      transition: box-shadow 0.5s;
      width: 100%;

      @media (min-width: 1201px) {
        margin-top: 3rem;
      }

      @media (max-width: 1200px) {
        margin-top: 2rem;
      }

      @media (max-width: 1000px) {
        font-size: 0.8rem;
        max-width: 90vw;
      }
    }

    .point1,
    .point2,
    .point3 {
      background-color: var(--uchu-pink-1);
      border: 1px solid var(--uchu-pink-3);
      font-size: 0.8rem;
      line-height: 1.33;
      padding: 0.25ch 1ch;
      position: absolute;
      user-select: none;
    }

    .point1 {
      @media (min-width: 1001px) {
        top: 2.6ch; left: 46ch;
      }

      @media (max-width: 1000px) {
        top: 2ch; left: 37ch;
      }

      sup a {
        font-size: 0.6rem;
      }
    }

    .point2 {
      @media (min-width: 1001px) {
        top: 12ch; left: 37.5ch;
      }

      @media (max-width: 1000px) {
        top: 15ch; left: 18.5ch;
      }
    }

    .point3 {
      @media (min-width: 1001px) {
        bottom: 26.5ch; left: 49ch;
      }

      @media (max-width: 1000px) {
        bottom: 22ch; left: 39ch;
      }
    }
  }
</style>

<section class="centered schema" class:visible {@attach inViewOnce((isVisible) => visible = isVisible, { threshold: 0.8 })}>
  <div class="undershirt">
    <h2>Schema‑first. <br/>Second to none.</h2>

    <p>Most databases make the schema something you wrestle into place after the fact. <br/><br/>Disc puts it first. You write declarative <abbr title="Schema Definition Language">SDL</abbr> — types, links, properties, constraints — and that single description drives your tables, your migrations, and your generated types. <br/><br/>Define it once. Trust it everywhere.</p>

    <pre><span class="file">dbschema/default.disc</span><code><div class="point1">Gel<sup><a href="#footnote-gel">2</a></sup>‑compatible <abbr title="Schema Definition Language">SDL</abbr></div><div class="point2">Links, properties, and constraints</div><div class="point3">Validated before a single table is built</div>{@html DISC_SDL}</code></pre>
  </div>
</section>
