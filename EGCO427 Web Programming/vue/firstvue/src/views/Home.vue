<template>
    <div>
        <h1>{{ name }}</h1>
        <p>Counter: {{ counter }}</p>
        <p>Fullname: {{ getFullName(firstName, lastName).name }}</p>
        <p>UpperFirst: {{ upperFirst("hEELL WORLD") }}</p>
        <a v-bind:href="url">Visit vue page</a>
        <br />
        <span v-bind:title="url">test message</span>
        <br />
        <button v-on:click.once="onClick('EIE', $event)">Click Here</button>
        <div v-html="html"></div>

        <p v-if="itemsInStock > 10">{{ itemsInStock }} is in stock</p>
        <p v-else-if="itemsInStock > 0">
            hurry up there are just few items left!
        </p>
        <p v-else>we are all out</p>

        <ul>
            <li v-for="title in titles" :key="title">{{ title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Home",
    props: {},
    data() {
        return {
            titles: ["AYO", "WASSUP", "BRO"],
            name: "Bob Cat",
            counter: 0,
            firstName: "Bob",
            lastName: "Cat",
            url: "https://vuejs.org/",
            html: "<h1>HELLO</h1>",
            itemsInStock: 0,
        };
    },
    mounted() {},
    methods: {
        // getFullName(first, last) {
        //     return first + " " + last;
        // },
        getFullName: (first, last) => {
            return {
                name: first + " " + last,
            };
        },
        upperFirst: (value) => {
            return value
                .split(" ")
                .map(
                    (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                )
                .join(" ");
        },
        onClick: (msg, event) => {
            alert(msg);
            console.log(event);
        },
    },
};
</script>

<!-- Exercise 1: Output whether or not the movie is old or new by using a methos.
  The movie is old if it was prior to year 2000. -->
