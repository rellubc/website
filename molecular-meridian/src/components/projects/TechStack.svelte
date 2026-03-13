<script lang="ts">
    import { getIcon } from "../Helpers";

    export let techStack: string[] = []
</script>

<div class="tech-stack">
    <h4>Tech Stack</h4>
    <ul class="tech-stack-listings">
        {#each techStack as tech}
            <li class="tech-stack-listing">
                <i class={getIcon(tech)}></i>
                <p>{tech}</p>
            </li>
        {/each}
    </ul>
</div>

<style>
    i {
        font-size: 2rem;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .tech-stack {
        display: flex;
        flex-direction: column;
    }

    .tech-stack-listings {
        display: grid;
        grid-template-columns: repeat(4, 7rem);
        gap: 1rem;

        p {
            margin: 0;
        }
    }

    .tech-stack-listing {
        height: 7rem;
        width: 7rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid black;
    }
</style>
