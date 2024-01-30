/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Paladin, called "Oath of the Hammer"
				This was made by Middle Finger of Vecna (Mage Hand Press) and can be found on their website (https://magehandpress.com/2016/04/hammer-of-moradin.html)
	Code by:	MorePurpleMoreBetter
	Date:		2019-01-30 (sheet v13.0.0beta16)

	Please support the creators of this content (Middle Finger of Vecna) on their Patreon (https://www.patreon.com/mfov) or through their webstore (https://store.magehandpress.com/collections/all)
*/

var iFileName = "Voldari01.js";
RequiredSheetVersion(13);

SourceList["SOV"] = {
	name : "Seas of Voldari",
	abbreviation : "SOV",
	group : "Tribality",
	url : "https://www.tribality.com/our-campaigns/seas-of-vodari/",
	date : "2023/01/23"
};

AddSubClass("barbarian","buccaneer",{
	regExpSearch : /buccaneer/i,
	subname : "Path of the Buccaneer",
	source : [["SOV",128]],
	features : {
		"subclassfeature3" : {
			name : "Board",
			source : [["SOV",126]],
			minlevel : 3,
			description : desc(["My profiency bonus is doubled for Strength (Athletics) ability checks made to swim",
			                    "Further, I have a climbing and swimming speed equal to my walking speed, and have advantage on Dexterity (Stealth) ability checks made while climbing and swimming"
			])		
		},
		"subclassfeature3.1" : {
			name : "Invade",
			source : [["SOV",126]],
			minlevel : 3,
			description : desc(["I can choose to shove an enemy as a reaction when I enter a rage",
								"While raging I can choose to shove an enemy as a bonus action",
								"When I succesfully shove a foe, I deal my strength mod in bludgeoning damage and can choose to immediately move into the area they occupied without spending movement"
			]),
			action : [["reaction", "shove (enter rage)"],
			          ["bonus action", "shove (while raging)"]
			]
		},
		"subclassfeature6" : {
			name : "Pillage",
			source : [["SOV",126]],
			minlevel : 6,
			description : desc(["I can dash as a reaction when entering rage",
								"While raging I can dash as a bonus action",
								"Additionally, when an ally within 5ft of you succesfully hits a creature, you can attack that same creature as a reaction"
							]),
			action : [["reaction", "Dash (enter rage)"],
			          ["reaction", "attack (see pillage)"],
			          ["bonus action", "Dash (while raging)"]]
		},
		"subclassfeature10" : {
			name : "Capture",
			source : [["SOV",126]],
			minlevel : 10,
			description : desc(["Advantage on all grappling checks while holding at least 6 ft of rope in one hand",
								"Additionally, as long as I have at least 6 ft of rope in one hand, creatures I am grappling are blinded and don't automatically succeed on escaping my grapple due to their size.",
								"Creatures that are immune to the blinded condition instead have disadvantage on attack rolls"
			])
		},
		"subclassfeature14" : {
			name : "Plunder",
			source : [["SOV",126]],
			minlevel : 14,
			description : desc(["Any time a creature within 5ft of me gains disadvantage on an attack roll while I am raging, I can make an attack with advantage against that creature as a reacion",
								"I can do so even if I have already used my reaction this turn. Can be used number of times equal to 1 + Str mod, but never more than once per turn",
								"I regain all expended uses when finishing a long rest"
			]),
			recovery : "long rest",
			usages : "1+Str mod per ",
			usagescalc : "event.value = 1 + What('Str Mod');",
			action : [["reaction", "attack (see plunder)"]]
		}
	}
});

AddSubClass("bard","college of nature",{
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*nature).*$/i,
	subname : "College of Nature",
	source : [["SOV",128]],
	features : {
		"subclassfeature3.1" : {
			name : "Bonus Proficiencies",
			source : [["SOV", 126]],
			minlevel : 3,
			description : desc(["When you join the College of the Nature at 3rd level, you gain proficiency in two skills of your choice selected from Animal Handling, Nature, and Survival.",
								"In addition, you gain proficiency with the herbalism kit."]),
			skillstxt : "Two from Animal Handling, Nature and Survival",
			toolsProfs : [["Herbalism kit", 1]]
		},
		"subclassfeature3.2" : {
			name : "Natural Focus cantrip",
			source : [["SOV", 126]],
			minlevel : 3,
			description : desc(["you learn one druid cantrip of your choice. This counts as a bard cantrip for you"]),
			spellcastingBonus : {
				name : "Natural focus druid cantrip",
				"class" : "druid",
				level : [0, 0]
			}
		},
		"subclassfeature3.3" : {
			name : "Natural Focus environment",
			source : [["SOV", 126]],
			minlevel : 3,
			description : desc(["You gain a natural focus, a specific environment that you feel a connection with.  Use 'Choose Feature' button"]),
			choices : ["Arctic", "Coast", "Desert", "Forest", "Grassland", "Mountain", "Swamp"],
			"arctic" : {
				name : "Arctic natural focus environment",
				description	: desc(["Frozen wastelands are a second home to you. You have resistance to cold damage, and slick ice is not difficult terrain for you."]),
				dmgres : ["Cold"]
			},
            "coast" : {
				name : "Coast natural focus environment",
				description	: desc(["You are as comfortable on land as in the water. You have a swimming speed of 30 feet, and you can breathe air and water."]),
				speed : { swim : {spd: 30, enc: 20} }
			},
			"desert" : {
				name : "Desert natural focus environment",
				description	: desc(["The blazing sun and blistering heat of the desert is a comfort. You have resistance to fire damage and you require only half a gallon of water per day."]),
				dmgres : ["Fire"]
			},
			"forest" : {
				name : "Forest natural focus environment",
				description	: desc(["You feel at home high in the tallest trees. You have a climbing speed of 30 feet. Also, you have advantage on Dexterity (Stealth) checks while in a forest environment. "]),
				speed : { climb : {spd: 30, enc:20}}
			},
			"grassland" : {
				name : "Grassland natural focus environment",
				description	: desc(["The vast grasslands have taught you to travel quickly and quietly. Your speed increases by 5 feet while you are not wearing heavy armor. Also, you have advantage on Dexterity (Stealth) checks while in a grassland environment."])
			},
			"mountain" : {
				name : "Mountain natural focus environment",
				description	: desc(["The storming skies high above the mountains bring you calm and peace. You have resistance to lightning damage. Also, you’re acclimated to high altitude, including elevations above 20,000 feet."]),
				dmgres : ["Lightning"]
			},
			"swamp" : {
				name : "Swamp natural focus environment",
				description	: desc(["You enjoy spending time in thick, foggy swamps. You have resistance to poison damage and can ignore difficult terrain while in a swamp environment."]),
				dmgres : ["Poison"]
			},
		},
		"subclassfeature6.1" : {
			name : "Environmental Magical Secrets druid/ranger spells",
			description : desc(["whenever you learn a new bard spell, you may instead choose a spell from the druid or ranger spell list. A spell you choose must be of a level you can cast, as shown on the Bard table, and the spell must be of 1st level or higher."]),
			source : [["SOV", 127]],
			minlevel : 6,
			spellcastingList : {
				// TODO fix this shit, doesn't work for some reason
				"class" : ["bard", "druid", "ranger"]
			}
		},
		"subclassfeature6.2" : {
			name : "Environmental Magical Secrets spells",
			description : desc(["Additional spells gained from the natural focus feature at level 3 (Choose again in menu!)"]),
			//TODO make it dependent on L3 choice automatically
			source : [["SOV", 127]],
			minlevel : 6,
			choices : ["Arctic", "Coast", "Desert", "Forest", "Grassland", "Mountain", "Swamp"],
			"arctic" : {
				name : "Environmental Magical Secrets: arctic",
				spellcastingBonus : {
					name : "Environmental Magical Secrets: arctic",
					spells : ["hold person", "sleet storm"],
					selection : ["hold person", "sleet storm"],
					times : 2
				}
			},
			"coast" : {
				name : "Environmental Magical Secrets: coast",
				spellcastingBonus : {
					name : "Environmental Magical Secrets: coast",
					spells : ["misty step", "call lightning"],
					selection : ["misty step", "call lightning"],
					times : 2
				}
			},
			"desert" : {
				name : "Environmental Magical Secrets: desert",
				spellcastingBonus : {
					name : "Environmental Magical Secrets: desert",
					spells : ["scorching ray", "wind wall"],
					selection : ["scorching ray", "wind wall"],
					times : 2 
				}
			},
			"forest" : {
				name : "Environmental Magical Secrets: forest",
				spellcastingBonus : {
					name : "Environmental Magical Secrets: forest",
					spells : ["barkskin", "conjure animals"],
					selection : ["barkskin", "conjure animals"],
					times : 2 
				}
			},
			"grassland" : {
				name : "Environmental Magical Secrets: grassland",
				spellcastingBonus : {
					name : "Environmental Magical Secrets: grassland",
					spells : ["pass without a trace", "wind wall"],
					selection : ["pass without a trace", "wind wall"],
					times : 2
				}
			},
			"mountain" : {
				name : "Environmental Magical Secrets: mountain",
				spellcastingBonus : {
					name : "Environmental Magical Secrets: mountain",
					spells : ["spider climb", "meld into stone"],
					selection : ["spider climb", "meld into stone"],
					times : 2
				}
			},
			"swamp" : {
				name : "Environmental Magical Secrets: swamp",
				spellcastingBonus : {
					name : "Environmental Magical Secrets: swamp",
					spells : ["spider climb", "meld into stone"],
					selection : ["spider climb", "meld into stone"],
					times : 2
				}
			}
		},
		"subclassfeature14" : {
			name : "Natural inspiration",
			description : desc(["A creature that uses a Bardic Inspiration die from you when rolling an ability check, attack roll, or saving throw ignores any disadvantage to that roll, in addition to adding the Bardic Inspiration die to the result."]),
			source : [["SOV", 127]],
			minlevel : 14,
		}
	}
});

