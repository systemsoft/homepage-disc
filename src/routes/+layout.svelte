<script lang="ts">
  /*** UTILITY ------------------------------------------ ***/

  import { VERSION } from "$lib/constant";

  import DSGN from "$lib/component/DSGN.svelte";
  import Footer from "$lib/component/Footer.svelte";
  import Navigation from "$lib/component/Navigation.svelte";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<style lang="scss">
  @use "@inc/uchu/scss" as *;

  :global(section) {
    background-color: var(--uchu-yang);
    overflow-x: hidden;
    position: relative;
    z-index: 1;

    @media (min-width: 1201px) {
      padding-bottom: 6rem;
      padding-top: 6rem;
    }

    @media (max-width: 1200px) {
      padding-bottom: 3rem;
      padding-top: 3rem;
    }

    :global(sub) {
      display: none;
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 1;
    }

    :global(h2) {
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

    :global(ul) {
      margin-left: 1rem;
      margin-top: 1rem;
    }

    :global(li),
    :global(p) {
      line-height: 1.33;

      @media (min-width: 601px) {
        font-size: 1.25rem;
      }

      @media (max-width: 600px) {
        font-size: 1.05rem;
      }

      :global(code) {
        margin: 0 0.5ch; padding: 0 0.5ch;

        background-color: oklch(var(--uchu-yellow-1-raw) / 40%);
        border: 1px solid var(--uchu-gray-1);
        border-image-slice: 1;
        border-image-source: linear-gradient(to right, var(--uchu-yellow-5), var(--uchu-yellow-5) 5%, transparent 5%, transparent 95%, var(--uchu-yellow-5) 95%, var(--uchu-yellow-5));
        font-size: 90%;
      }
    }

    :global(p) {
      font-weight: 500;
    }
  }

  :global(section.alt) {
    background-color: var(--uchu-gray-1);
  }

  :global(section.centered) {
    :global(h2) {
      text-align: center;

      :global(+ p) {
        margin: 1rem auto 0;
        max-width: 700px;
        text-align: center;
      }
    }
  }

  :global(section.dark) {
    background-color: var(--uchu-yin);
    color: var(--uchu-yin-3);

    :global(h2),
    :global(.highlight) {
      color: var(--uchu-yang);
    }
  }

  :global(pre) {
    background-color: var(--uchu-yang);
    border: 1px solid var(--uchu-gray-2);
    font-size: 1rem;
    max-width: 800px;
    overflow-x: hidden;
    overflow-y: scroll;
    overscroll-behavior-y: none;

    :global(code) {
      position: relative;
    }

    :global(span.file) {
      background-color: var(--uchu-gray-2);
      color: var(--uchu-yin-5);
      display: block;
      padding: 1ch 2ch;
      position: sticky;
      top: 0;
      transform: translateX(-2ch);
      width: calc(100% + 3ch);
      z-index: 1;
    }

    :global(span.green) {
      background-color: var(--uchu-green-1);
      color: var(--uchu-yin-8);
    }

    :global(span.line-number) {
      background-color: var(--uchu-gray-1);
      color: var(--uchu-gray-4);
      pointer-events: none;
      user-select: none;
    }

    :global(span.line-number:first-of-type),
    :global(span.line-number:last-of-type) {
      display: inline-block;
    }

    :global(span.line-number:first-of-type) {
      padding-top: 1ch;
    }

    :global(span.line-number:last-of-type) {
      padding-bottom: 1ch;
    }

    :global(span.purple) {
      color: var(--uchu-purple-4);
    }

    :global(span.yellow) {
      background-color: var(--uchu-yellow-1);
    }
  }
</style>

<svelte:head>
  <meta name="description" content="Disc is a schema-first, TypeScript-native database built on Deno."/>
  <meta property="og:image" content="https://disc.sh/open-graph-logo.png?{VERSION}"/>
  <meta property="og:title" content="Disc"/>
  <meta property="og:description" content="Disc is a schema-first, TypeScript-native database built on Deno."/>
  <meta property="og:url" content="https://disc.sh"/>
  <meta property="og:locale" content="en_US"/>
  <meta property="og:site_name" content="Disc"/>
  <meta property="og:type" content="website"/>

	<link rel="icon" href={favicon}/>
</svelte:head>

<Navigation/>

{@render children()}

<Footer/>

<DSGN/>
