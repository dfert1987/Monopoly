export const Guanxi = [
  {
    Number: 1,
    Text: "Airport Express",
    Instruction: "Advance to Go, and collect 400rmb",
    Type: "advance",
    amt: 0,
    space: 1,
    image: require("./Pics/guanxi-airport.jpeg"),
  },
  {
    Number: 2,
    Text: "Xin Nian Kuai Le!",
    Instruction: "Get 200rmb in hong bao!",
    Type: "receive",
    amt: 200,
    space: 0,
    image: require("./Pics/guanxi-hongbao.jpeg"),
  },
  {
    Number: 3,
    Text: "Full on bender",
    Instruction: "Head to Lantern!",
    Type: "advance",
    amt: 0,
    space: 25,
    image: require("./Pics/guanxi-lantern.jpeg"),
  },
  {
    Number: 4,
    Text: "Start dating French girl.",
    Instruction: "Head to Modernista!",
    Type: "advance",
    amt: 0,
    space: 17,
    image: require("./Pics/guanxi-modernista.jpeg"),
  },
  {
    Number: 5,
    Text: "Drug raid in Sanlitun!",
    Instruction: "Leave country immediately!",
    Type: "advance",
    amt: 0,
    space: 41,
    image: require("./Pics/guanxi-drug.jpeg"),
  },
  {
    Number: 6,
    Text: "Tutoring gig.",
    Instruction: "Get 150rmb!",
    Type: "receive",
    amt: 150,
    space: 0,
    image: require("./Pics/guanxi-tutor.jpeg"),
  },
  {
    Number: 7,
    Text: "Jumble sale!",
    Instruction: "Make 25rmb",
    Type: "receive",
    amt: 25,
    space: 0,
    image: require("./Pics/guanxi-Jumble.jpeg"),
  },

  {
    Number: 9,
    Text: "Ill advised late night meet up with Nigerian homie.",
    Instruction: "Pay 500rmb",
    Type: "pay",
    amt: 500,
    space: 0,
    image: require("./Pics/guanxi-dealer.jpeg"),
  },
  {
    Number: 10,
    Text: "Stuck on NanLouGuxiang",
    Instruction: "Skip next turn",
    Type: "Skip",
    amt: 0,
    space: 0,
    image: require("./Pics/guanxi-nanluo.jpeg"),
  },
  {
    Number: 11,
    Text: "AQI over 400",
    Instruction: "Go back 4 spaces.",
    Type: "Back",
    amt: 4,
    space: 0,
    image: require("./Pics/guanxi-aqi.jpeg"),
  },
  {
    Number: 13,
    Text: "Duck dinner with visiting friend.",
    Instruction: "Head to Dadong",
    Type: "advance",
    amt: 0,
    space: 30,
    image: require("./Pics/guanxi-duck.jpeg"),
  },

  {
    Number: 15,
    Text: "Coffee Shots!",
    Instruction: "Roll Again",
    Type: "reroll",
    amt: 0,
    space: 0,
    image: require("./Pics/guanxi-cdlp.jpeg"),
  },
  {
    Number: 16,
    Text: "Fake alcohol!",
    Instruction: "Go back 5 spaces.",
    Type: "Back",
    amt: 5,
    space: 0,
    image: require("./Pics/guanxi-fake-alcohol.jpeg"),
  },

  {
    Number: 18,
    Text: "Asshole Landlord!",
    Instruction: "Head to nearest opponent owned property and pay double.",
    Type: "Nearest",
    amt: 0,
    space: 0,
    image: require("./Pics/guanxi-landlord.jpeg"),
  },
  {
    Number: 19,
    Text: "Awarded A-Tier Z-Visa!",
    Instruction: "Take 1 free Visa Card",
    Type: "Visa",
    amt: 0,
    space: 0,
    image: require("./Pics/guanxi-visa.jpeg"),
  },
  {
    Number: 20,
    Text: "Congrats, you passed HSK 5!",
    Instruction: "Opponent gives you 200rmb",
    Type: "Receive Opponent",
    amt: 200,
    space: 0,
    image: require("./Pics/guanxi-hsk.png"),
  },
  {
    Number: 17,
    Text: "It's Qingming Festival!",
    Instruction: "Burn 100rmb for your ancestors.",
    Type: "Pay",
    amt: 100,
    space: 0,
    image: require("./Pics/guanxi-qinming.jpeg"),
  },
  {
    Number: 14,
    Text: "Run into old man on scooter.",
    Instruction: "Pay 200rmb to him for injuries sustained",
    Type: "Pay",
    amt: 200,
    space: 0,
    image: require("./Pics/guanxi-scooter.jpeg"),
  },
  {
    Number: 12,
    Text: "Teacher's day!",
    Instruction: "Collect 40rmb from opposing player for your services.",
    Type: "collect-opponent",
    amt: 40,
    space: 0,
    image: require("./Pics/guanxi-teach.jpeg"),
  },
  {
    Number: 8,
    Text: "Moving day!",
    Instruction:
      "Pay ayi deep cleaning fee. 30rmb for each hutong, and 50rmb for each apartment complex.",
    Type: "pay house",
    amt: null,
    space: 0,
    image: require("./Pics/guanxi-moving.jpeg"),
  },
  {
    Number: 22,
    Text: "Office party!",
    Instruction:
      "Collect 10rmb from opponent for mandarin oranges and warm Sprite",
    Type: "collect-opponent",
    amt: 10,
    space: 0,
    image: require("./Pics/guanxi-soda.jpeg"),
  },
  {
    Number: 23,
    Text: "Pile of Mobikes!",
    Instruction: "Scan a QR and go ahead 10 spaces",
    Type: "advance",
    amt: 10,
    space: 0,
    image: require("./Pics/guanxi-mobike.jpeg"),
  },
  {
    Number: 24,
    Text: "Join the Beijing Beatles",
    Instruction: "Play FuBar for the 40th time and make 100rmb",
    Type: "collect",
    amt: 100,
    space: 0,
    image: require("./Pics/guanxi-beatles.jpeg"),
  },
  {
    Number: 25,
    Text: "Gongti bottle service",
    Instruction:
      "Those champagnes with the sparklers at Mix were worth it though, right? Pay 150rmb",
    Type: "pay",
    amt: 150,
    space: 0,
    image: require("./Pics/guanxi-gongti.jpeg"),
  },
  {
    Number: 26,
    Text: "Hutong Bathroom has no TP!",
    Instruction: "Urgently use 15rmb for ... LOOK, YOU NEEDED IT!",
    Type: "pay",
    amt: 15,
    space: 0,
    image: require("./Pics/poopmoney.jpeg"),
  },
  {
    Number: 27,
    Text: "The Beijinger Publishes your Article!",
    Instruction:
      "Collect 25rmb, and start to fancy yourself the Hunter S Thompson of writing about cheeseburgers.",
    Type: "collect",
    amt: 25,
    space: 0,
    image: require("./Pics/guanxi-beijinger.jpeg"),
  },
  {
    Number: 28,
    Text: "WeChat Wallet Malfunction in your favor!",
    Instruction: "Collect 100rmb from some random Chinese person.",
    Type: "collect",
    amt: 100,
    space: 0,
    image: require("./Pics/guanxi-wechat.jpeg"),
  },
  {
    Number: 29,
    Text: "The rooftop is open!",
    Instruction: "Advance to Migas",
    Type: "advance",
    amt: null,
    space: 38,
    image: require("./Pics/guanxi-migas.jpeg"),
  },
];
