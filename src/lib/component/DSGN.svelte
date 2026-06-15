<script lang="ts"></script>

<style lang="scss">
  aside {
    background-color: var(--uchu-yin);
    color: var(--uchu-yang);
    cursor: default;
    font-family: var(--monospace);
    font-size: 12px;
    letter-spacing: 0.025rem;
    line-height: 1;
    overflow: hidden;
    padding-bottom: 0.5ch;
    padding-top: 0.5ch;
    position: relative;
    text-transform: lowercase;

    &:hover {
      animation: gradient 15s ease infinite;
     	background-image: linear-gradient(45deg, var(--uchu-pink-4), var(--uchu-blue-4), var(--uchu-red-4), var(--uchu-purple-4));
     	background-size: 400% 400%;

      &::after {
        animation: 1s ease-in-out hover-dsgn;
      }
    }

    .undershirt {
      @media (min-width: 601px) and (max-width: 1550px) {
        padding-left: 2rem;
        padding-right: 2rem;
      }

      @media (max-width: 600px) {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }

    &::before,
    &::after {
      content: "";
      pointer-events: none;
      position: absolute;
      top: 0;
    }

    &::before {
      width: 100%; height: 1px;

      background-color: oklch(var(--uchu-yang-raw) / 10%);
      left: 0;
    }

    &::after {
      width: 5ch; height: 100%;

      background-color: var(--uchu-gray-1);
      left: -10ch;
      opacity: 0.3;
      transform: skew(40deg, 0deg) translateX(-3vw);
    }

    a {
      color: inherit;
      font-weight: 600;
      text-decoration: underline;
    }
  }

  @keyframes gradient {
  	0% {
  		background-position: 0% 50%;
  	}

  	50% {
  		background-position: 100% 50%;
  	}

  	100% {
  		background-position: 0% 50%;
  	}
  }

  @keyframes hover-dsgn {
    0% {
      transform: skew(40deg, 0deg) translateX(-3vw);
    }

    100% {
      opacity: 0;
      transform: skew(40deg, 0deg) translateX(103vw);
    }
  }
</style>

<aside>
  <div class="undershirt">site by <a href="https://dsgn.inc.sh?ref=disc.sh" title="design services for the good natured">dsgn.</a></div>
</aside>
