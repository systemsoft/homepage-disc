<script lang="ts">
  /*** IMPORT ------------------------------------------- ***/

  import { default as dedent } from "@netopwibby/dedent";

  /*** UTILITY ------------------------------------------ ***/

  import Hero from "$lib/component/home/Hero.svelte";
  import Intro from "$lib/component/home/Intro.svelte";
  import LastCall from "$lib/component/home/LastCall.svelte";
  import Migrations from "$lib/component/home/Migrations.svelte";
  import Postgres from "$lib/component/home/Postgres.svelte";
  import Query from "$lib/component/home/Query.svelte";
  import Runtime from "$lib/component/home/Runtime.svelte";
  import Schema from "$lib/component/home/Schema.svelte";
  import Types from "$lib/component/home/Types.svelte";
  import UI from "$lib/component/home/UI.svelte";
</script>

<style lang="scss"></style>

<Hero/>

<Intro/>

<Schema/>

<Query/>

<Postgres/>

<Runtime/>

<Migrations/>

<UI/>

<LastCall/>
