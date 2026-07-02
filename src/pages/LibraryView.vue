<script setup>
    import usePlayer from "../composables/usePlayer.js";
    import trackRow  from "../components/TrackRow.vue";
    import TrackRow from "../components/TrackRow.vue";


    const { queue } = usePlayer();
</script>

<template>
    <div class="library">
        <section class="library-hero">
            <p class="eyebrow">Welcome</p>
            <h2 class="hero-title">Your library</h2>
        </section>
        <section class="track-list">
            <TrackRow
                 v-for="(track, i) in queue"
                 :key="track.id"
                 :track="track"
                 :index="i"
            />
        </section>
    </div>
</template>