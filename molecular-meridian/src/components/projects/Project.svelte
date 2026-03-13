<script lang="ts">
    import TechStack from "./TechStack.svelte";

    export let title: string
    export let descriptions: string[]
    export let roles: string[]
    export let period: string
    export let techStack: string[]
    export let shortName: string
    export let images: number
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
    <div class="images" style={`grid-template-columns: repeat(${images > 2 ? Math.ceil(images / 2) : images}, 1fr)`}>
        {#each { length: images } as _, i }
            <img src={`/${shortName}${i}.png`} alt={`${shortName}${i} image`}/>
        {/each}
    </div>
</div>

<style>
    .project-info {
        height: 18rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        border: 1px solid #ddd;
        border-radius: 0.5rem;
        overflow: hidden;
    }

    @media (max-width: 1200px) {
        .project-info {
            flex-direction: column;
            height: auto;
        }
        
        .images {
            max-width: 100%;
        }
    }

    .project-details {
        flex: 1;
        padding: 1rem;
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

    .images {
        height: 100%;
        max-width: 32rem;

        flex: 0 0 auto;

        display: grid;

        border-left: 1px solid #ddd;

        img {
            width: 100%;
            height: 100%;
        }
    }
</style>