<script lang="ts"></script>

<style lang="scss">
  @use "@inc/uchu/scss" as *;

  nav {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;

    .topbar,
    .bottombar {
      display: flex;
      overflow: hidden;
      width: 100%;
    }

    .topbar {
      background-color: var(--uchu-gray-1);
      font-size: 0.6rem;
      justify-content: space-between;
      letter-spacing: 0.0125rem;
      line-height: 1;
      padding: 0.5rem 0.75rem;
      position: absolute;

      a {
        color: inherit;
        font-weight: 500;
        text-decoration: none;
      }
    }

    .bottombar {
      margin-bottom: 0.5rem;
      margin-top: 2rem;

      a {
        font-size: 0.8rem;
        position: relative;
        text-transform: uppercase;
        white-space: nowrap;

        &:not(:hover) {
          color: inherit;
        }

        &:hover {
          color: var(--uchu-blue-4);
          text-decoration: none;
        }

        &:first-of-type {
          @media (max-width: 1500px) {
            margin-left: 0.75rem;
          }
        }

        &:not(:last-of-type) {
          margin-right: 0.75rem;
        }
      }
    }
  }
</style>

<nav>
  <div class="topbar">
    <div class="undershirt">
      <span>Disc is an <a href="https://inc.sh" target="_blank">Ideas Never Cease</a> project</span>
      <span><a href="https://github.com/systemsoft/disc/blob/primary/LICENSE">Apache 2.0 Licensed</a></span>
    </div>
  </div>

  <div class="bottombar">
    <div class="undershirt">
      <a href="https://github.com/systemsoft/disc/tree/primary/docs">Documentation</a>
      <a href="https://github.com/systemsoft/disc">Code Repository</a>
      <a href="https://www.webb.page/index.php?board=6.0" target="_blank">Forum</a>
      <a href="https://discord.gg/UFNgetsZqB" target="_blank">Discord</a>
    </div>
  </div>
</nav>
