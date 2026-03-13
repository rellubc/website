<script lang="ts">
    import TechStack from "./TechStack.svelte";

    export let title: string
    export let descriptions: string[]
    export let roles: string[]
    export let period: string
    export let techStack: string[]
</script>

<div class="project-info">
    <div class="project-details">
        <div class="project-details-header">
            <div class="project-title-period">
                <h3>{title}</h3>
                <p>{period}</p>
            </div>
            <p>{roles}</p>
        </div>
        {#each descriptions as description}
            <p>{description}</p>
        {/each}

        <TechStack techStack={techStack} />
    </div>
    <div class="image-placeholder">Image placeholder</div>
</div>

<style>
    .project-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
    }

    .project-details-header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h3 {
            margin: 0;
        }

        p {
            font-size: 0.9rem;
            margin: 0;
        }
    }

    .project-title-period {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .image-placeholder {
        height: 22.5rem;
        width: 40rem;

        flex: 0 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid black;
    }
</style>