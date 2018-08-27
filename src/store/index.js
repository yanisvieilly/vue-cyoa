import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: {
      "1": {
        id: "1",
        text:
          "Lorem ipsum dolor amet vaporware woke cred hot chicken paleo gastropub. Beard paleo put a bird on it, YOLO subway tile godard raw denim meditation vice prism kickstarter squid. DIY master cleanse yr, taxidermy hell of sustainable banjo pabst locavore microdosing copper mug. IPhone pug edison bulb wayfarers banjo. Tumblr unicorn chia roof party cold-pressed mlkshk. Hella offal bespoke leggings brunch tousled portland four loko.",
        links: [
          { destination: "2", text: "I wanna go to page 2" },
          { destination: "3", text: "Yeah I guess page 3 is better" }
        ]
      },
      "2": {
        id: "2",
        text: "Hello this is page 2",
        links: []
      },
      "3": {
        id: "3",
        text: "Welcome to page 3",
        links: []
      }
    }
  },
  getters: {
    getPageById: state => id => state.pages[id]
  }
});
