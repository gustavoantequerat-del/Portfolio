<template>
  <!-- Fondos cálidos animados -->
  <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    <div class="absolute top-0 left-1/4 w-[540px] h-[540px] bg-amber-100/40 rounded-full blur-[140px] animate-blob" />
    <div class="absolute top-1/3 right-5 w-[620px] h-[620px] bg-orange-100/35 rounded-full blur-[160px] animate-blob" style="animation-delay: -6s" />
    <div class="absolute bottom-10 left-10 w-[580px] h-[580px] bg-emerald-100/30 rounded-full blur-[150px] animate-blob" style="animation-delay: -12s" />
  </div>

  <Transition name="fade" mode="out-in">
    <AppLoader v-if="!data" :error="error" @retry="reload" />

    <div v-else>
      <ScrollProgress />
      <NavBar :profile="data.profile" />

      <main class="w-full pt-28 md:pt-36 flex flex-col gap-24 md:gap-32 pb-24">
        <HeroSection :profile="data.profile" />
        <StatsStrip :stats="data.stats" :skills="data.skills" />
        <ProjectsSection :projects="data.projects" />
        <ExperienceSection :experience="data.experience" :education="data.education" />
        <StackSection :skills="data.skills" :languages="data.profile.languages" />
        <AchievementsSection :achievements="data.achievements" :certifications="data.certifications" />
        <ContactSection :profile="data.profile" :project-types="data.projectTypes" />
      </main>

      <FooterSection :profile="data.profile" />
      <RocketButton />
    </div>
  </Transition>
</template>

<script setup>
import { usePortfolio } from './composables/usePortfolio'
import AppLoader from './components/AppLoader.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsStrip from './components/StatsStrip.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import StackSection from './components/StackSection.vue'
import AchievementsSection from './components/AchievementsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import RocketButton from './components/cartoons/RocketButton.vue'

const { data, error, reload } = usePortfolio()
</script>
