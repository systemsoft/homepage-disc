<script lang="ts">
  /*** UTILITY ------------------------------------------ ***/

  import { copyTextToClipboard } from "$lib/clipboard";
  import { INSTALL, VERSION } from "$lib/constant";

  /*** STATE -------------------------------------------- ***/

  let copied = $state(false);
  let visible = $state(false);
  let y = $state(0);
  let scrollAmount = $derived(Math.round(y / 15));
</script>

<style lang="scss">
  @use "@inc/uchu/scss" as *;

  header {
    align-items: center;
    background-image: url("/clouds.JPG");
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    position: relative;

    @media (min-width: 1201px) {
      height: 550px;
      padding-top: 20.8rem;
    }

    @media (min-width: 1001px) and (max-width: 1200px) {
      height: 425px;
      padding-top: 15rem;
    }

    @media (min-width: 1001px) {
      background-position: center 94%;
      background-size: 121%;
      justify-content: end;
    }

    @media (max-width: 1000px) {
      background-position: bottom;
      background-size: cover;
    }

    @media (min-width: 601px) {
      padding: 2.5rem 3rem 3rem 3rem;
    }

    @media (max-width: 600px) {
      padding: 2rem 1rem;
    }

    &::before {
      width: 100%; height: 100%;
      bottom: 0; left: 0;

      background-image: url("/overlay.png");
      background-position: inherit;
      background-repeat: inherit;
      background-size: inherit;
      content: "";
      opacity: 0.4;
      position: absolute;
      transition: color 0.2s;
      z-index: 1;
    }

    figure {
      display: flex;
      flex-direction: row;
      justify-content: center;
      transition: opacity 0.2s;
      width: 100%;

      @media (min-width: 1201px) {
        height: 302px;
      }

      @media (min-width: 1001px) and (max-width: 1200px) {
        height: 225px;
      }

      @media (min-width: 1001px) {
        position: fixed;
        top: 5.3rem;
      }

      @media (max-width: 1000px) {
        margin-bottom: 1rem;
        position: relative;
      }

      @media (min-width: 601px) and (max-width: 1000px) {
        height: 150px;
      }

      @media (max-width: 600px) {
        height: 75px;
      }

      img {
        animation: splash 0.75s normal forwards ease-in-out;
        animation-iteration-count: 1;
        opacity: 0;
        width: 100%;
      }
    }

    .copy {
      display: flex;
      width: 100%;
      z-index: 2;

      @media (min-width: 1001px) {
        align-items: end;
        flex-direction: row;
        justify-content: space-between;
      }

      @media (max-width: 1000px) {
        align-items: center;
        flex-direction: column;
        text-align: center;
      }

      @media (max-width: 600px) {
        color: var(--uchu-yang);
      }

      h1 {
        font-weight: 500;
        letter-spacing: -0.05rem;
        line-height: 1;
        position: relative;

        @media (min-width: 1201px) {
          font-size: 4rem;
        }

        @media (min-width: 601px) and (max-width: 1200px) {
          font-size: 3rem;
        }

        @media (max-width: 600px) {
          font-size: 2rem;
        }
      }

      p {
        font-size: 1.25rem;
        font-weight: 500;
        margin-top: 0.75rem;
        max-width: 500px;
        position: relative;
        z-index: 1;
      }

      fieldset {
        border: none;
        display: inherit;
        position: relative;

        @media (max-width: 1000px) {
          margin-top: 3rem;
        }

        @media (min-width: 601px) {
          &:not(:hover) {
            &::before {
              color: $uchu-gray-4;
            }
          }

          &:hover {
            &::before {
              color: $uchu-red-4;
            }
          }

          &::before {
            align-self: center;
            content: "→";
            font-size: 2ch;
            position: absolute;
            text-align: center;
            width: 4ch;
          }
        }

        @media (max-width: 600px) {
          flex-direction: column;
          width: 100%;
        }

        &:not(.copied) {
          &::after {
            opacity: 0;
            z-index: -1;
          }
        }

        &.copied {
          &::after {
            opacity: 1;
            z-index: 1;
          }
        }

        &::after {
          width: 100%; height: 100%;

          align-items: center;
          background-color: var(--uchu-green-1);
          color: var(--uchu-green-7);
          content: "copied";
          display: flex;
          flex-direction: row;
          justify-content: center;
          letter-spacing: 0.1rem;
          position: absolute;
          text-transform: uppercase;
          transition: opacity 0.2s;
        }

        label {
          position: absolute;
          top: -3ch;

          @media (min-width: 1201px) {
            left: 5ch;
          }

          @media (min-width: 1001px) and (max-width: 1200px) {
            left: 4.6ch;
          }

          @media (max-width: 1000px) {
            left: 0;
            text-align: center;
            width: 100%;
          }

          a {
            color: inherit;

            &:hover {
              color: var(--uchu-blue-4);
              text-decoration: none;
            }
          }

          span {
            font-family: var(--monospace);

            @media (min-width: 601px) {
              opacity: 0.3;
            }

            @media (max-width: 600px) {
              background-color: var(--uchu-yin);
              opacity: 1;
              padding: 2px 5px;
            }
          }
        }

        input {
          background-color: #fff;
          border: 1px solid $uchu-yang;
          font-family: var(--monospace);

          @media (min-width: 1201px) {
            font-size: 2ch;
            width: 45ch;
          }

          @media (max-width: 1200px) {
            font-size: 1.8ch;
          }

          @media (min-width: 601px) and (max-width: 1200px) {
            width: 40ch;
          }

          @media (min-width: 601px) {
            padding: 1ch 1ch 1ch 4ch;
          }

          @media (max-width: 600px) {
            padding: 1ch 2ch;
            text-align: center;
            width: 100%;
          }

          &:focus {
            outline: none;
          }
        }

        button {
          background-color: var(--uchu-gray-2);
          border: 1px solid var(--uchu-gray-2);
          color: var(--uchu-yin-9);
          font-family: var(--monospace);
          font-size: 2ch;
          letter-spacing: 0.05rem;
          padding: 1ch 2ch;
          position: relative;
          text-transform: uppercase;

          @media (min-width: 601px) {
            &:not(:active) {
              transform: translateX(-1px);
            }

            &:active {
              transform: translateX(-1px) translateY(1px);
            }
          }

          @media (max-width: 600px) {
            font-size: 1.8ch;
          }
        }
      }
    }

    @media (max-width: 600px) {
      .hide-small {
        display: none;
      }
    }
  }

  @keyframes splash {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>

<svelte:window bind:scrollY={y}/>

<header id="top">
  <figure style:opacity={1 - (scrollAmount * 0.075) > 0 ? 1 - (scrollAmount * 0.075) : 0}>
    <img alt="Disc" src="/wordmark.svg"/>
  </figure>

  <div class="copy">
    <div class="undershirt">
      <span>
        <h1>End of line<br/>for legacy databases.</h1>
        <p>From schema to query to server — one language, <br class="hide-small"/>one stack, zero <abbr title="Object-Relational Mapping">ORM</abbr>.</p>
      </span>

      <fieldset class:copied={copied}>
        <label for="install_command"><a href="/install.sh">Inspect install script</a> <span>v{VERSION}</span></label>
        <input id="install_command" readonly type="text" value={INSTALL}/>
        <button
          onclick={() => {
            copied = true;
            copyTextToClipboard(INSTALL);
            setTimeout(() => { copied = false; }, 1250);
          }}>Copy</button>
      </fieldset>
    </div>
  </div>
</header>
