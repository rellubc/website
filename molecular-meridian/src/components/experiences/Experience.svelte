<script lang="ts">
    export let category: string
    export let experiences: { [key: string]: { descriptions: string[], period: string, shortName: string } }
</script>

<div class="experience-info">
    <h3>{category}</h3>
    {#each Object.entries(experiences) as [key, value]}
        <div class="experience-listing">
            <div class="experience-listing-details">
                <div class="experience-listing-details-image-container">
                    <img src={`${value.shortName}icon.${value.shortName === "devsoc" ? "png" : "jpg"}`} alt={`${value.shortName} icon`}/>
                </div>
                <div class="experience-listing-details-descriptions">
                    <h4>{key}</h4>
                    <div>
                        {#each value.descriptions as description}
                            <p>{description}</p>
                        {/each}
                    </div>
                </div>
            </div>
            <p>{value.period}</p>
        </div>
    {/each}
</div>

<style>
    h3 {
        margin-bottom: 0;
    }

    .experience-listing {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 1rem 0 1rem 0;

        h4 {
            margin: 0;
        }

        p {
            margin: 0;
        }
    }

    .experience-listing-details {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

    .experience-listing-details-image-container {
        height: 2rem;
        width: 2rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        border: 1px solid #ddd;
        border-radius: 100%;
        overflow: hidden;

        img {
            height: 2rem;
        }
    }
</style>