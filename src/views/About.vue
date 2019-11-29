<template>
  <b-container fluid class="px-0 mb-5  ">
    <b-col
      col="auto"
      sm="auto"
      md="auto">
      <b-img
       src="/img/Quote.png"
       class="quote m-4 p-4 pl-0"
     ></b-img>
    </b-col>

    <div>
        <h2 class="align-center"> About </h2>
    </div>
    <b-container fluid class="home px-0">
        <b-row class="my-2">
           <b-col
            sm="11"
            offset-sm="1"
            md="3"
            offset-md="1"
            class="mb-4 pl-0"
          >
            <b-img
              fluid
              src="/img/about.png"
              class="w-100 background-image"
            ></b-img>
          </b-col>
          <b-col
            sm=12
            md=8
          >
            <p class ="about-content w-75">
              My dream job as a child was to be an inventor. Not even knowing exactly what that entailed,
              I just wanted to design and build things that solved people’s problem. I kept a sketchbook
              full of ideas for inventions/innovations from apps to newly designed backpacks. When I got older,
              I discovered that was essentially what an engineer did.
             </p>
             <p class ="about-content w-75 my-4">
              Software has become one of the most powerful vehicles for change and I wanted to learn how to program to bring my ideas to life.
              </p>
              <p class ="about-content w-75 my-4">
              Now with a technical foundation, I’m interested product management as it’s an intesection with my interests in business,
              focuses on the human aspect of engineering, and leverages my strong suit of critical thinking.
            </p>
            <p class ="about-content w-75 my-4"> Learn more about my experience on my <a class= "resume-link" href="/img/resume.pdf" target="_blank"> resume.</a></p>
          </b-col>
        </b-row>
      </b-container>
  </b-container>
</template>

<style lang="scss">
.about-content{
  color: #3B3333;
  font-size: 1.1em;
  margin: auto;
  text-align: left;
}

  .quote{
  width: auto;
  height: 20%;
}
@media (max-width: 575.98px) {
  .quote{
  width: 90%;
  height: auto;
}
}

.background-image {
  background-size: cover;
  width: 80% !important;
  height: auto !important;
  background-position: center;
}

.resume-link:hover{
color: rgb(187, 116, 98);
text-decoration: none;
}

.resume-link{
color: rgb(221, 148, 130);
text-decoration: none;
}

</style>
