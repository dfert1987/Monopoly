export const Yunqi = [
  {
    Number: 1,
    Text: "You won the burger cup!",
    Instruction: "Collect 150rmb in prize cash.",
    Type: "collect",
    amt: 150,
    space: 0,
    image: require("./pics/yunqi-burger.jpeg"),
    sound: "jiayou",
  },
  {
    Number: 2,
    Text: "Fly that Flag, it's National Day!",
    Instruction:
      "Checkout a somewhat scary military parade, and enjoy the short work week. Advance to Pay Day",
    Type: "advance",
    amt: 400,
    space: 1,
    image: require("./pics/yunqi-national.jpeg"),
    sound: "anthem",
  },
  {
    Number: 3,
    Text: "Treat Yo'self!",
    Instruction: "Advance to TRB. And don't forget the wine pairing!",
    Type: "advance",
    amt: 0,
    space: 40,
    image: require("./pics/yunqi-trb.jpeg"),
    sound: "hao-chi",
  },
  {
    Number: 4,
    Text: "It's 3am!",
    Instruction: "Advance to Temple Bar!",
    Type: "advance",
    amt: 0,
    space: 19,
    image: require("./pics/yunqi-temple.jpeg"),
    sound: "rock",
  },
  {
    Number: 5,
    Text: "Wednesday Open Mic",
    Instruction:
      "Advance to Hot Cat. People are going to LOVE you squatter toilet story.",
    Type: "advance",
    amt: 0,
    space: 7,
    image: require("./pics/yunqi-lincoln.jpeg"),
    sound: "laughter",
  },
  {
    Number: 6,
    Text: "Black Cab rips you off!",
    Instruction:
      "I think Chairman Mao is wearing sunglasses on this hundo. Lose 100rmb.",
    Type: "pay",
    amt: 100,
    space: 0,
    image: require("./pics/yunqi-blackcab.jpeg"),
    sound: "sad",
  },
  {
    Number: 7,
    Text: "Head to the Hutongs!",
    Instruction:
      "Ride Line 2, because everyone likes Gulou expats better than Sanlitun expats.",
    Type: "advance",
    amt: 0,
    space: 16,
    image: require("./pics/yunqi-line2.jpeg"),
    sound: "subway",
  },
  {
    Number: 8,
    Text: "Le Duzi!",
    Instruction:
      "This case of the rumblies feels sinister. Skip a turn and figure out what's going on with your bowels..",
    Type: "skip",
    amt: 0,
    space: 0,
    image: require("./pics/yunqi-duzi.jpeg"),
    sound: "sad",
  },
  {
    Number: 9,
    Text: "Overstay your visa!",
    Instruction:
      "DEPORTED. Leave country. Don't worry, the Chinese government is notoriously chill and accomodating.",
    Type: "advance",
    amt: 0,
    space: 41,
    image: require("./pics/yunqi-overstay.png"),
    sound: "alert",
  },
  {
    Number: 10,
    Text: "Hungover teaching!",
    Instruction: "Go back 3 spaces and reevaluate your life.",
    Type: "back",
    amt: 3,
    space: 0,
    image: require("./pics/yunqi-hangover.jpeg"),
    sound: "sad",
  },
  {
    Number: 11,
    Text: "Baijiu DRUNK!",
    Instruction: "Go forward 3 spaces. Presumably in the direction of chuanr.",
    Type: "forward",
    amt: 3,
    space: 0,
    image: require("./pics/yunqi-baijiu.jpeg"),
    sound: "gambei",
  },
  {
    Number: 12,
    Text: "Group Chuanr night",
    Instruction:
      "Split bill, and Wechat Pay opponent 20rmb. I think 6 orders of chicken hearts was aggressive.",
    Type: "pay-opponent",
    amt: 20,
    space: 0,
    image: require("./pics/yunqi-chuanr.jpeg"),
    sound: "hao-chi",
  },
  {
    Number: 13,
    Text: "It's your Chinaversary!",
    Instruction:
      "Celebrate another year in Asia by celebrating at brunch with your whitest friends. Opponent pays you 40rmb",
    Type: "collect-opponent",
    amt: 40,
    space: 0,
    image: require("./pics/yunqi-chinaversary.jpeg"),
    sound: "triumph",
  },
  {
    Number: 14,
    Text: "Spring cleaning -- Hire Ayi!",
    Instruction:
      "For each house, pay 25rmb, and each hotel pay 100rmb. God bless this lady for keeping your life in order.",
    Type: "pay-house",
    amt: 0,
    space: 0,
    image: require("./pics/yunqi-spring.jpeg"),
    sound: "sad",
  },
  {
    Number: 15,
    Text: "Mary Chinese citizen.",
    Instruction:
      "Oh, so you're one of THOSE type of expats. Take 1 Free Visa Card.",
    Type: "visa",
    amt: 0,
    space: 0,
    image: require("./pics/yunqi-marry.jpeg"),
    sound: "marry",
  },
  {
    Number: 16,
    Text: "3rd Ring Traffic Jam",
    Instruction:
      "The taxi driver got out of the car to smoke a cig. This appears bad. Advance to nearest Subway. If unowned you may purchase. If owned pay owner double",
    Type: "nearest",
    amt: 0,
    space: 0,
    image: require("./pics/yunqi-traffic.jpeg"),
    sound: "sad",
  },
  {
    Number: 17,
    Text: "Ripped off at Yashow Market.",
    Instruction: "How do you spell Addidas? Lose 50rmb",
    Type: "pay",
    amt: 50,
    space: 0,
    image: require("./pics/yunqi-yashow.jpeg"),
    sound: "sad",
  },
  {
    Number: 18,
    Text: "Land job as fake businessman at conference in Tianjin",
    Instruction: "Earn 300RMB for your international expertise",
    Type: "collect",
    amt: 300,
    space: 0,
    image: require("./pics/yunqi-business.jpeg"),
    sound: "money",
  },
  {
    Number: 19,
    Text: "Lose Debit Card",
    Instruction:
      "Pay $50 for replacement, and skip turn while stuck at Bank of China all Saturday afternoon.",
    Type: "pay-skip",
    amt: 50,
    space: 0,
    image: require("./pics/yunqi-bank.jpeg"),
    sound: "sad",
  },
  {
    Number: 20,
    Text: "Beer Festival!",
    Instruction: "Head to Great Leap, and start analyzing those hops.",
    Type: "advance",
    amt: 0,
    space: 35,
    image: require("./pics/beers.jpeg"),
    sound: "bar-small",
  },
  {
    Number: 21,
    Text: "No pictures on menu!",
    Instruction:
      "Accidentally order tripe or something, and Go Back 6 Spaces to study your hanzi.",
    Type: "back",
    amt: 6,
    space: 0,
    image: require("./pics/yunqi-menu.jpeg"),
    sound: "zhege",
  },
  {
    Number: 22,
    Text: "You got bricked!",
    Instruction:
      "Pay 30rmb per house and 50rmb to per apartment building to de-brick.",
    Type: "pay-house",
    amt: null,
    space: null,
    image: require("./pics/yunqi-bricks.jpeg"),
    sound: "bad",
  },
  {
    Number: 23,
    Text: "Visa Run",
    Instruction:
      "Head directly to home country (just visiting). Do not pass go. Pay 200rmb. Someday you'll get off this tourist visa...maybe.",
    Type: "pay-space",
    amt: 200,
    space: 11,
    image: require("./pics/yunqi-visarun.jpeg"),
    sound: "plane",
  },
  {
    Number: 24,
    Text: "You went to Maggies and got more than the Hot Dog",
    Instruction: "Pay 250rmb, and think about what you've done.",
    Type: "pay",
    amt: 250,
    space: 0,
    image: require("./pics/yunqi-maggies.jpeg"),
    sound: "bar-small",
  },
  // {
  //   Number: 25,
  //   Text: "Your 'guy' has arrived!",
  //   Instruction: "Advance to Dada (bathroom)",
  //   Type: "advance",
  //   amt: null,
  //   space: 20,
  //   image: require("./pics/guanxi-dealer.jpeg"),
  //   sound: "snort",
  // },
  {
    Number: 25,
    Text: "Lucky Gourd Comes through!",
    Instruction:
      "Find 30rmb immediatley after purchasing lucky gourd on from store near Yonghegong. Those monks didn't lie!",
    Type: "collect",
    amt: 20,
    space: 0,
    image: require("./pics/gourdlife.jpeg"),
    sound: "triumph",
  },
  {
    Number: 26,
    Text: "Promoted to head teacher!",
    Instruction:
      "You're the best damn word search maker this side of Haidian. Collect a 150rmb pay raise",
    Type: "collect",
    amt: 150,
    space: null,
    image: require("./pics/yunqi-head-teacher.jpeg"),
    sound: "triumph",
  },
  {
    Number: 27,
    Text: "Hire Chinese Tutor!",
    Instruction:
      "Pay 80rmb, to your laoshi because bettering yourself isn't free.",
    Type: "pay",
    amt: 80,
    space: null,
    image: require("./pics/tutor-pic.png"),
    sound: "money",
  },
  {
    Number: 28,
    Text: "Chinese new year fireworks accident!",
    Instruction:
      "Set off every car alarm in Dongcheng, and Pay 100rmb in hospital bills.  ",
    Type: "pay",
    amt: 100,
    space: null,
    image: require("./pics/yunqi-firework.png"),
    sound: "explosion",
  },
  {
    Number: 29,
    Text: "Rush week!",
    Instruction: "Advance to Lush and start drinking like you're 21!",
    Type: "advance",
    amt: null,
    space: 2,
    image: require("./pics/yunqi-lush.png"),
    sound: "lush",
  },
  {
    Number: 30,
    Text: "Lose game of MahJong!",
    Instruction:
      "Turns out you dont actually know how to play this game. Pay opponent 80rmb!",
    Type: "pay-opponent",
    amt: 80,
    space: null,
    image: require("./pics/mahjong.jpeg"),
    sound: "sad",
  },
  {
    Number: 31,
    Text: "Marathon KTV sesh with the co-teachers.",
    Instruction: "Sleep in, rest those vocal chords, and skip your next turn.",
    Type: "skip",
    amt: null,
    space: null,
    image: require("./pics/ktv.jpeg"),
    sound: "backstreet",
  },
  {
    Number: 32,
    Text: "Air Purifier Upgrade.",
    Instruction:
      "Your apartment's AQI will be back in the green. But at a cost. Pay 100rmb.",
    Type: "pay",
    amt: 100,
    space: null,
    image: require("./pics/blueair.jpg"),
    sound: "cough",
  },
  {
    Number: 33,
    Text: "Badaling on a Holiday",
    Instruction:
      "Skip your next turn trying to get out of there. And never make this mistake again.",
    Type: "skip",
    amt: 0,
    space: 0,
    image: require("./pics/badaling.jpeg"),
    sound: "sad",
  },
  {
    Number: 34,
    Text: "Beijing Improv Workshop",
    Instruction:
      "Head to Hot Cat Club for some organized improvised silliness with friends.",
    Type: "advance",
    amt: 0,
    space: 7,
    image: require("./pics/improv.jpeg"),
    sound: "soft-laugh",
  },
  {
    Number: 35,
    Text: "Teach at Summer Camp",
    Instruction:
      "Give up your precious summer chasing around xiaopengyou. Earn 100rmb",
    Type: "collect",
    amt: 100,
    space: 0,
    image: require("./pics/summer.jpeg"),
    sound: "money",
  },
];
