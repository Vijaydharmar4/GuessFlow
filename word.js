// Word sets
const wordSets = [
    ["drive", "safe", "zone", "out", "smart", "phone"],
    ["work", "hard", "drive", "safe", "place", "value"],
    ["computer", "science", "experiment", "outcome", "analysis", "report"],
    ["note", "book", "mark", "sheet", "strap", "down"],
    ["river", "flow", "bridge", "cross", "path", "journey"],
["music", "note", "scale", "pitch", "tone", "melody"],
["phone", "call", "ring", "answer", "voice", "message"],
["school", "class", "lesson", "study", "exam", "grade"],
["fire", "spark", "light", "heat", "energy", "power"],
["sky", "cloud", "rain", "drop", "puddle", "splash"],
["code", "debug", "test", "fix", "deploy", "result"],
["train", "track", "station", "wait", "board", "travel"],
["story", "plot", "character", "dialogue", "scene", "ending"],
["garden", "plant", "flower", "bloom", "color", "beauty"],
["sun", "shine", "warmth", "summer", "vacation", "relax"],
["game", "level", "challenge", "score", "win", "reward"],
["mountain", "peak", "climb", "view", "photo", "memory"],
["car", "engine", "speed", "road", "travel", "destination"],
["star", "night", "sky", "shine", "twinkle", "wish"],
["computer", "keyboard", "type", "text", "edit", "file"],
["water", "wave", "ocean", "shore", "sand", "beach"],
["tree", "branch", "leaf", "fall", "wind", "autumn"],
["book", "page", "read", "chapter", "story", "author"],
["light", "bulb", "electricity", "switch", "turn", "on"],
["light", "bulb", "glow", "energy", "electricity", "power"],
["keyboard", "type", "letter", "word", "sentence", "paragraph"],
["head", "brain", "thought", "idea", "creativity", "innovation"],
["book", "read", "chapter", "page", "text", "content"],
["watch", "time", "hour", "minute", "second", "clock"],
["pen", "ink", "write", "paper", "message", "letter"],
["shoe", "lace", "tie", "step", "walk", "journey"],
["cloud", "rain", "water", "plant", "grow", "flower"],
["phone", "call", "talk", "voice", "message", "text"],
["key", "lock", "unlock", "door", "room", "house"],
["light", "bulb", "glow", "energy", "electricity", "power"],  
["keyboard", "type", "letter", "word", "sentence", "paragraph"],  
["head", "brain", "thought", "idea", "creativity", "innovation"],  
["book", "read", "chapter", "page", "text", "content"],  
["watch", "time", "hour", "minute", "second", "clock"],  
["pen", "ink", "write", "paper", "message", "letter"],  
["shoe", "lace", "tie", "step", "walk", "journey"],  
["cloud", "rain", "water", "plant", "grow", "flower"],  
["phone", "call", "talk", "voice", "message", "text"],  
["key", "lock", "unlock", "door", "room", "house"],  
["train", "station", "platform", "ticket", "journey", "arrival"],  
["camera", "photo", "click", "edit", "share", "post"],  
["music", "note", "scale", "tone", "melody", "harmony"],  
["pen", "paper", "write", "draft", "edit", "final"],  
["car", "engine", "speed", "road", "destination", "arrival"],
["water", "bottle", "drink", "thirst", "refresh", "hydrate"],  
["phone", "call", "ring", "answer", "talk", "hang up"],  
["food", "eat", "chew", "digest", "energy", "nutrition"],  
["book", "page", "turn", "read", "understand", "learn"],  
["shoe", "foot", "step", "walk", "run", "sprint"],  
["camera", "lens", "focus", "capture", "photo", "memory"],  
["light", "switch", "turn on", "illuminate", "room", "brightness"],  
["computer", "keyboard", "type", "text", "send", "email"],  
["tree", "leaf", "branch", "trunk", "root", "ground"],  
["train", "track", "engine", "carriage", "passenger", "station"],  
["clock", "time", "tick", "hour", "minute", "second"],  
["car", "wheel", "drive", "road", "destination", "stop"],  
["eye", "see", "vision", "object", "focus", "clarity"],  
["pen", "cap", "click", "write", "ink", "paper"],  
["bicycle", "pedal", "wheel", "speed", "ride", "destination"],
["cloud", "sky", "blue", "sun", "shine", "warmth"],  
["mountain", "climb", "peak", "view", "photo", "landscape"],  
["train", "station", "ticket", "boarding", "departure", "journey"],  
["car", "engine", "speed", "drive", "destination", "stop"],  
["book", "page", "turn", "chapter", "read", "finish"],  
["phone", "screen", "touch", "tap", "app", "open"],  
["light", "dark", "night", "stars", "sky", "moon"],  
["keyboard", "type", "letter", "word", "sentence", "paragraph"],  
["cup", "drink", "coffee", "hot", "sip", "relax"],  
["door", "lock", "key", "open", "passage", "enter"],  
["table", "chair", "sit", "desk", "work", "study"],  
["water", "bottle", "sip", "thirst", "drink", "hydrate"],  
["window", "glass", "clear", "view", "sunlight", "room"],  
["music", "note", "sound", "melody", "harmony", "song"],  
["book", "cover", "read", "library", "author", "story"],  
["pen", "write", "paper", "note", "sign", "letter"],  
["clock", "time", "tick", "second", "minute", "hour"],  
["shoe", "lace", "tie", "walk", "step", "run"],  
["hat", "head", "wear", "style", "fashion", "look"],  
["sun", "shine", "warmth", "light", "day", "summer"],  
["tree", "leaf", "branch", "wood", "forest", "nature"],  
["keyboard", "mouse", "click", "screen", "computer", "work"],  
["lamp", "light", "shine", "bulb", "room", "bright"],  
["camera", "photo", "click", "frame", "picture", "memories"],  
["phone", "call", "message", "text", "notification", "alert"],  
["cloud", "rain", "storm", "wind", "tree", "fall"],  
["door", "key", "lock", "open", "close", "secure"],  
["hat", "head", "cover", "wear", "style", "fashion"],  
["train", "track", "engine", "passenger", "station", "arrive"],  
["computer", "software", "install", "update", "launch", "use"],  
["book", "author", "story", "read", "write", "publish"],  
["bread", "butter", "spread", "toast", "eat", "breakfast"],  
["tree", "root", "branch", "leaf", "stem", "grow"],  
["cup", "saucer", "tea", "sip", "drink", "relax"],  
["paper", "pen", "write", "draw", "sketch", "idea"],  
["fish", "water", "swim", "ocean", "sea", "coral"],  
["butterfly", "flower", "pollinate", "honey", "bees", "buzz"],  
["phone", "charger", "plug", "battery", "power", "use"],  
["car", "engine", "accelerate", "speed", "brake", "stop"],  
["garden", "plant", "soil", "water", "flower", "grow"],  
["bicycle", "pedal", "wheel", "ride", "path", "travel"],  
["train", "ticket", "platform", "ride", "track", "destination"],  
["sun", "shine", "light", "day", "warmth", "summer"],  
["rain", "drop", "cloud", "storm", "wet", "puddle"],  
["camera", "click", "shot", "photo", "edit", "share"],  
["game", "level", "score", "play", "win", "reward"],  
["phone", "message", "alert", "text", "respond", "notify"],  
["window", "pane", "glass", "view", "open", "fresh"],  
["book", "page", "read", "write", "author", "novel"],  
["foot", "shoe", "sock", "walk", "run", "exercise"],  
["food", "eat", "chew", "taste", "digest", "nutrition"],  
["alarm", "wake", "rise", "day", "morning", "coffee"],  
["door", "knob", "turn", "open", "step", "outside"],  
["bottle", "cap", "seal", "open", "drink", "hydrate"],  
["key", "lock", "unlock", "turn", "safe", "secure"],  
["pen", "paper", "write", "ink", "note", "message"],  
["bed", "sleep", "pillow", "blanket", "rest", "dream"],  
["train", "station", "platform", "ticket", "journey", "departure"],  
["bottle", "drink", "thirst", "hydrate", "water", "refresh"],  
["phone", "contact", "number", "dial", "call", "talk"],  
["car", "wheel", "steering", "engine", "drive", "road"],  
["clock", "time", "alarm", "wake", "morning", "routine"],  
["paper", "scissors", "cut", "craft", "art", "create"],  
["ball", "kick", "goal", "score", "win", "celebrate"],  
["rain", "storm", "cloud", "wind", "umbrella", "shelter"],  
["bottle", "cap", "seal", "open", "pour", "drink"],  
["screen", "touch", "click", "tap", "app", "open"],  
["hat", "head", "cover", "style", "fashion", "trend"],  
["notebook", "pen", "write", "text", "page", "story"],  
["fan", "air", "breeze", "cool", "wind", "relief"],  
["shoe", "foot", "lace", "tie", "step", "walk"],  
["keyboard", "type", "letter", "text", "message", "send"],  
["mountain", "climb", "peak", "view", "photo", "adventure"],  
["book", "author", "chapter", "page", "read", "finish"],  
["cloud", "sky", "weather", "storm", "rain", "sunshine"],  
["car", "drive", "road", "destination", "speed", "arrive"],  
["table", "chair", "sit", "desk", "work", "study"],  
["phone", "call", "message", "text", "notification", "alert"],  
["fish", "water", "ocean", "swim", "sharks", "reef"],  
["camera", "photo", "click", "edit", "filter", "share"],  
["sun", "heat", "light", "day", "shine", "summer"],  
["key", "lock", "open", "door", "passage", "exit"],  
["pen", "paper", "ink", "write", "sketch", "draw"],  
["snow", "cold", "winter", "freeze", "ice", "snowfall"],  
["phone", "text", "chat", "message", "notification", "alert"],
["cloud", "sky", "sun", "shine", "bright", "day"],  
["rain", "cloud", "storm", "wind", "weather", "change"],  
["tree", "branch", "leaf", "flower", "bloom", "garden"],  
["water", "bottle", "drink", "thirst", "refresh", "hydrate"],  
["computer", "keyboard", "screen", "mouse", "click", "internet"],  
["pen", "ink", "write", "paper", "book", "read"],  
["phone", "call", "message", "chat", "text", "alert"],  
["train", "track", "station", "ticket", "platform", "journey"],  
["car", "engine", "speed", "road", "destination", "arrive"],  
["book", "page", "chapter", "author", "read", "finish"],  
["camera", "photo", "click", "edit", "filter", "share"],  
["food", "eat", "chew", "digest", "energy", "health"],  
["shoe", "lace", "tie", "step", "walk", "run"],  
["alarm", "wake", "morning", "coffee", "work", "start"],  
["clock", "time", "tick", "second", "minute", "hour"],  
["key", "lock", "unlock", "door", "open", "close"],  
["bicycle", "pedal", "wheel", "ride", "path", "travel"],  
["paper", "pen", "write", "text", "note", "message"],  
["light", "bulb", "glow", "energy", "electricity", "power"],  
["window", "glass", "clear", "view", "light", "sun"],  
["moon", "night", "dark", "star", "sky", "shine"],  
["sun", "shine", "warmth", "light", "summer", "vacation"],  
["garden", "plant", "water", "flower", "soil", "grow"],  
["car", "wheel", "brake", "accelerate", "speed", "drive"],  
["key", "door", "open", "lock", "secure", "home"],  
["camera", "lens", "focus", "capture", "shot", "photo"],  
["phone", "message", "text", "alert", "reply", "send"],  
["star", "night", "sky", "twinkle", "shine", "wish"],  
["food", "cooking", "recipe", "ingredient", "meal", "eat"],  
["tree", "leaf", "fall", "ground", "earth", "soil"],  
["sun", "bright", "day", "shine", "cloud", "sky"],  
["light", "bulb", "switch", "on", "room", "bright"],  
["window", "open", "air", "fresh", "cool", "breeze"],  
["house", "door", "lock", "key", "room", "home"],  
["fish", "water", "swim", "ocean", "sea", "reef"],  
["water", "wave", "ocean", "sea", "shore", "sand"],  
["phone", "call", "ring", "talk", "voice", "message"],  
["train", "platform", "ticket", "journey", "destination", "arrive"],  
["camera", "click", "picture", "photo", "edit", "share"],  
["ball", "kick", "goal", "score", "win", "celebrate"],  
["flower", "petal", "stem", "bloom", "grow", "garden"],  
["tree", "root", "branch", "leaf", "flower", "grow"],  
["computer", "mouse", "click", "screen", "internet", "browse"],  
["phone", "call", "talk", "message", "text", "alert"],  
["water", "drink", "bottle", "thirst", "refresh", "hydrate"],  
["alarm", "wake", "morning", "start", "routine", "work"],  
["food", "eat", "chew", "digest", "nutrition", "energy"],  
["notebook", "pen", "write", "text", "page", "content"],  
["book", "cover", "author", "read", "publish", "library"],  
["pen", "ink", "write", "paper", "text", "sign"],  
["clock", "time", "second", "minute", "hour", "day"],  
["bottle", "cap", "seal", "drink", "thirst", "hydrate"],  
["shoes", "foot", "lace", "tie", "step", "walk"],  
["pen", "paper", "write", "sketch", "draw", "paint"],  
["camera", "photo", "shot", "click", "picture", "edit"],  
["fish", "swim", "water", "aquarium", "sea", "reef"],  
["bird", "fly", "air", "sky", "wing", "cloud"],  
["mountain", "climb", "peak", "view", "photo", "hike"],  
["bicycle", "pedal", "wheel", "speed", "travel", "ride"],  
["train", "station", "ticket", "platform", "train", "board"],  
["key", "lock", "turn", "unlock", "open", "secure"],  
["car", "speed", "road", "accelerate", "drive", "arrive"],  
["water", "bottle", "open", "cap", "drink", "thirst"],  
["tree", "branch", "leaf", "grow", "flower", "season"],  
["clock", "time", "second", "minute", "alarm", "wake"],  
["watch", "time", "tick", "hour", "minute", "second"],  
["sun", "shine", "day", "bright", "cloud", "clear"],  
["computer", "keyboard", "type", "text", "send", "email"],  
["clock", "watch", "time", "alarm", "wake", "sleep"],  
["pen", "write", "paper", "text", "page", "draft"],  
["music", "note", "scale", "melody", "song", "harmony"],  
["computer", "screen", "keyboard", "type", "word", "message"],  
["book", "read", "story", "page", "finish", "author"],  
["phone", "battery", "charge", "plug", "charger", "use"],  
["pen", "ink", "write", "sign", "text", "paper"],  
["dog", "bark", "play", "fetch", "run", "walk"],  
["cat", "meow", "sleep", "purr", "play", "pet"],  
["ball", "throw", "catch", "play", "goal", "score"],  
["car", "drive", "engine", "wheel", "speed", "road"],  
["moon", "night", "shine", "dark", "sky", "star"],  
["tree", "branch", "leaves", "grow", "forest", "nature"],  
["watch", "time", "second", "minute", "tick", "clock"],  
["door", "key", "open", "lock", "close", "house"],  
["mountain", "climb", "peak", "view", "landscape", "photo"],  
["phone", "text", "chat", "message", "call", "ring"],  
["rain", "cloud", "storm", "wet", "umbrella", "wet"],  
["camera", "lens", "click", "photo", "focus", "capture"],  
["car", "drive", "road", "brake", "turn", "stop"],  
["keyboard", "type", "word", "text", "page", "paragraph"],  
["watch", "band", "time", "tick", "second", "minute"],  
["cloud", "rain", "storm", "wet", "umbrella", "puddle"],  
["phone", "contact", "call", "number", "message", "chat"],  
["game", "play", "score", "level", "win", "reward"],  
["sun", "shine", "heat", "bright", "day", "cloud"],  
["alarm", "wake", "morning", "start", "routine", "day"],  
["house", "room", "door", "key", "lock", "home"],  
["cloud", "rain", "storm", "thunder", "lightning", "weather"],  
["train", "carriage", "ticket", "track", "ride", "journey"],  
["fish", "swim", "ocean", "water", "aquarium", "pond"],  
["book", "chapter", "page", "content", "author", "read"],  
["key", "lock", "turn", "door", "open", "house"],  
["water", "cool", "drink", "thirst", "refresh", "hydrate"],  
["notebook", "pen", "write", "text", "draft", "edit"],  
["tree", "branch", "leaf", "plant", "flower", "stem"],  
["bicycle", "pedal", "wheel", "handlebars", "road", "path"],
["lamp", "light", "shine", "bright", "room", "clear"],  
["window", "glass", "clear", "view", "open", "air"],  
["mountain", "peak", "view", "hike", "adventure", "trail"],  
["keyboard", "type", "word", "sentence", "paragraph", "document"],  
["camera", "click", "photo", "picture", "album", "share"],  
["phone", "call", "ring", "text", "message", "alert"],  
["clock", "time", "tick", "minute", "hour", "second"],  
["cloud", "rain", "storm", "wet", "puddle", "mud"],  
["tree", "branch", "root", "leaf", "grow", "forest"],  
["fish", "swim", "water", "river", "ocean", "sea"],  
["book", "page", "read", "author", "chapter", "cover"],  
["hat", "head", "wear", "style", "fashion", "clothing"],  
["key", "lock", "door", "unlock", "keyhole", "secure"],  
["train", "platform", "ticket", "departure", "station", "journey"],  
["table", "chair", "sit", "desk", "study", "work"],  
["fan", "air", "breeze", "wind", "cool", "relief"],  
["shoes", "foot", "lace", "tie", "step", "walk"],  
["camera", "focus", "lens", "click", "capture", "photo"],  
["pen", "ink", "write", "paper", "text", "draft"],  
["bird", "fly", "air", "wing", "sky", "cloud"],  
["mountain", "climb", "peak", "top", "view", "adventure"],  
["food", "eat", "chew", "digest", "energy", "nutrition"],  
["cup", "saucer", "tea", "sip", "drink", "warm"],  
["water", "bottle", "sip", "thirst", "hydrate", "refresh"],  
["window", "view", "glass", "clear", "frame", "light"],  
["door", "key", "open", "close", "lock", "secure"],  
["bicycle", "pedal", "wheel", "handlebar", "ride", "path"],  
["computer", "screen", "mouse", "click", "keyboard", "task"],  
["camera", "picture", "photo", "click", "view", "album"],  
["notebook", "pen", "write", "draw", "sketch", "idea"],  
["train", "carriage", "station", "ticket", "track", "journey"],  
["hat", "head", "wear", "style", "fashion", "accessory"],  
["book", "author", "read", "story", "page", "finish"],  
["phone", "screen", "touch", "tap", "message", "alert"],  
["tree", "root", "leaf", "branch", "bark", "grow"],  
["cloud", "storm", "rain", "wind", "thunder", "cloudy"],  
["car", "engine", "drive", "wheel", "road", "journey"],  
["ball", "kick", "goal", "score", "team", "game"],  
["pen", "write", "paper", "book", "notebook", "letter"],  
["bottle", "cap", "seal", "open", "drink", "hydrate"],  
["airplane", "flight", "travel", "sky", "cloud", "destination"],  
["key", "lock", "door", "safe", "secure", "house"],  
["alarm", "wake", "morning", "day", "routine", "start"],  
["clock", "watch", "time", "second", "minute", "hour"],  
["mountain", "climb", "peak", "view", "adventure", "hike"],  
["food", "cook", "eat", "meal", "prepare", "recipe"],  
["paper", "pen", "write", "note", "message", "letter"],  
["camera", "shot", "click", "capture", "photo", "album"],  
["book", "chapter", "read", "finish", "author", "novel"],  
["phone", "call", "ring", "message", "text", "notification"],  
["car", "engine", "fuel", "drive", "road", "journey"],  
["shoes", "lace", "step", "walk", "run", "tie"],  
["keyboard", "type", "text", "document", "word", "edit"],  
["sun", "shine", "warmth", "light", "bright", "clear"],  
["hat", "head", "wear", "fashion", "style", "trend"],  
["clock", "time", "second", "minute", "hour", "tick"],  
["water", "swim", "sea", "fish", "aquarium", "ocean"],  
["computer", "program", "code", "run", "debug", "compile"],  
["car", "accelerate", "speed", "brake", "drive", "road"],  
["rain", "wet", "storm", "cloud", "puddle", "umbrella"],  
["pen", "paper", "write", "note", "draft", "letter"],  
["bicycle", "pedal", "speed", "ride", "road", "wheel"],  
["phone", "screen", "touch", "tap", "open", "app"],  
["ball", "kick", "goal", "score", "game", "team"],  
["key", "lock", "turn", "unlock", "open", "door"],  
["camera", "picture", "click", "edit", "filter", "share"],  
["pen", "ink", "write", "page", "sketch", "draw"],  
["train", "station", "ticket", "carriage", "platform", "track"],  
["mountain", "hike", "climb", "peak", "adventure", "view"],  
["fish", "water", "swim", "ocean", "sea", "reef"],  
["alarm", "wake", "morning", "routine", "day", "work"],  
["car", "speed", "drive", "road", "destination", "arrive"],  
["bottle", "drink", "water", "cap", "seal", "hydrate"],  
["paper", "pen", "write", "sketch", "draw", "idea"],  
["food", "eat", "snack", "chew", "taste", "bite"],  
["house", "door", "key", "lock", "secure", "close"],  
["cloud", "sky", "wind", "storm", "weather", "change"],  
["train", "ticket", "journey", "platform", "departure", "arrive"],  
["clock", "alarm", "wake", "morning", "time", "routine"],  
["camera", "focus", "lens", "click", "capture", "photo"],  
["car", "wheel", "drive", "brake", "accelerate", "road"],  
["shoes", "foot", "lace", "step", "walk", "run"],  
["moon", "night", "shine", "dark", "sky", "star"],  
["window", "glass", "view", "clear", "light", "frame"],  
["book", "chapter", "author", "read", "page", "finish"],  
["food", "eat", "chew", "taste", "digest", "meal"],  
["key", "lock", "turn", "open", "door", "secure"],  
["computer", "keyboard", "type", "screen", "mouse", "click"],  
["sun", "shine", "day", "warmth", "bright", "light"],  
["bicycle", "pedal", "speed", "handlebar", "wheel", "travel"],  
["table", "sit", "work", "chair", "desk", "study"],  
["rain", "wet", "storm", "cloud", "puddle", "umbrella"],  
["car", "accelerate", "speed", "brake", "turn", "road"],  
["phone", "call", "text", "alert", "message", "notification"],  
["camera", "focus", "click", "capture", "shot", "photo"],  
["key", "lock", "unlock", "door", "turn", "open"],  
["tree", "leaf", "branch", "grow", "plant", "root"],
["bicycle", "pedal", "handlebar", "wheel", "ride", "speed"],  
["camera", "lens", "photo", "click", "capture", "picture"],  
["book", "read", "chapter", "page", "author", "cover"],  
["car", "accelerate", "brake", "speed", "drive", "road"],  
["window", "glass", "view", "open", "light", "frame"],  
["key", "lock", "door", "turn", "unlock", "safe"],  
["pen", "ink", "write", "paper", "message", "note"],  
["train", "track", "station", "journey", "ticket", "carriage"],  
["tree", "branch", "leaf", "root", "grow", "forest"],  
["phone", "call", "text", "message", "alert", "notification"],  
["camera", "shot", "click", "capture", "picture", "album"],  
["food", "eat", "chew", "bite", "swallow", "taste"],  
["sun", "shine", "day", "light", "warmth", "bright"],  
["cloud", "storm", "rain", "wet", "sky", "wind"],  
["clock", "time", "second", "minute", "hour", "tick"],  
["computer", "program", "code", "compile", "run", "debug"],  
["train", "platform", "ticket", "carriage", "journey", "departure"],  
["ball", "kick", "goal", "score", "game", "play"],  
["shoes", "foot", "lace", "tie", "step", "walk"],  
["book", "author", "story", "chapter", "page", "read"],  
["camera", "picture", "click", "photo", "album", "share"],  
["water", "drink", "bottle", "hydrate", "thirst", "sip"],  
["pen", "write", "paper", "message", "note", "text"],  
["fish", "swim", "water", "ocean", "sea", "reef"],  
["house", "door", "key", "lock", "secure", "open"],  
["window", "frame", "view", "glass", "clear", "open"],  
["ball", "play", "kick", "game", "goal", "score"],  
["computer", "mouse", "click", "screen", "keyboard", "type"],  
["train", "journey", "platform", "ticket", "carriage", "station"],  
["hat", "head", "wear", "style", "fashion", "accessory"],  
["alarm", "wake", "morning", "day", "time", "routine"],  
["shoes", "foot", "lace", "tie", "walk", "run"],  
["tree", "root", "branch", "leaf", "bark", "grow"],  
["cloud", "rain", "storm", "wet", "sky", "thunder"],  
["mountain", "climb", "peak", "hike", "top", "view"],  
["bottle", "cap", "seal", "open", "drink", "hydrate"],  
["camera", "focus", "shot", "picture", "click", "capture"],  
["key", "lock", "unlock", "turn", "door", "safe"],  
["book", "author", "read", "chapter", "page", "finish"],  
["fish", "water", "swim", "sea", "ocean", "reef"],  
["car", "engine", "fuel", "drive", "road", "journey"],  
["alarm", "wake", "morning", "routine", "time", "start"],  
["train", "platform", "ticket", "carriage", "station", "track"],  
["mountain", "peak", "climb", "adventure", "view", "top"],  
["bicycle", "pedal", "handlebar", "wheel", "speed", "ride"],  
["shoes", "foot", "lace", "tie", "step", "walk"],  
["camera", "click", "capture", "picture", "photo", "share"],  
["key", "lock", "turn", "unlock", "door", "open"],  
["ball", "kick", "goal", "score", "team", "game"],  
["pen", "paper", "write", "message", "text", "draft"],  
["phone", "message", "call", "text", "alert", "notification"],  
["bottle", "cap", "seal", "open", "drink", "thirst"],  
["train", "ticket", "carriage", "station", "track", "platform"],  
["cloud", "rain", "storm", "wet", "sky", "wind"],  
["clock", "time", "second", "minute", "hour", "tick"],  
["car", "speed", "accelerate", "brake", "drive", "road"],  
["ball", "kick", "score", "goal", "game", "team"],  
["camera", "click", "photo", "focus", "capture", "lens"],  
["pen", "write", "page", "paper", "text", "draft"],  
["window", "glass", "view", "open", "air", "clear"],  
["computer", "keyboard", "type", "screen", "mouse", "click"],  
["food", "eat", "taste", "meal", "bite", "chew"],  
["train", "journey", "platform", "station", "ticket", "track"],  
["tree", "branch", "leaf", "root", "grow", "forest"],  
["phone", "call", "text", "message", "alert", "ring"],  
["clock", "tick", "time", "minute", "second", "hour"],  
["mountain", "climb", "peak", "adventure", "hike", "trail"],  
["car", "drive", "engine", "fuel", "speed", "road"],  
["shoes", "foot", "step", "lace", "run", "walk"],  
["camera", "shot", "picture", "focus", "click", "capture"],  
["key", "lock", "turn", "open", "door", "secure"],  
["ball", "kick", "play", "game", "score", "team"],  
["phone", "call", "text", "message", "alert", "ring"],  
["tree", "root", "branch", "leaf", "bark", "grow"],  
["book", "read", "page", "chapter", "author", "story"],  
["camera", "picture", "focus", "click", "capture", "album"],  
["car", "accelerate", "speed", "brake", "turn", "road"],  
["pen", "write", "paper", "ink", "text", "message"],  
["mountain", "peak", "climb", "hike", "trail", "adventure"],  
["food", "eat", "chew", "taste", "bite", "digest"],  
["train", "journey", "platform", "ticket", "track", "carriage"],  
["bicycle", "pedal", "speed", "handlebar", "wheel", "ride"],  
["clock", "time", "tick", "minute", "second", "watch"],  
["cloud", "storm", "rain", "thunder", "wind", "wet"],  
["key", "lock", "turn", "safe", "unlock", "door"],  
["shoes", "foot", "step", "lace", "run", "walk"],  
["car", "engine", "brake", "speed", "road", "drive"],  
["camera", "click", "focus", "shot", "picture", "capture"],  
["pen", "write", "paper", "text", "draft", "message"],  
["food", "eat", "chew", "swallow", "digest", "meal"],  
["ball", "kick", "goal", "play", "team", "score"],  
["train", "platform", "ticket", "carriage", "station", "track"],  
["phone", "call", "text", "message", "alert", "notification"],  
["book", "page", "read", "author", "chapter", "finish"],  
["mountain", "climb", "peak", "view", "hike", "top"],
["ball", "kick", "goal", "score", "game", "team"],  
["train", "ticket", "journey", "platform", "carriage", "track"],  
["phone", "message", "call", "alert", "text", "notification"],  
["camera", "click", "photo", "picture", "focus", "capture"],  
["key", "lock", "turn", "unlock", "open", "door"],  
["food", "eat", "chew", "swallow", "taste", "meal"],  
["car", "drive", "engine", "fuel", "accelerate", "road"],  
["shoes", "foot", "lace", "step", "run", "walk"],  
["book", "chapter", "read", "author", "page", "finish"],  
["cloud", "rain", "storm", "wet", "sky", "wind"],  
["tree", "branch", "leaf", "root", "grow", "plant"],  
["window", "glass", "view", "open", "frame", "clear"],  
["ball", "kick", "play", "score", "game", "goal"],  
["pen", "write", "paper", "text", "message", "draft"],  
["camera", "lens", "photo", "capture", "click", "picture"],  
["train", "platform", "station", "ticket", "departure", "track"],  
["mountain", "peak", "climb", "hike", "view", "adventure"],  
["clock", "time", "second", "minute", "hour", "tick"],  
["shoes", "foot", "lace", "tie", "step", "walk"],  
["computer", "keyboard", "type", "mouse", "screen", "click"],  
["car", "brake", "engine", "fuel", "speed", "drive"],  
["key", "lock", "door", "turn", "unlock", "safe"],  
["water", "bottle", "drink", "sip", "hydrate", "thirst"],  
["camera", "shot", "focus", "click", "capture", "picture"],  
["pen", "ink", "write", "paper", "text", "message"],  
["train", "journey", "platform", "carriage", "ticket", "track"],  
["book", "chapter", "page", "read", "finish", "author"],  
["cloud", "storm", "rain", "thunder", "wind", "wet"],  
["ball", "kick", "goal", "score", "game", "play"],  
["shoes", "foot", "lace", "step", "run", "tie"],  
["camera", "click", "capture", "photo", "focus", "lens"],  
["key", "lock", "turn", "open", "secure", "door"],  
["mountain", "climb", "peak", "hike", "trail", "adventure"],  
["train", "ticket", "station", "carriage", "platform", "track"],  
["phone", "call", "text", "alert", "message", "notification"],  
["book", "author", "read", "chapter", "page", "finish"],  
["tree", "branch", "leaf", "root", "bark", "grow"],  
["camera", "shot", "focus", "click", "capture", "photo"],  
["car", "engine", "fuel", "accelerate", "drive", "speed"],  
["pen", "write", "paper", "message", "draft", "text"],  
["train", "journey", "ticket", "platform", "track", "carriage"],  
["bottle", "cap", "seal", "drink", "sip", "thirst"],  
["shoes", "foot", "lace", "step", "walk", "run"],  
["key", "lock", "unlock", "turn", "safe", "door"],  
["ball", "kick", "goal", "score", "game", "play"],  
["camera", "click", "focus", "lens", "shot", "capture"],  
["mountain", "peak", "climb", "view", "top", "adventure"],  
["food", "eat", "chew", "digest", "meal", "taste"],  
["train", "platform", "ticket", "departure", "carriage", "station"],  
["cloud", "rain", "storm", "wet", "thunder", "wind"],  
["clock", "tick", "time", "minute", "second", "watch"],  
["computer", "keyboard", "type", "screen", "mouse", "click"],  
["car", "accelerate", "brake", "drive", "speed", "engine"],  
["pen", "write", "page", "paper", "text", "message"],  
["tree", "root", "leaf", "branch", "bark", "grow"],  
["ball", "kick", "goal", "score", "play", "game"],  
["mountain", "climb", "adventure", "peak", "top", "view"],  
["shoes", "foot", "lace", "step", "run", "walk"],  
["train", "platform", "ticket", "track", "station", "journey"],  
["camera", "shot", "capture", "click", "lens", "photo"],  
["food", "eat", "taste", "meal", "chew", "swallow"],  
["key", "lock", "door", "turn", "open", "secure"],  
["cloud", "rain", "storm", "wet", "weather", "wind"],  
["ball", "kick", "score", "goal", "game", "team"],  
["camera", "picture", "click", "focus", "shot", "capture"],  
["train", "ticket", "journey", "platform", "station", "track"],  
["mountain", "peak", "climb", "adventure", "view", "top"],  
["key", "lock", "turn", "open", "safe", "unlock"],  
["bicycle", "pedal", "handlebar", "wheel", "speed", "ride"],  
["pen", "write", "page", "paper", "draft", "message"],  
["car", "engine", "speed", "drive", "fuel", "brake"],  
["shoes", "foot", "lace", "tie", "step", "walk"],  
["camera", "picture", "click", "capture", "photo", "focus"],  
["mountain", "climb", "peak", "trail", "view", "adventure"],  
["ball", "kick", "score", "goal", "game", "team"],  
["tree", "root", "leaf", "branch", "bark", "grow"],  
["computer", "keyboard", "type", "screen", "mouse", "click"],  
["phone", "call", "text", "message", "alert", "notification"],  
["clock", "time", "second", "minute", "hour", "tick"],  
["food", "eat", "meal", "taste", "chew", "bite"],  
["train", "station", "carriage", "ticket", "track", "platform"],  
["shoes", "foot", "lace", "tie", "step", "walk"],  
["pen", "ink", "write", "paper", "message", "text"],  
["car", "engine", "drive", "road", "speed", "brake"],  
["ball", "kick", "goal", "score", "game", "team"],  
["camera", "click", "photo", "picture", "capture", "focus"],  
["phone", "message", "call", "alert", "text", "notification"],  
["bicycle", "pedal", "handlebar", "wheel", "speed", "ride"]  

];

// Global Variables
let currentWords = [];
let currentWordIndex = 1;
let revealedLetters = [];
let timeLeft = 120; // 2 minutes in seconds
let timerInterval;
let totalHintLimit = 10; // Total hints allowed

// DOM Elements
const wordDisplay = document.getElementById("word-list");
const guessInput = document.getElementById("guess");
const messageDisplay = document.getElementById("message");
const hintButton = document.getElementById("hint-button");
const timerDisplay = document.getElementById("timer");
const hintCountDisplay = document.getElementById("hint-count");

// Sound Effects
const correctSound = new Audio("sounds/correct.mp3");
const incorrectSound = new Audio("sounds/incorrect.mp3");
const noInputSound = new Audio("sounds/noinput.mp3");
const completeSound = new Audio("sounds/complete.mp3");
const lostSound = new Audio("sounds/noinput.mp3");

// Load New Word Set
function loadNewWordSet() {
    currentWords = wordSets[Math.floor(Math.random() * wordSets.length)];
    currentWordIndex = 1;
    revealedLetters = currentWords.map(word => [word[0]]);
    updateWordList();
}

// Update Word List
function updateWordList() {
    let wordListHtml = currentWords
        .map((word, index) => {
            if (index === 0) return `<p>${word}</p>`;
            if (index < currentWordIndex) return `<p>${word}</p>`;
            const revealedPart = revealedLetters[index].join('');
            const hiddenPart = "_ ".repeat(word.length - revealedPart.length);
            return `<p>${revealedPart}${hiddenPart}</p>`;
        })
        .join("");
    wordDisplay.innerHTML = wordListHtml;
}

// Submit Guess
function submitGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    guessInput.value = ""; // Clear input

    if (!guess) {
        noInputSound.play();
        showMessage("Please enter a word!", "noinput-message");
        return;
    }

    if (guess === currentWords[currentWordIndex]) {
        correctSound.play();
        currentWordIndex++;
        showMessage("Correct!", "correct-message");

        if (currentWordIndex === currentWords.length) {
            setTimeout(() => {
                completeSound.play();
                window.location.href = "congrats.html";
            }, 500);
        } else {
            updateWordList();
        }
    } else {
        incorrectSound.play();
        showMessage("Incorrect!", "incorrect-message");
    }
}

// Reveal Next Letter
function revealNextLetter() {
    if (currentWordIndex < currentWords.length) {
        const currentWord = currentWords[currentWordIndex];
        const revealedPart = revealedLetters[currentWordIndex];

        if (totalHintLimit > 0) {
            if (revealedPart.length < currentWord.length) {
                revealedPart.push(currentWord[revealedPart.length]);
                updateWordList();
                totalHintLimit--;
                hintCountDisplay.textContent = totalHintLimit;
            }

            if (revealedPart.length === currentWord.length) {
                correctSound.play();
                showMessage("Correct!", "correct-message");

                setTimeout(() => {
                    currentWordIndex++;
                    if (currentWordIndex === currentWords.length) {
                
                        setTimeout(() => {
                            window.location.href = "congrats.html";
                        }, 500);
                    } else {
                        updateWordList();
                    }
                }, 800);
            }
        } else {
            showMessage("No hints left!", "noinput-message");
        }
    }
}

// Timer Functionality
function startTimer() {
    timerDisplay.textContent = formatTime(timeLeft);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showLostPopup();
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Lost Popup
function showLostPopup() {
    noInputSound.play();

    const popup = document.createElement("div");
    popup.className = "popup-overlay";
    popup.innerHTML = `
        <div class="popup">
            <h2>You Lost!</h2>
            <p>Time's up! Better luck next time!</p>
            <div class="popup-buttons">
                <button class="try-again-button" onclick="tryAgain()">Try Again</button>
                <button class="quit-button" onclick="quitGame()">Quit</button>
            </div>
        </div>
    `;
    document.body.appendChild(popup);
}

// Try Again
function tryAgain() {
    window.location.href = "word.html";
}

// Quit Game
function quitGame() {
    window.location.href = "welcome.html";
}

// Show Message
function showMessage(message, className) {
    messageDisplay.textContent = message;
    messageDisplay.className = `message ${className}`;
    setTimeout(() => {
        messageDisplay.textContent = "";
        messageDisplay.className = "";
    }, 1500);
}

// Initialize Game
document.addEventListener("DOMContentLoaded", () => {
    loadNewWordSet();
    startTimer();
    hintCountDisplay.textContent = totalHintLimit;
    hintButton.addEventListener("click", revealNextLetter);
});

