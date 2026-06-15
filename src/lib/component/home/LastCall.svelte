<script lang="ts"></script>

<style lang="scss">
  @use "@inc/uchu/scss" as *;

  .fin {
    @media (max-width: 1000px) {
      p {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    @media (max-width: 600px) {
      .hide-small {
        display: none;
      }
    }

    a {
      color: var(--uchu-blue-5);
    }

    span {
      color: var(--uchu-yin-1);
      pointer-events: none;
      user-select: none;
    }
  }
</style>

<section class="centered fin">
  <div class="undershirt">
    <h2>Great power comes <br/>with great clarity.</h2>

    <p>Your schema is the contract, your types enforce it, and your queries <br class="hide-small"/>return exactly what they promise. <br/><br/>Disc is built so the database tells you the truth — at compile time, not in production. Aware of your data’s shape, so you never have to guess at it. <br/><br/><a href="#top" title="Install Disc via the install script">Install Disc</a> <span>|</span> <a href="https://github.com/systemsoft/disc/tree/primary/docs" title="Visit the documentation to learn more">Visit documentation</a></p>
  </div>
</section>
