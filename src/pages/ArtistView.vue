<script setup>
// Import the page CSS styles
import "../styles/pages/ArtistView.css";
// Import the Vue.js functions
import { computed } from 'vue';
// Import the Track player logic module
import usePlayer from "../composables/usePlayer.js";

// Destructure needed functions from the shared composable
const { queue, play } = usePlayer();

const artists = computed(() => {
    const map = {};
    queue.value.forEach((t, i) => {
        if (!map[t.artist])
            map[t.artist] = { name: t.artist, tracks: [], color: t.color };
        map[t.artist].tracks.push({ ...t, index: i });
    });
    return Object.values(map);
});
</script>

<template>
    <div class="artists">
        <section class="artist-hero">
            <p class="eyebrow">Browse</p>
            <h2 class="hero-title">Artists</h2>
        </section>
        <section class="artist-grid">
            <article
                class="artist-card"
                v-for="artist in artists"
                :key="artist.name"
            >
                <div class="artist-avatar" :style="{ background: artist.color }">
                    {{ artist.name.charAt(0) }}
                </div>
                <h3 class="artist-name">{{ artist.name }}</h3>
                <p class="artist-count">{{ artist.tracks.length }} tracks</p>
                <ul class="artist-tracks">
                    <li
                        v-for="track in artist.tracks"
                        :key="track.id"
                        @click="play(track.index)"
                    >
                        {{ track.title }}
                    </li>
                </ul>
            </article>
        </section>
    </div>
</template>