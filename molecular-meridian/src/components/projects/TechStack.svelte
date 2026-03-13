<script lang="ts">
    import { getIcon } from "../Helpers";

    export let techStack: string[] = []
</script>

<div class="tech-stack">
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
        font-size: 1rem;
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;

        p {
            margin: 0;
        }
    }

    .tech-stack-listing {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        
        padding: 0.5rem;
        border: 1px solid black;
        border-radius: 0.5rem;
    }
</style>
