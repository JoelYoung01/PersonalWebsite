<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <v-img
          class="rounded"
          height="350"
          width="350"
          src="/images/portrait2.jpg"
          alt="A picture of joel"
        />
      </v-col>
      <v-col>
        <div class="text-h2">My Name is Joel Young</div>
        <div class="text-h4">
          I am a Senior at UW-Stout, studying Applied Mathematics and Computer
          Science.
        </div>

        <div class="text-h6 mt-15">
          I enjoy writing software as a career with Sentry Insurance as well as
          in my free time. I am currently most interested in Machine Learning
          and Web Applications, and have a couple
          <NuxtLink to="projects" style="text-decoration: none">
            personal projects
          </NuxtLink>
          where I explore these ideas.
        </div>
        <div class="text-h6 mt-3">
          I also enjoy spending time in Nature whether it be a backpacking trip
          or a picnic in the park, and am always happy with my friends around a
          campfire. I must admit I also enjoy video games quite a bit, including
          (but not limited to) Minecraft, Forza Horizon 4, Terraria, Battlefield
          4, and really anything else you can play with the bros.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12" md="6" lg="4">
        <v-card>
          <v-card-title class="text-h4">Experience</v-card-title>
          <v-card-text>
            <div class="text-body-1">
              I have touched a variety of languages in my personal,
              professional, and educational career. A few of my favorites:
              <ul class="mb-5">
                <li>C#</li>
                <li>Java</li>
                <li>Python</li>
                <li>SQL</li>
                <li>JavaScript / TypeScript</li>
                <li>C++</li>
              </ul>
              Using these Languages, I have written code within some popular
              frameworks such as <v-chip small>ASP.NET</v-chip>,
              <v-chip small>React.js</v-chip>, <v-chip small>Vue.js</v-chip>,
              and <v-chip small>Nuxt.js</v-chip>.
            </div>
            <div class="text-body-1 mt-5">
              I also enjoy exploring the powers of various Linux OS's, through
              web server hosting as well as just personal use and curiosity.
              This website is hosted on my own Linux PC that sits right under my
              dresser, something that I am rather proud of. I feel comfortable
              using a bare bones command prompt when working with a computer,
              and every time I work on a linux-related project I end up learning
              some new useful command.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" md="6" lg="4">
        <v-card>
          <v-card-title class="text-h4">Tools and Software</v-card-title>
          <v-card-text>
            <div class="text-body-1">
              So far I have used many cutting-edge technologies, thanks to most
              companies offering free or reduced plans for students. Some
              notable softwares and tools that I have used are:
              <ul>
                <li>Visual Studio (2019, 2022)</li>
                <li>Visual Studio Code</li>
                <li>Git, GitHub, BitBucket</li>
                <li>Eclipse</li>
                <li>IntelliJ IDEA</li>
                <li>MongoDB</li>
                <li>MySQL, MariaDB, Microsoft SQL Server</li>
                <li>Jupyter, PyTorch, fast.ai</li>
                <li>Node.js</li>
              </ul>
              Beyond these I am quite adaptable and enjoy exploring new tools
              that are built to make the average developer's life easier. An
              honerable mention for technologies that I've used a ton would have
              to include Stack Overflow, for I would not be where I am today
              without that resource.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" md="6" lg="4">
        <v-card>
          <v-card-title class="text-h4">Favorite Projects</v-card-title>
          <v-card-text>
            <div class="text-body-1">
              To see a comprehensive list of the projects I've worked on
              (educational and personal), visit
              <nuxt-link class="text-decoration-none" to="projects">
                this page</nuxt-link
              >. Of these projects, there are a few of which I enjoyed the most:
            </div>
            <div class="text-subtitle-1 mt-4">This Website</div>
            <div class="text-body-2">
              I started this website as a proof of concept project back in the
              beginning of 2022 and since then it has become thoroughly
              enjoyable to develop. I chose <v-chip small>Nuxt.js</v-chip> to
              develop in, due to my experience with
              <v-chip small>Vue.js</v-chip> at Sentry Insurance. I also host
              this website on my own pc, which exposed me to the challenges of
              hosting a website locally, which has been quite rewarding.
            </div>
            <div class="text-subtitle-1 mt-4">The Game of Life</div>
            <div class="text-body-2">
              The game of life project was also one of my favorites because it
              fascinates me. The concept that such a simple set of rules can
              produce such complex patterns and possiblities amazes me, and when
              I was able to bring this concept into reality by my own hand I was
              all the more fascinated. Machines like Conway's Game of Life lead
              me to wonder about the complexity of our beginnings as humans, and
              about what our initial conditions might have been in order to
              create such complex beings.
            </div>
            <div class="text-subtitle-1 mt-4">Minecraft Server</div>
            <div class="text-body-2">
              Though a Minecraft Server might not seem like a crazy project,
              setting up, using, and maintaining various Minecraft servers over
              the years has been one of my most rewarding endeavors, for a
              couple reasons. First, because of my interest in the game but also
              linux, I was introduced to server hosting on linux which pushed me
              into the world of linux servers. Though I have not had thorough
              experience in this field, I love to learn and am always amazed at
              the technologies that exist in this area. As I grew more
              comfortable with linux machines, I noticed that I have become much
              more comfortable with a command line, and in some cases a command
              line only (especially ssh). I would not be as far as I am today in
              my knowledge without my minecraft servers, and many hours late
              into the night googling linux terms and error messages.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "index",
};
</script>
