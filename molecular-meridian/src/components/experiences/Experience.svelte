<script lang="ts">
    export let category: string
    export let experiences: { [key: string]: { descriptions: string[], period: string } }
</script>

<div class="experience-info">
    <h3>{category}</h3>
    {#each Object.entries(experiences) as [key, value]}
        <div class="experience-listing">
            <div class="experience-listing-details">
                <h4>{key}</h4>
                <div>
                    {#each value.descriptions as description}
                        <p>{description}</p>
                    {/each}
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

        h4 {
            margin-bottom: 0;
        }

        p {
            margin: 0;
        }
    }

    .experience-listing-details {
        display: flex;
        flex-direction: column;
    }
</style>