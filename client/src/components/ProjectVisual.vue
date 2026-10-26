<template>
  <component :is="cartoons[name] ?? PulseCartoon" />
</template>

<script setup>
import AstronautCartoon from './cartoons/AstronautCartoon.vue'
import EcoCarCartoon from './cartoons/EcoCarCartoon.vue'
import NexumCartoon from './cartoons/NexumCartoon.vue'
import OmniaCartoon from './cartoons/OmniaCartoon.vue'
import PulseCartoon from './cartoons/PulseCartoon.vue'
import VaultCartoon from './cartoons/VaultCartoon.vue'

defineProps({ name: { type: String, required: true } })

const cartoons = {
  pulse: PulseCartoon,
  astronaut: AstronautCartoon,
  vault: VaultCartoon,
  nexum: NexumCartoon,
  omnia: OmniaCartoon,
  eco: EcoCarCartoon
}
</script>
