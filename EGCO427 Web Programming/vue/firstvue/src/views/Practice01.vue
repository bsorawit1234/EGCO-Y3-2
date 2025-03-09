<template>
    <div>
        <p>Title: {{ this.title }}</p>
        <p>Released: {{ this.release }}</p>
        <p v-show="isOld(release)">The Movie is old</p>
        <p v-show="!isOld(release)">The Movie is New</p>

        <div v-bind:title="title">Hover your mouse here</div>

        <input type="text" v-on:keyup="updateText($event)" />
        <p>Output: {{ name }}</p>
    </div>
</template>

<script>
export default {
    name: "Practice01",
    props: {},
    data() {
        return {
            title: "Star War",
            release: "1990",
            name: "",
        };
    },
    mounted() {},
    methods: {
        isOld: (year) => {
            if (Number(year) < 2000) return true;
            else false;
        },
        updateText: function (event) {
            this.name = event.target.value;
        },
    },
};
</script>

<!-- Exercise 1: Output whether or not the movie is old or new by using a methos.
  The movie is old if it was prior to year 2000. -->

<!-- Exercise 3: Make the below text input update a data property on every "keyup" event. Also output the data property.
Hint: event.target.value gives access to input value. -->
