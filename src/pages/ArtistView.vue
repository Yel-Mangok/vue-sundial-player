<script setup>
    import { computed } from 'vue';
    import usePlayer from '../composables/usePlayer';

const { queue, play} = usePlayer;

const artists = computed(() => {
    const map = {};
    queue.value.forEach((t, i) => {
        if (!map[t.artists])
           map[t.artist] = {name: t.artist, tracks: [], color: t.color};
        map[t.artist].tracks.push({...t, index: i});
    });

    return Object.values(map);
    
});
</script>

<template>
    <div class="artists">
        <section class="artist-hero">
            <p class="eyebrow">Browser</p>
            <h2 class="hero-title">Artists</h2>
        </section>
        <section>
            <article
               v-for="artist in artists"
               :key="artist.name"
            >
               <div class="artist-avatar" :style="{background: artist.color}">
                {{ artist.name.charAt(0) }}
                </div>
                <h3 class="artist-name">{{ artist.name }}</h3>
                <p class="artist-count">{{ artist.tracks.length }} tracks</p>
                <ul class="artist-tracks">
                    <li 
                        v-for="t in artist.tracks"
                        :key="t.id"
                        @click="play(t.index)"
                        >
                    </li>
                </ul>
            </article>
        </section>
    </div>
</template>