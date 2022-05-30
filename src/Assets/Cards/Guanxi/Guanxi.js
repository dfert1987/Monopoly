export const Guanxi = [
  {
    Number: 1,
    Text: "Airport Express",
    Instruction: "No stops for you! Advance to Go, and collect 400rmb",
    Type: "advance",
    amt: 0,
    space: 1,
    image: require("./Pics/guanxi-airport.jpeg"),
    sound: "plane",
  },
  {
    Number: 2,
    Text: "Xin Nian Kuai Le!",
    Instruction: "Get 200rmb in hong bao! Don't let your parents take any!",
    Type: "collect",
    amt: 200,
    space: 0,
    image: require("./Pics/guanxi-hongbao.jpeg"),
    sound: "xin-nian",
  },
  {
    Number: 3,
    Text: "Full on bender!",
    Instruction:
      "Head to Lantern, because there's no way you'll regret this decision.",
    Type: "advance",
    amt: 0,
    space: 25,
    image: require("./Pics/guanxi-lantern.jpeg"),
    sound: "techno",
  },
  {
    Number: 4,
    Text: "Start dating French girl.",
    Instruction: "Head to Modernista!",
    Type: "advance",
    amt: 0,
    space: 17,
    image: require("./Pics/guanxi-modernista.jpeg"),
    sound: "bar-small",
  },
  {
    Number: 5,
    Text: "Drug raid in Sanlitun!",
    Instruction: "DEPORTED! Leave country immediately!",
    Type: "advance",
    amt: 0,
    space: 41,
    image: require("./Pics/guanxi-drug.jpeg"),
    sound: "police",
  },
  {
    Number: 6,
    Text: "Get a Tutoring gig.",
    Instruction:
      "Get 150rmb! You could save it, or spend it immediately on drinks tonight!",
    Type: "collect",
    amt: 150,
    space: 0,
    image: require("./Pics/guanxi-tutor.jpeg"),
    sound: "money",
  },
  {
    Number: 7,
    Text: "Jumble sale!",
    Instruction:
      "Make 25rmb from selling a Third Eye Blind CD and a semi-functional rice cooker.",
    Type: "collect",
    amt: 25,
    space: 0,
    image: require("./Pics/guanxi-Jumble.jpeg"),
    sound: "money",
  },

  {
    Number: 9,
    Text: "Ill advised late night meet up with Nigerian homie.",
    Instruction:
      "Pay 500rmb now, and look forward to a week of sneezing at your desk.",
    Type: "pay",
    amt: 500,
    space: 0,
    image: require("./Pics/guanxi-dealer.jpeg"),
    sound: "snort",
  },
  {
    Number: 10,
    Text: "Stuck on NanLouGuxiang.",
    Instruction:
      "Skip next turn, while you shove, and squish your way to freedom.",
    Type: "skip",
    amt: 0,
    space: 0,
    image: require("./Pics/guanxi-nanluo.jpeg"),
    sound: "crowd",
  },
  {
    Number: 11,
    Text: "AQI over 400",
    Instruction: "Go back 4 spaces, and grab a mask.",
    Type: "back",
    amt: 4,
    space: 0,
    image: require("./Pics/guanxi-aqi.jpeg"),
    sound: "cough",
  },
  {
    Number: 13,
    Text: "Duck dinner with visiting friend.",
    Instruction: "Head to Dadong. Save the neck for me Clark!",
    Type: "advance",
    amt: 0,
    space: 30,
    image: require("./Pics/guanxi-duck.jpeg"),
    sound: "hao-chi",
  },

  {
    Number: 15,
    Text: "Coffee Shots!",
    Instruction:
      "Roll Again, because your feeling fucking amped to be at Cafe De La Poste!",
    Type: "reroll",
    amt: 0,
    space: 0,
    image: require("./Pics/guanxi-cdlp.jpeg"),
    sound: "bar-small",
  },
  {
    Number: 16,
    Text: "Fake alcohol at Smugglers!",
    Instruction:
      "Go back 5 spaces. And use better judgement next time you're on dirty bar street.",
    Type: "back",
    amt: 5,
    space: 0,
    image: require("./Pics/guanxi-fake-alcohol.jpeg"),
    sound: "sick",
  },

  {
    Number: 18,
    Text: "Asshole Landlord raises the rent!",
    Instruction:
      "Head to nearest opponent owned property and pay double. Maybe Mao was onto something with these guys.",
    Type: "nearest",
    amt: 0,
    space: 0,
    image: require("./Pics/guanxi-landlord.jpeg"),
    sound: "sad",
  },
  {
    Number: 19,
    Text: "Awarded A-Tier Z-Visa!",
    Instruction:
      "Gain a Visa Card. You are the creme de la creme of waiguoren, baby!",
    Type: "visa",
    amt: 0,
    space: 0,
    image: require("./Pics/guanxi-visa.jpeg"),
    sound: "jiayou",
  },
  {
    Number: 20,
    Text: "Congrats, you passed HSK 5!",
    Instruction:
      "Collect Visa Card! Look at you, shou-ing that zhongwen like a motherfucker!",
    Type: "visa",
    amt: 200,
    space: 0,
    image: require("./Pics/guanxi-hsk.png"),
    sound: "jiayou",
  },
  {
    Number: 17,
    Text: "It's Qingming Festival!",
    Instruction: "Burn 100rmb for your ancestors.",
    Type: "pay",
    amt: 100,
    space: 0,
    image: require("./Pics/guanxi-qinming.jpeg"),
    sound: "burn",
  },
  {
    Number: 14,
    Text: "Run into old man on scooter.",
    Instruction: "Pay 200rmb to him for 'injuries sustained'.",
    Type: "pay",
    amt: 200,
    space: 0,
    image: require("./Pics/guanxi-scooter.jpeg"),
    sound: "crash",
  },
  {
    Number: 12,
    Text: "Teacher's day!",
    Instruction:
      "Collect 40rmb and some fake flowers from opposing player for your services.",
    Type: "collect-opponent",
    amt: 40,
    space: 0,
    image: require("./Pics/guanxi-teach.jpeg"),
    sound: "triumph",
  },
  {
    Number: 8,
    Text: "Moving day!",
    Instruction:
      "Pay movers and ayi for deep cleaning fee. 30rmb for each hutong, and 50rmb for each apartment complex.",
    Type: "pay-house",
    amt: null,
    space: 0,
    image: require("./Pics/guanxi-moving.jpeg"),
    sound: "sad",
  },
  {
    Number: 22,
    Text: "Office party!",
    Instruction:
      "Collect 10rmb from opponent for mandarin oranges and warm Sprite.",
    Type: "collect-opponent",
    amt: 10,
    space: 0,
    image: require("./Pics/guanxi-soda.jpeg"),
    sound: "bar-small",
  },
  {
    Number: 23,
    Text: "Pile of Mobikes!",
    Instruction: "Scan a QR and go ahead 4 spaces",
    Type: "forward",
    amt: 4,
    space: 0,
    image: require("./Pics/guanxi-mobike.jpeg"),
    sound: "bike-bell",
  },
  {
    Number: 24,
    Text: "Join the Beijing Beatles",
    Instruction:
      "Slap on your wig, play FuBar for the 40th time and make 100rmb",
    Type: "collect",
    amt: 100,
    space: 0,
    image: require("./Pics/guanxi-beatles.jpeg"),
    sound: "hey-jude",
  },
  {
    Number: 25,
    Text: "Gongti bottle service",
    Instruction:
      "Those champagnes with the sparklers at Mix were worth it though, right? Pay 150rmb.",
    Type: "pay",
    amt: 150,
    space: 0,
    image: require("./Pics/guanxi-gongti.jpeg"),
    sound: "bottle-pop",
  },
  {
    Number: 26,
    Text: "Hutong Bathroom has no TP!",
    Instruction: "Urgently use 15rmb for... LOOK, YOU NEEDED IT!",
    Type: "pay",
    amt: 15,
    space: 0,
    image: require("./Pics/poopmoney.jpeg"),
    sound: "sad",
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
    sound: "triumph",
  },
  {
    Number: 28,
    Text: "WeChat Wallet Malfunction in your favor!",
    Instruction: "Collect 100rmb from some random Chinese person.",
    Type: "collect",
    amt: 100,
    space: 0,
    image: require("./Pics/guanxi-wechat.jpeg"),
    sound: "triumph",
  },
  {
    Number: 29,
    Text: "The rooftop is open!",
    Instruction:
      "Advance to Migas, and realize you're not hot enough to be there!",
    Type: "advance",
    amt: null,
    space: 38,
    image: require("./Pics/guanxi-migas.jpeg"),
    sound: "disco",
  },
  {
    Number: 30,
    Text: "Avoid losing face!",
    Instruction: "Win fight for check at restaurant and pay opponent 50rmb",
    Type: "pay-opponent",
    amt: 50,
    space: 0,
    image: require("./Pics/bill.jpeg"),
    sound: "bill-fight",
  },
  {
    Number: 31,
    Text: "Damn girl, you really live like this?",
    Instruction:
      "Immediately hire ayi, to clean up after your nasty ass. Pay 40rmb",
    Type: "pay",
    amt: 40,
    space: 0,
    image: require("./Pics/damn.jpeg"),
    sound: "sad",
  },
];
