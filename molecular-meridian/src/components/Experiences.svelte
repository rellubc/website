<script>
  import Experience from "./experiences/Experience.svelte";

</script>

<section id="Experience">
    <h2>Experience</h2>
    <div class="experience-listings">
        <Experience
            category="Work Experience"
            experiences={{
                "Baked By Dora: Bakery & Cafe": {
                    descriptions: [
                        "Barista"
                    ],
                    period: "January 2025 - Present"
                }
            }}
        />

        <Experience
            category="Volunteering"
            experiences={{
                "Training Program @ UNSW DevSoc": {
                    descriptions: [
                        "Training Lead"
                    ],
                    period: "July 2025 - September 2025"
                }
            }}
        />

        <Experience
            category="Education"
            experiences={{
                "University of New South Wales (UNSW)": {
                    descriptions: [
                        "Bachelor of Science (Computer Science) w/ Distinction"
                    ],
                    period: "February 2022 - August 2025"
                },
                "Sydney Technical High School": {
                    descriptions: [
                        "High School Diploma"
                    ],
                    period: "January 2016 - September 2021"
                }
            }}
        />
    </div>
</section>

<style>
    .experience-listings {
        display: flex;
        flex-direction: column;
    }

    h2 {
        margin-bottom: 0;
    }
</style>
