<script lang="ts"></script>

<style lang="scss"></style>

<section class="centered dark">
  <div class="undershirt">
    <h2>No ORM. <br/>No remorse.</h2>

    <p>An <abbr title="Object-Relational Mapping">ORM</abbr> sits between you and your data, translating objects into queries it hopes are efficient — and hiding the SQL when they aren’t. <br/><br/>Disc cuts out the middle layer entirely. EdgeQL<sup><a href="#footnote-edgeql">1</a></sup> is the interface, PostgreSQL is the engine, and the shape you ask for is the shape you get. <br/><br/>No lazy‑loading traps. No query you can’t see. No abstraction leaking <br/>the moment things get interesting.</p>

    <p><strong>The <abbr title="Object-Relational Mapping">ORM</abbr> way.</strong> Define a model, then a schema, then a migration, then a mapping — four sources of truth drifting quietly out of sync. Fetch a relation and pray it’s one query, not a hundred.</p>

    <p><strong>The Disc way.</strong> Define your schema once. Query it directly in EdgeQL<sup><a href="#footnote-edgeql">1</a></sup>. Get back typed objects, nested exactly as written, in a single round trip you can read.</p>

    <ul>
      <li>One source of truth, not four</li>
      <li>Relations that nest without N+1</li>
      <li>The SQL is generated, never hidden</li>
      <li>Types from the schema, not stapled on after</li>
    </ul>
  </div>
</section>
