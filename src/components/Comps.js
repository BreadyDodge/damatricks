const comps = [
  {
    name: "NAKO 2021 (Beginner)",
    id: "nako-2021-1-beginner",
    tricks: [
      "Big cup Orbit, Spike",
      "Frying pan, Slip-On Stick",
      "Around prefecture (base cup spike)",
      "Airplane",
      "Moshi Kame X 5",
      "Base Ball",
      "Stuntplane",
      "Hanging Spike",
      "Swing Spike, Earth Turn",
      "Around Japan",
      "Candlestick",
      "Lighthouse (Hold for 3 seconds)",
      "Base cup rising dragon, spike",
      "Dry spike",
      "Big cup, Clack Back",
    ],
  },
  {
    name: "NAKO 2021 (Intermediate)",
    id: "nako-2021-1-intermediate",
    tricks: [
      "Down Spike, base cup, down spike",
      "Around the universe",
      "Bird over valley",
      "Gunslinger to spike",
      "Hanging, pull up Base cup, spike",
      "Airplane Jumping stick",
      "Flamingo spike",
      "Whirlwind",
      "Turntable, spike",
      "Juggle to big cup,spike",
      "Lighthouse, lighthouse flip, in",
      "Lunar, flip in",
      "Big cup ken flip big cup, spike",
      "Base cup centrifugal force, spike",
      "Tama grip Scramble to airplane",
    ],
  },
  {
    name: "NAKO 2021 (Advanced)",
    id: "nako-2021-1-advanced",
    tricks: [
      "Around USA",
      "Frying pan, bird, frying pan, nightingale, in",
      "Around denmark",
      "Double whirlwind (either way)",
      "Lighthouse, stunt fast",
      "Lightning drop swap spike",
      "One turn airplane insta jumping stick",
      "Around europe with down spikes, down earth",
      "Stilt, inward flip in",
      "Inward lunar, flip cush in",
      "Tap juggle spike",
      "Handle stall, in",
      "down spike, 1.5 throw trade spike",
      "Scramble (sara grip) down spike fast hands",
      "Airplane j stick typhoon",
    ],
  },
  {
    name: "NAKO 2021 (AM Open)",
    id: "nako-2021-1-openam",
    tricks: [
      "Fast hand light house, stunt fast penguin",
      "Around bird",
      "Moon circle 1.5 throw airplane",
      "2 turn Airplane",
      "Around Ken Flip",
      "Slinger down spike, downward whirlslinger",
      "Stunt fast, swap downspike fast hands",
      "Wing, in",
      "One turn tap to lighthouse insta inward flip tap light house, trade spike",
      "Inward lunar 360 rover, in",
      "Spike, Hacky sack, juggle spike",
      "lunar , barrel roll, inward flip in",
      "Trip Whirlwind (either way)",
      "Ring stall, handle stall, in",
      "String grip, stilt, in",
      "Candle, Candle flip, trade spike",
      "Sweets special",
      "One turn typhoon in",
      "Goon ghost to house trade spike",
      "Double lunar flip, in",
    ],
  },
  {
    name: "NAKO 2021 (Open - Level 1)",
    id: "nako-2021-1-open1",
    tricks: [
      "Two turn Airplane",
      "Around whirlwind",
      "Underbird, ken flip underbird, in",
      "Ken flip Juggle Kenflip Spike",
      "Down whirlwind",
      "One turn tap stunt fast",
      "Cup grip, half swivel grip switch to spike",
      "Spacewalk trade down spike",
      "Bird, gunslinger over valley, in",
      "lighthouse inward flip tap back to lighthouse, trade spike",
      "Stilt, flip, trade down",
      "Dub Jumping stick",
      "Lunar tre",
    ],
  },
  {
    name: "NAKO 2021 (Open - Level 2)",
    id: "nako-2021-1-open2",
    tricks: [
      "Sling, Juggle late sling spike",
      "Bird juggle over the valley, in",
      "Kenflip throw airplane, 1.5 swap throw airplane",
      "Handle, flip to ring, flip to handle, in",
      "1-2-3 LH flip",
      "Typhoon to stunt plane fast hands",
      "Juggle cush tap juggle cush tap in",
      "Fast hands inward lunar, inward lunar backflip, downspike fasthand",
      "Two tap, two turn throw to house, two trade spike",
      "Goon Ghost to house insta trade down spike",
      "Stilt tre",
      "Spacewalk penguin airplane (no flips)",
      "Switch Stunt fast",
    ],
  },
  {
    name: "NAKO 2021 (Open - Level 3)",
    id: "nako-2021-1-open3",
    tricks: [
      "Stilt, flip, over valley, inward stilt backflip, in",
      "Trip ken, ghost to insta triple light house flip, three turn trade spike",
      "Down sling x3",
      "Bird, slide to underbird, slide to bird, in",
      "candle, double candle juggle, trade spike",
      "Kenflip late kenflip throw two tap juggle spike",
      "tap juggle handlestall, in",
      "hippie flip 1.5 airplane",
      "3-2-1-2-3 lunar flip (either way)",
      "Juggle ken flip down fast ken grip",
      "Airplane, 1.5 late goon, spike",
      "Moon circle ghost toss, tap flip to inward lunar, flip in",
      "Around stalls with nods",
    ],
  },
  {
    name: "NAKO 2021 (Girls Open)",
    id: "nako-2021-1-opengirls",
    tricks: [
      "Two Turn Airplane",
      "One turn Swap spike, throw 1.5 to airplane",
      "Handlestall, nightingale, bird, in",
      "Lunar tre",
      "Around lighthouse, trade spike",
      "Space walk swap down spike",
      "Stunt Plane fast hands, strait up to Lighthouse, stunt fast",
      "Inward lunar, Inward Lunar flip, in",
      "Inward stilt trade down spike",
      "Bird, gunslinger over valley, in",
      "Airplane jumping stick x3",
      "Juggle to spike",
      "One Turn tap lighthouse, flip tap lighthouse, flip trade spike",
      "Base cup centrifugal force to penguin, trade down spike",
      "Kenflip late kenflip spike",
      "Super flamingo",
      "Airplane jstick typhoon",
      "Sara grip big cup, pressure to inward lunar, 180 rover, in",
      "Double whirlwind",
      "Goon circle ghost to light house, trade spike",
    ],
  },
  {
    name: "Sweets Throwback Throwdown (Beginner)",
    id: "skott-2021-1-beginner",
    tricks: [
      "Frying pan",
      "Big cup orbit",
      "Around the candle",
      "Spike",
      "Wrap it up B!",
      "Airplane",
      "Swing spike",
      "Around the world",
      "Big cup - ken flip - big cup",
      "String cheese",
    ],
  },
  {
    name: "Sweets Throwback Throwdown (Intermediate)",
    id: "skott-2021-1-intermediate",
    tricks: [
      "Around the world - sara grip",
      "Big cup - ken flip - big cup",
      "Orbit the block",
      "Lighthouse - in",
      "String cheese - earth turn",
      "Airplane - jumping stick",
      "The shuffle",
      "Little bird - in",
      "Downspike",
      "Swing spike - forward earthturn",
    ],
  },
  {
    name: "Sweets Throwback Throwdown (Open)",
    id: "skott-2021-1-open",
    tricks: [
      "Underbird - 360 ken spin flip over valley",
      "Hanging ring stall to Airplane",
      "Axe backflip",
      "Triple lunar flip",
      "Insta front back j-stick x2",
      "Lightning drop to lunar - lunar flip - in",
      "Candle balance to lunar - in",
      "Nightingale flip to bird - flip to penguin handle",
      "Stuntplane UFO",
      "Airplane - whirpool to bird",
      "Airplane 1.5 UFO to lighthouse",
      "Rat tail to lighthouse - in",
      "Hanging 2 turn airplane",
      "Small cup palm grip double ken flip to spike ",
      "Candle trade - Ken grip spike",
      "Outward UFO",
      "Gunslinger penguin handle",
      "Lighthouse to flying V to lighthouse - in",
      "Around bird flip",
      "Gunslinger spike - whirlslinger - gunslinger to bird - gunslinger in",
    ],
  },
  {
    name: "Oceanside Kendama Open (Beginner)",
    id: "oko-2021-1-beginner",
    tricks: [
      "Around the block",
      "Candlestick",
      "Spike",
      "Moshikame x7",
      "Big cup spike",
      "Trapeze",
      "Airplane",
    ],
  },
  {
    name: "Oceanside Kendama Open (Intermediate)",
    id: "oko-2021-1-intermediate",
    tricks: [
      "Lighthouse tradespike",
      "(Any) Spike - whirlwind",
      "Airplane - j-stick",
      "Around europe",
      "Big cup - knee bounce - big cup - spike",
      "Swing spike - mars turn",
      "Spacewalk",
    ],
  },
  {
    name: "Oceanside Kendama Open (Open)",
    id: "oko-2021-1-open",
    tricks: [
      "1 turn airplane - typhoon",
      "Triple whirlwind",
      "Turntable -  inward turntable",
      "Double inward lunar flip",
      "Tap house insta flip - inward insta flip - in",
      "Double sling - double whirlslinger",
      "Basecup - inward juggle",
      "Bird - nightingale - handlestall - flip in",
      "Hanging stuntplane",
      "Double tap flip airplane",
      "Ken jug ken jug spike",
      "Inward stilt - flip airplane fasthand",
      "Opposite hand lunar - in",
      "Wing - slide bird",
      "Spacewalk double swap spike",
    ],
  },
  {
    name: "Oceanside Kendama Open (Top 8 Open)",
    id: "oko-2021-1-opentop8",
    tricks: [
      "Inward flip tap cushion tap back inward lunar - downspike fast penguin",
      "Gunslinger jug late gunslinger spike",
      "Mooncircle bird",
      "1 turn airplane - juggle downspike fasthand",
      "1 turn house triple insta house flip swap spike",
      "Spacewalk 1 turn stunt fasthand",
      "Lunar barrel roll - 180 rover - inward lunar barrel roll - flip in",
      "Whirlpool juggle spike",
      "Triple tap house, downspike",
      "Two turn airplane insta double j-stick",
      "Stilt over the valley - back over the valley - in",
      "Underbird turntable - in",
      "Mooncircle spike - triple inward whirlwind",
      "Triple bird flip",
      "Inward lunar -  gypsy flip monkey tap inward lunar",
    ],
  },
  {
    name: "Sakura Summer 2021 (Beginner)",
    id: "sso-2021-1-beginner",
    tricks: [
      "Swing Candle Stick",
      "Vacuum",
      "Lady Bug",
      "Lighthouse - Falling in",
      "Funhouse - Spike",
      "Frying Pan - Spike",
      "Swing Spike - Earthturn",
      "Bird - Spike",
      "Around Japan",
      "Praying Mantis",
      "Ken Drop",
      "Airplane - Jumping Stick",
      "Moshikame x 15 - Spike",
    ],
  },
  {
    name: "Sakura Summer 2021 (Intermediate)",
    id: "sso-2021-1-intermediate",
    tricks: [
      "Big cup - Knee bounce - Base cup - Down spike",
      "Around the block (Candlestrick grip)",
      "One turn airplane",
      "Around Europe",
      "Hanging Spike",
      "Flying top - Bungee - Kenflip - Spike",
      "Stuntplane",
      "Bird over the valley - in",
      "Lighthouse flip - in",
      "Vacuum - Flip - Vacuum",
      "Inward lunar - Inward falling in",
      "Base cup centrifugal force - Penguin - Spike",
      "Baseball - Basecup - Downspike",
    ],
  },
  {
    name: "Sakura Summer 2021 (Open)",
    id: "sso-2021-1-open",
    tricks: [
      "Around USA",
      "Around the Garden",
      "Whirlwind",
      "Mooncircle Spike",
      "Spacewalk - 1 turn in",
      "Half goon - 1 turn in",
      "1 turn tap - 1 turn in",
      "Candle grip swing ken grip spike",
      "Vacuum cleaner - Trade spike",
      "Double lunar flip",
      "UFO Mateo spin",
      "Kush Countdown (2 turn kush in - 1.5 kush in - 0.5 kush in)",
      "Ken grip swap 0.5 airplane - 0.5 swap",
      "Swing sling late half flip sara grip down spike",
      "Shima Cobb Spike",
      "Lunar Barrel Roll - in",
      "Inward lunar - Inward lunar flip - Inward flip in",
      "Hanging spike",
      "Bird over the valley x2",
      "Double tap 1 turn in",
      "Airplane - Whirlpool - Ken grip spike",
      "Migration (Pull up bird - switch hand spike - normal hand little bird - switch hand spike) no tama rotation",
      "Airplane - 3 insta lighthouse flips - falling in",
      "The Lunar One with the Stilts (Inward lunar -  0.5 turn to small cup lunar -  hop to inward stilt - flip stilt - in)",
      "Tailwhip, airplane or stuntplane",
      "Big cup - pirouette big cup - spike",
    ],
  },
  {
    name: "SKO No Pro Open 2021 (Beginner)",
    id: "sko-2021-npo-1-beginner",
    tricks: [
      "Basecup, spike (ken grip)",
      "Around the block",
      "Swing spike",
      "Trapeze",
      "Airplane",
      "Baseball (catch in Basecup)",
      "Stuntplane",
      "Small cup, Orbit to Big cup, Spike",
      "Easy Lighthouse, falling in",
      "Around Japan",
      "Switch pull up to Small cup",
      "Spike, Earthturn",
      "Moshikame x10",
      "Frying pan, Spike",
      "Big cup, Knee bounce, Big cup, Spike",
    ],
  },
  {
    name: "SKO No Pro Open 2021 (Intermediate)",
    id: "sko-2021-npo-1-intermediate",
    tricks: [
      "Airplane inward J-stick",
      "Around europe",
      "Bird, flip over valley, in ",
      "Down Spike, Base cup, down spike",
      "One turn airplane",
      "Stunt Plane Fast hands",
      "Lighthouse,Trade spike",
      "Big cup ken flip bigcup, spike",
      "Turntable, spike",
      "Gunslinger to spike",
      "Lunar, in",
      "Swing Penguin Spike",
      "Candle stick, Trade spike",
      "Whirlwind",
      "Switch Swing spike",
    ],
  },
  {
    name: "SKO No Pro Open 2021 (Advanced)",
    id: "sko-2021-npo-1-advanced",
    tricks: [
      "One turn Lighthouse, flip trade spike",
      "Handle stall, Flip in",
      "Lunar, Lunar flip, flip in ",
      "Juggle to spike ",
      "Downspike fast hands, J-stick",
      "Penguin, grip switch downspike",
      "Two turn Airplane",
      "Space walk one turn in",
      "Bird, trade downspike",
      "Around USA",
      "Double kenflip to spike",
      "Stilt over valley in",
      "Lightning Drop Trade spike",
      "Lighthouse, flip tap House, in",
      "Inward lunar, inward flip in",
    ],
  },
  {
    name: "SKO No Pro Open 2021 (Open)",
    id: "sko-2021-npo-1-open",
    tricks: [
      "Inward axe, inward lunar in",
      "Two turn Airplane, double tap flip to in",
      "Bird, flip over valley, trade downspike ",
      "Scramble one turn trade spike",
      "Stuntplane, 1.5 swap downspike",
      "Triple LH flip, in",
      "Double slinger to spike, Dub Whirlslinger",
      "Around Down USA",
      "Switch Airplane, J-stick. ",
      "Downspike fast, slide out to Candle, trade spike",
      "Double whirlwind (either way) ",
      "Lunar, Lunar flip, 180 rover, Inward lunar flip, in",
      "Airplane, 1.5 swap to bird, in",
      "Tap juggle spike",
      "Stilt, Stilt flip, in",
    ],
  },
  {
    name: "SKO No Pro Open 2021 (Top 16 Open)",
    id: "sko-2021-npo-1-open-t16",
    tricks: [
      "Inward lunar, flip wong tap to lunar, in",
      "Slinger, juggle, late slinger spike",
      "Lighthouse, Trade Candle, Toss to lighthouse insta trade spike",
      "One turn Stunt Fast",
      "Handle stall, Nightingale, Bird, Inward flip in",
      "One turn cush tap lighthouse, flip cush tap lighthouse, half flip cush in",
      "Airplane, 1.5 trade, 2 turn throw in",
      "Sara Base cup, Ken flip downspike",
      "Inward stilt, half flip to LH insta half flip reg stilt, Trade Down spike Fast Hands",
      "Bird Juggle over the valley, in",
      "Airplane, slide candle grip 1.5 throw to Light house, in ",
      "Ken Late ken Spike, ken late ken spike  ",
      "Triple tap juggle spike",
      "Down Spike Down Whirl ",
      "Around Stunt Plane",
    ],
  },
  {
    name: "IKO 2021 AM",
    id: "iko-2021-1-am",
    tricks: [
      "Stuntplane fasthand penguin",
      "Handle stall - nightingale - spike",
      "Swing spike - base cup sara grip - down spike fast hand",
      "Whirlwind - inward whirlwind",
      "Juggle spike",
      "Sling penguin base cup - spike",
      "Lunar .5 rover to inward lunar - one turn in",
      "Turntable - spike",
      "Big cup - knee bounce - big cup - spike",
      "Single earthturn - double earthturn",
      "Airplane - inward jumping stick ",
      "Airplane - 1.5 swap spike",
      "Airplane - lunar - lunar flip - one turn in",
      "Inward stilt - lighthouse - in",
      "Wing - in",
      "Switch lighthouse - in",
      "Underbird - nod off - nod on - spike",
      "Axe - in",
      "OG .5 tap in",
      "Downspike - down earthturn",
    ],
  },
  {
    name: "IKO 2021 Pro",
    id: "iko-2021-1-pro",
    tricks: [
      "Inward lunar - monkey spike tap inward lunar - inward tradespike",
      "Juggle ghost stuntplane fasthand",
      "Airplane - 1.5 swap to handlestall - airplane",
      "Airplane - inward .5 toss inward .5 in ",
      "Triple jumping stick fasthand",
      "Penguin handlestall - flip - in",
      "Triple kenflip ghost jug x3",
      "Double tap cushion lighthouse - stuntplane fasthand",
      "Quad lunar flip - in",
      "Airplane - toss to airplane fasthand ",
      "Sling jug late sling in",
      "Finger boarder in",
      "Double stilt flip - in",
      "Cushion tap swap cushion tap in",
      "Inward lunar - belly flop - inward lunar - in",
      "Switch juggle spike",
      "Insta lighthouse x3 one turn trade spike",
      ".5 string pinch ",
      "Airplane - knee bounce inward 1.5 in",
      "Lunar laser flip - in",
    ],
  },
  {
    name: "BATB 2021 Beginner",
    id: "batb-2021-1-beginner",
    tricks: [
      "Swing Spike",
      "Candlestick",
      "Big Cup Orbit",
      "Around the Block",
      "Big Cup, Spike",
      "Big Cup, Clack, Big Cup",
      "Pull Up Spike",
      "Penguin Catch",
      "Airplane",
      "Around Japan",
      "Moshikame x 5",
      "Sara Grip Spike",
      "Big Cup, Knee Bounce, Big Cup",
      "Rising Dragon ",
      "Hanging Stunt Plane Snatch",
    ],
  },
  {
    name: "BATB 2021 Intermediate",
    id: "batb-2021-1-intermediate",
    tricks: [
      "Airplane, Jumping Stick",
      "Swing Spike, Earth Turn",
      "Trapeze, In",
      "Stunt Plane",
      "Big Cup, Kenflip, Big Cup, Spike",
      "One Turn Airplane",
      "Around the World Sara Grip",
      "Downspike",
      "Slip on Stick",
      "Around Europe",
      "Airplane, Bottom Cup, Spike",
      "Bird, in",
      "Hanging Lighthouse, Falling In",
      "Gunslinger Spike",
      "Lighthouse, Trade Spike",
    ],
  },
  {
    name: "BATB 2021 Advanced",
    id: "batb-2021-1-advanced",
    tricks: [
      "Swing Spike, Whirlwind",
      "Underbird, Spike",
      "Lunar Flip, In",
      "Airplane, Tap Reverse Flip In",
      "Lighthouse Flip, Trade Spike",
      "Sweet Special",
      "Turntable, Spike",
      "Stunt Plane Fasthand",
      "Airplane, UFO",
      "Stilt, Trade Downspike",
      "Handle Stall, Spike",
      "Candlestick, Swap Spike",
      "Spacewalk, One Turn In",
      "Opposite Hand Swing Spike, Earth Turn",
      "Inward Lunar, Flip In",
    ],
  },
  {
    name: "BATB 2021 Open",
    id: "batb-2021-1-open",
    tricks: [
      "Three Turn LH, Falling In Fasthand",
      "Inward Stilt Flip, Falling In",
      "OG Tap to LH, OG Tap 1.5 In",
      "Lunar Barrel Roll, Falling In",
      "Swing Spike, 1.5 Juggle Downspike",
      "Underbird Nod-Off, Bird Nod-Off, Spike",
      "Airplane, 1.5 Swap Late Kenflip Spike",
      "Gooncircle Juggle Spike",
      "Inward Lunar Rover, In",
      "Two Turn, Tap Juggle Spike",
      "Airplane, One Turn Swap Downspike Fast",
      "Swing Spike, UFO Whirlwind",
      "Airplane, Tap Swap Throw In",
      "GS Spike, Loaded Revolver, GS Spike",
      "Airplane, 1.5 to LH, Flip Tap LH, 1.5 in",
    ],
  },
  {
    name: "BATB 2021 Open (Top 8)",
    id: "batb-2021-1-open-t8",
    tricks: [
      "Candlestick, LH, Candlestick, Trade Spike",
      "Stunt Plane, ET to Penguin FH Ken Grip Spike",
      "LH, Reg Insta Inward Insta Reg LH, In",
      "Lunar, Juggle, Ghost Lunar, In",
      "Opposite Hand Airplane, Cushion Tap",
      "Spacewalk One Turn Lunar, Tré Flip, Trade Spike",
      "Hanging Swing Cushion IL, Flip Cushion In",
      "Trip Jumping Stick, Reverse Trip Jumping Stick",
      "Handle Stall, Ring Stall, Bird, Nightingale, In",
      "Juggle Candle Juggle Spike",
      "Bird Juggle Bird, Spike",
      "Sweets Special, Opposite Hand Spike",
      "LH, Inward Flip, Inward Toss LH, Inward Falling In",
      "Inward Lunar Backflip, Tap Juggle Spike",
      "Stilt Monkey Tap, Downspike ",
    ],
  },
  {
    name: "NAKO 2020 Beginner",
    id: "nako-2020-1-beginner",
    tricks: [
      "Candlestick",
      "Bottom Cup ",
      "Trapeze",
      "Big Cup",
      "Moshikame x5",
      "Frying Pan Spike ",
      "Big Cup Bungee Bug Cup",
      "Big Cup Orbit Big Cup",
      "Easy Spike - Earth Turn ",
      "Spike, Flying Top, Spike ",
      "Around Japan",
      "Airplane",
      "Spike (No Spin)",
      "Baseball",
      "Small cup",
    ],
  },
  {
    name: "NAKO 2020 Intermediate",
    id: "nako-2020-1-intermediate",
    tricks: [
      "Bird - Spike ",
      "Downspike",
      "Lighthouse Falling In",
      "Around The World",
      "One Turn Airplane ",
      "Stuntplane",
      "Swing Spike - Inward Earth",
      "Big Cup, Knee Bounce, Bottom Cup, Spike",
      "Airplane UFO",
      "Opposite Hand Airplane",
      "Around the Block (candle stick grip)",
      "Airplane Jumping Stick",
      "Hanging Spike",
      "Big cup, Double Orbit to big cup, Spike",
      "Moshikame x10",
    ],
  },
  {
    name: "NAKO 2020 Advanced",
    id: "nako-2020-1-advanced",
    tricks: [
      "Handle Stall - Spike",
      "C-Whip - Airplane",
      "Lunar - In",
      "Spike - Whirlwind",
      "Airplane - Inward J Stick - Reg J Stick",
      "Stunt Plane Fast Hands",
      "Bird Over Valley - Spike",
      "Lighthouse - Lighthouse Flip - In",
      "Juggle to Big Cup - Spike",
      "Spike - Earth - Inward Earth",
      "Stilt - In",
      "Spacewalk",
      "Around Europe - Earth Turn",
      "Base Cup - Downspike Fast Hands (Sara grip)",
      "Moon Circle to Spike",
    ],
  },
  {
    name: "NAKO 2020 AM Open",
    id: "nako-2020-1-openam",
    tricks: [
      "Inward Lunar Flip - In",
      "Around the USA",
      "Gunslinger - Earth Turn",
      "Handlestall, Spike",
      "Hanging Airplane",
      "Opposite Hand Underbird",
      "Airplane Dub Inward J Stick",
      "Airplane Tap Airplane",
      "1 Turn Lighthouse - Inward Lighthouse flip - Reg Lighthouse flip - Tradespike",
      "Stilt Flip - In",
      "Juggle Spike",
      "Around Downspike (Sara Grip)",
      "Lightning Drop Tradespike",
      "Double Gunslinger",
      "Lunar Tre",
      "Kenflip Bottom Cup - 1.5 Flip to Lighthouse - Flip Trade Spike",
      "Sweets Special",
      "Around Underbird",
      "Dub Inward Whirlwind",
      "Double Stuntplane flip ",
      "Candle Grip Underbird - Flip Over Valley - Trade Ken Grip Spike",
    ],
  },
  {
    name: "NAKO 2020 Open (Level 1)",
    id: "nako-2020-1-open-l1",
    tricks: [
      "Airplane 2-Tap Airplane",
      "Kenflip Underbird - Kenflip Spike",
      "Spacewalk to Lunar - Trade Downspike",
      "Hanging Lighthouse - Insta Lighthouse Flip - Tradespike",
      "Hanging Penguin Spike",
      "Lunar Flip - REVERSE HOP to small cup - Inward Lunar Flip - In",
      "Juggle to Bird",
      "Inward Double J Stick",
      "Juggle late Kenflip Spike",
      "Inward Lunar Barrell Roll",
      "Hippie Flip to Lighty - In",
    ],
  },
  {
    name: "NAKO 2020 Open (Level 2)",
    id: "nako-2020-1-open-l2",
    tricks: [
      "Switch Inward Lunar Flip - Flip In",
      "Turn Table - Reverse Turn Table - In",
      "Double Ken Flip Handlestall",
      "Airplane 1.5 Trade Throw to Airplane",
      "Double Stuntplane Flip",
      "2 turn in - insta double j stick",
      "Triple Gunslinger",
      "Lighthouse - Insta inward lighthouse flip, insta inward, insta inward - Inward falling in",
      "Inward lunar - Regular throw Inward toss Inward Lunar",
      "Sweets Special Juggle Spike",
      "2 Turn up, 2 Turn throw to airplane",
      "1.5 airplane - 1.5 lighthouse - 1.5 falling in - 1.5 tradespike",
    ],
  },
  {
    name: "NAKO 2020 Open (Level 3)",
    id: "nako-2020-1-open-l3",
    tricks: [
      "Handle Stall - Ring - Spike Fast Hands",
      "Dub kenflip - Juggle - Dub kenflip - Juggle - Dub kenflip - Jug  Spike",
      "Dub Tap - Juggle - Dub Tap Juggle Spike",
      "Triple - Double - Single Lunar Flip",
      "Inward Stilt Tap Full Flip Inward Stilt",
      "Goon Throw Lighty Insta Trade Downspike",
      "1 turn tap jug tap jug tap jug. spike",
      "Stuntplane Tap Fasthands",
      "Candle Dub kenflip Jug Candle dub throw to airplane",
      "Double Lunar Tre",
    ],
  },
  {
    name: "NAKO 2020 Girls Open",
    id: "nako-2020-1-open-girls",
    tricks: [
      "Lightning Drop Tradespike",
      "One Turn Lunar - Lunar Flip - In",
      "Lighthouse- Inward Lighty Flip - Tradespike",
      "Double Whirlwind (Reg or Inward)",
      "Bird Over Valley - Spike - Earth Turn",
      "Airplane - Double Jumping Stick",
      "One Turn Airplane, 1.5 Swap Spike",
      "Around USA",
      "Opposite Hand Bird",
      "Double Gunslinger",
      "Inward Lunar - Inward Lunar Flip - Tradespike",
      "Candle, Kenflip Candle, Downspike",
      "Stunt Plane Flip",
      "Juggle to Spike",
      "Airplane, Double Tap Airplane",
      "Stilt, Trade Downspike",
      "Big cup, Turntable Kenflip Spike",
      "Lunar, 180 Lunar Rover to Inward Lunar - Spike",
      "Cliff Hanger Flip, in",
      "Around Underbird",
    ],
  },
];

export default comps;
