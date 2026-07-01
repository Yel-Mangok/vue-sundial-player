<script setup>
// Import the component CSS styles
import "../styles/components/TrackRow.css";
// Import the Vue.js function
import { computed } from "vue";
// Import the Track player logic module
import usePlayer from "../composables/usePlayer.js";
// Import the Vinyl component
import Vinyl from "./Vinyl.vue";

const props = defineProps(
    {
        track: Object,
        index: Number
    }
);

// Destructure needed functions from the shared composable
const { currentTrack, isPlaying, play, pause, formatTime } = usePlayer();

const isCurrent = computed(() => currentTrack.value?.id === props.track.id);
const isActivePlaying = computed(() => isCurrent.value && isPlaying.value);

function handleClick() {
    if (isCurrent.value) {
        isPlaying.value ? pause() : play();
    } else {
        play(props.index);
    }
}
</script>

<template>
    <button
        class="track-row"
        :class="{ current: isCurrent }"
        @click="handleClick"
    >
        <Vinyl :color="track.color" :is-playing="isActivePlaying" :size="44" />
        <div class="track-info">
            <span class="track-title">{{ track.title }}</span>
            <span class="track-artist">{{ track.artist }}</span>
        </div>
        <span class="track-duration">{{ formatTime(track.duration) }}</span>
        <span class="track-icon">{{ isActivePlaying ? '⏸' : '▶' }}</span>
    </button>
</template>