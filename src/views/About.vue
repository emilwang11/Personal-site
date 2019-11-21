<template>
  <b-container fluid class="px-0 mb-5  ">
    <b-img
       src="/img/Quote.png"
       class="quote m-4 p-4"
     ></b-img>

    <div>
      <h2 class="w-25"> About </h2>
    </div>
    <b-container fluid class="home px-0">
        <b-row class="my-2">
          <b-col
            sm=12
            md="3"
            offset-md=1
          >
            <b-img
              fluid
              src="/img/about.png"
              class="h-100 w-100 background-image"
            ></b-img>
          </b-col>
          <b-col
            sm=12
            md=8
          >
            <p class ="intro w-75">
              My dream job as a child was to be an inventor. Not even knowing exactly what that meant,
              I just wanted to design and build things that solved people’s problem. I kept a sketchbook
              full of ideas for inventions/innovations from apps to newly designed backpacks. When I got older,
              I discovered that was essentially what an engineer did.
             </p>
             <p class ="intro w-75 my-4">
              Software has become one of the most powerful vehicles for change and I wanted to be able to learn to build something myself.
              </p>
              <p class ="intro w-75 my-4">
              Now with a technical foundation, I’m interested product management as it’s an intesection with my interests in business,
              values empathy and the human aspect of engineering, and leverages my strong suit of critical thinking.
            </p>

          </b-col>
        </b-row>
      </b-container>


  </b-container>
</template>



<style lang="scss">

.quote{
  width: auto;
  height: 20%;
}

.background-image {
  background-size: cover;
  background-position: center;
  width: 100% !important;
  height: auto !important;
}

</style>