<script lang="ts">
  import { GolfBall } from '$lib/golf/propTypes';
  // import { cubicOut } from 'svelte/easing';
  import { vec2 } from 'gl-matrix';
  import { Layer } from 'svelte-canvas';
  import { tweened } from 'svelte/motion';
  import { writable } from 'svelte/store';

  // in this the x and y are real
  export let size;
  export let init_x;
  export let init_y;

  const x = writable<number>(init_x);
  const y = writable<number>(init_y);
  let hitVelocity: vec2 = vec2.create();
  $: hitEnergy = vec2.len(hitVelocity);
  $: energy = tweened<number>(hitEnergy, { duration: hitEnergy / 10 /*, easing: cubicOut */ });
  let velocity: vec2 = vec2.create();
  $: percentageEnergyLeftAfterFriction = $energy / hitEnergy; // name shorter pls
  $: vec2.mul(velocity, velocity, [percentageEnergyLeftAfterFriction, percentageEnergyLeftAfterFriction]);

  const sprite: HTMLImageElement = GolfBall;
  $: vec2.set(velocity, Math.cos($energy), Math.sin($energy));
  $: in_motion = $energy != 0;
  let last_mousedown = { clientX: 0, clientY: 0 };

  function applyVelocity() {
    $x += velocity[0];
    $y += velocity[1];
  }

  function begin_swing(event: MouseEvent) {
    if (!in_motion) last_mousedown = event;
  }

  function hit(event: MouseEvent) {
    vec2.set(hitVelocity, last_mousedown.clientX - event.clientX, last_mousedown.clientY - event.clientY);
  }

  $: render = ({ context, width, height }) => {
    applyVelocity();
    context.drawImage(sprite, $x, $y, size, size);
    /*if (LEVEL.hasBean) {
      Bean.draw()
    }*/
  };
</script>

<svelte:window on:mousedown={begin_swing} on:mouseup={hit} />

<Layer {render} />
