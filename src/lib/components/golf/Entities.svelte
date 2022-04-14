<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { Entity } from '$lib/golf/entity';

  function new_energy_tween(energy: number) {
    const t = tweened<number>(energy, { duration: energy / 10, easing: cubicOut });
    t.set(0);
    return t;
  }

  const Ball: Entity = new Entity(0, 0);

  // do something to apply physics here?
  /*
  let energy = new_energy_tween(0);
  $: in_motion = $energy != 0;
  $: Ball.velocity.Mul();
  let x = 0;
  let y = 0;

  let mouse_x: number;
  let mouse_y: number;

  function begin_swing(event: MouseEvent) {
    if (in_motion) {
      mouse_x = event.x;
      mouse_y = event.y;
    }
  }

  function hit(event: MouseEvent) {
    Ball.velocity.Add(mouse_x - event.x, mouse_y - event.y);

    energy = new_energy_tween(Ball.velocity.Mag());
  }*/
</script>

<!--
<svelte:window on:mousedown={begin_swing} on:mouseup={hit} />

<img
  src={assets + '/images/golf/Ball.png'}
  style="width: 50px;
                      height: auto;
                      position: absolute;
                        top: {y}px;
                        left: {x}px;
                        z-index: 69;
                      "
  alt=""
/>
-->
