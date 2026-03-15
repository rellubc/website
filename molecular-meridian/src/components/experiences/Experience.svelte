<script lang="ts">
    export let category: string
    export let experiences: { [key: string]: { descriptions: string[], period: string, shortName: string } }
</script>

<div class="experience-info">
    <h3>{category}</h3>
    {#each Object.entries(experiences) as [key, value]}
        <div class="experience-listing">
            <div class="experience-listing-image-container">
                <img src={`/website/${value.shortName}icon.${value.shortName === "devsoc" ? "png" : "jpg"}`} alt={`${value.shortName} icon`}/>
            </div>
            <div class="experience-listing-details">
                <h4>{key}</h4>
                <div>
                    {#each value.descriptions as description}
                        <p>{description}</p>
                    {/each}
                </div>
            </div>
            <p class="experience-listing-details-period">{value.period}</p>
        </div>
    {/each}
</div>

<style>
    .experience-info {
        width: 100%;
    }

    .experience-listing {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        
        padding: 1rem 1rem;
    }

    .experience-listing-details {
        width: 100%;
        display: flex;
        flex-direction: column;

        p {
            margin: 0;
        }

        h4 {
            margin: 0;
        }
    }

    .experience-listing-image-container {
        width: 100%;
        max-width: 3rem;
        aspect-ratio: 1 / 1;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        border: 1px solid #ddd;
        border-radius: 100%;
        overflow: hidden;

        img {
            width: 3rem;
        }
    }

    .experience-listing-details-period {
        text-wrap: nowrap;
    }

    @media (max-width: 630px) {
        .experience-listing-details-period {
            text-wrap: wrap;
        }
    }
</style>