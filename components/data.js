const createDataset = (title, image, questions) => questions.map(text => ({ title, image, text }));

const woodsQuestions = [
  "What was the most beautiful tree you saw and why?",
  "What plant are you embodying today?",
  "What’s a thing of beauty you saw outside that made you pause this past week?",
  "Which creepy crawly do you identify with today?",
  "What is an animal native to your hometown that you wish you could be today?"
];

const kitchenQuestions = [
  "What’s something that one can always find in your fridge?",
  "What’s your favorite kitchen smell?",
  "What breakfast food are you embodying today?",
  "What is something your loved one cooks for you that makes you feel at home?",
  "What’s the best thing I can eat in the neighborhood you grew up in?"
];

const becomingYouQuestions = [
    "What is the story behind your name?",
    "What was your favorite game to play with your childhood best friend?",
    "If your childhood were a book, what title would it have?",
    "What was the craziest haircut you ever got?",
    "Where did you go on your most memorable adventure as a kid? (Hint: it could be imaginary too!)"
  ];
  
  const beingYouQuestions = [
    "What surprised you about yourself last week?",
    "What’s a moment that gave you joy this weekend?",
    "What’s a moment that made you feel powerful last week?",
    "What’s your intention for this week?",
    "Find something at arm’s reach to you, and ask it a deep question you’re curious about. E.g. To a water bottle: what gives you the courage to change shape so easily?",
    "What do you keep in your cupboard that someone who raised you also kept in theirs?",
    "Zoom edition: Show us something inspiring that’s within arm’s reach to you right now.",
    "What’s a quote or a sentence you read recently that’s stuck with you?",
    "What’s a moment from this past week or weekend that felt like magic?",
    "What’s one song or album you would take to a deserted island?",
    "What’s the worst thing you’ve dropped your phone into?"
  ];
  
  const allYourRhythmsQuestions = [
    "What instrument would you be if this team was a symphony orchestra?",
    "What musical genre are you entering this room as?",
    "What’s an earworm you had yesterday?",
    "Show in one dance move what your past week felt like.",
    "What’s your favorite pump-up song?"
  ];

  const howToQuestions = [
    "Play with temporality. You can change the past “weekend” to a week, month, 24 hours or even the future.", 
    "Personify. ‘Embodying’ something is different than wanting it. So “what breakfast food are you today” is not necessarily what food you’d like to get for breakfast.", 
    "Mix it up. Repeat questions at different times and take one part of a question to another.", 
    "Be a storyteller. Imagine this as an opportunity for quick bite sized storytelling with specific images, visuals, smells and sounds."
  ];

  const woods = createDataset("In The Woods", "/minion1.svg", woodsQuestions);
  const kitchen = createDataset("In The Kitchen", "/minion2.svg", kitchenQuestions);
  const becomingYou = createDataset("Becoming You", "/minion3.svg", becomingYouQuestions);
  const beingYou = createDataset("Being You", "/minion4.svg", beingYouQuestions);
  const allYourRhythms = createDataset("All Your Rhythms", "/minion5.svg", allYourRhythmsQuestions);
  const howTo = createDataset("How To Guide", "/minion6.svg", howToQuestions);
  
  export { woods, kitchen, becomingYou, beingYou, allYourRhythms, howTo };