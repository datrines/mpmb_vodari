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

ClassList["cleric"].features["Vodari option"] = {
	name: "Vodari starting equipment" ,
	description : desc(["You can choose to substitute the following starting equipment:",
						"a light crossbow and 20 bolts in exchange for a light pistol, 20 lead balls, and powder flask"])
 };
 
SpellsList["spirit slash"] = {
	name : "Spirit Slash",
	classes : ["cleric"],
	source : [["SOV", 129]],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 round",
	description : "Spirit companion makes melee Atk against creature/5ft of it using your spell atk bns. On hit, 1d6 slash-dmg. Next time the target rolls saving throw subtract 1d4",
	descriptionShorter: "Spirit companion melee within 5ft; 1d6 slash dmg; next save subtract 1d4",
	descriptionFull : "When you cast this spell, your spirit companion makes a melee weapon attack against a creature within 5 feet of it using your spell attack bonus. On a hit, it deals 1d6 slashing damage. Whether the attack hits or misses, the next time the target rolls a saving throw before the end of your next turn, it must roll a d4 and subtract the number rolled from the result. At Higher Levels. The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6),and 17th level (4d6)."
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
	source : [["SOV",126]],
	features : {
		"subclassfeature3.1" : {
			name : "Bonus Proficiencies",
			source : [["SOV", 126]],
			minlevel : 3,
			description : desc(["When you join the College of the Nature at 3rd level, you gain proficiency in two skills of your choice selected from Animal Handling, Nature, and Survival.",
								"In addition, you gain proficiency with the herbalism kit."]),
			skillstxt : "Two from Animal Handling, Nature and Survival",
			toolProfs : [["Herbalism kit", 1]]
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

AddSubClass("bard", "college of shanties",{
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*shanties).*$/i,
	subname : "College of Shanties",
	source : [["SOV",128]],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["SOV", 128]],
			minlevel : 3,
			description : desc(["You gain proficiency with two skills of your choice. In addition, you gain proficiency with your choice of vehicles (land), vehicles (water), or one type of artisan’s tools."]),
			skillstxt: "Two skills of your choice",
			toolProfs: [["vehicles(land), vehicles(water), or one type of artisan's tools", 1]]
		},
		"subclassfeature3.1" : {
			name : "Spellcasting Focus",
			source : [["SOV", 128]],
			minlevel : 3,
			description : desc(["Starting at 3rd level, you can use your singing voice as a spellcasting focus for your bard spells."])
		},
		"subclassfeature3.2" : {
			name : "Song of Work",
			source : [["SOV", 128]],
			minlevel : 3,
			description : desc(["If you sing for at least 1 minute, you can bolster the focus of your allies. When you do so, choose a number of creatures up to your Charisma modifier (minimum 1) within 60 feet that can hear you. These creatures gain advantage on any ability check they make while you maintain concentration on this ability for up to 1 hour. The effect of the song ends early if you are incapacitated or if you voluntarily end it (no action required)."]),
			recovery: "short rest"
		},
		"subclassfeature6" : {
			name : "Duet",
			source : [["SOV", 128]],
			minlevel : 6,
			description : desc(["Whenever you cast a bard spell of 1st level or higher that has a verbal component, you can expend one use of your Bardic Inspiration to sing a Duet with a creature that is within 60 feet, can hear you, and can speak. As a reaction, that creature can make a weapon attack and add the number rolled on the Bardic Inspiration die to the attack roll."])
		},
		"subclassfeature14" : {
			name : "Song of Camaraderie",
			source : [["SOV", 128]],
			minlevel : 14,
			description : desc(["When you have at least two allies within 5 feet of you, you can use a bonus action and expend one use of your Bardic Inspiration to lead a Song of Camaraderie. When you do so, choose a number of creatures that can hear you within 30 feet, up to a number equal to your Charisma modifier (minimum of one). These creatures each gain temporary hit points equal to the number rolled on the Bardic Inspiration die + your Charisma modifier.",
								"In addition, creatures of your choice within 5 feet of you gain advantage on their next ability check, attack roll, or saving throw before the start of your next turn."]),
			action : [["bonus action", "Song of Camaraderie"]]
		}
	}
});

AddSubClass("cleric", "spirit domain",{
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*spirit).*$/i,
	subname : "Spirit Domain",
	source : [["SOV",129]],
	spellcastingExtra : ["false life", "unseen servant", "augury", "spiritual weapon", "animate dead", "spirit guardians", "confusion", "faithful hound", "animate objects", "dream"],
	features : {
		"subclassfeature1" : {
			name : "Priest of the People",
			source : [["SOV",129]],
			minlevel : 1,
			description : desc(["you gain proficiency with the herbalism kit, and gain the spirit slash cantrip. You also gain proficiency in one of the following skills of your choice: History, Nature, or Survival."]),
			skillstxt : "One of History, Nature or Survival",
			toolProfs : [["Herbalism kit", 1]],
			spellcastingBonus : {
				name : "Priest of the people",
				spells : ["spirit slash"],
				selection : ["spirit slash"],
				firstCol : 'atwill'
			}
		},
		"subclassfeature1.1" : {
			name : "Spirit Companion",
			source : [["SOV",129]],
			minlevel : 1,
			// TODO figure out how to add companion rules
		}
	}
	//TODO this subclass is cumbersome -> maybe some other day
});

AddSubClass("druid", "circle of the deeps",{
	regExpSearch : /^(?=.*(druid|shaman))(?=.*deeps).*$/i,
	subname : "Circle of the Deeps",
	source : [["SOV", 130]],
	features: {
		"subclassfeature2" : {
			name : "Oceanborn",
			minlevel : 2,
			description : desc(["You have resistance to cold damage, you have a swimming speed equal to your walking speed, and you can breathe water. If you normally breathe water, you gain the ability to breathe air instead, and you gain a walking speed equal to your swimming",
								"You can withstand pressure to a depth of 1,000 feet per druid level",
							    "When using Wild Shape feature, you can transform into the shape of a beast with a swimming speed. Starting at 8th level, you can choose the shape of a beast with a swimming speed and a challenge rating of up to 2.",
							    "With noises and gestures, you can communicate simple ideas with Small or smaller beasts that have a swimming speed."]),
			dmgres : ["Cold"],
			speed : { swim : { spd : "walk", enc: "-10"}}
		},
		"subclassfeature2.1" : {
			name : "Crushing Pressure",
			description : desc(["When you hit a Large or smaller creature within 120 feet with a spell attack or a creature fails a saving throw against a spell you cast, you can spend your bonus action to knock the target prone, and its speed is halved until the beginning of your next turn."]),
			minlevel : 2,
			action : ["bonus action", "knock prone (crushing pressure)"],
			recovery : "long rest",
			usages : "Wis mod per ",
			usagescalc : "event.value = What('Wis Mod');"
		},
		"subclassfeature6" : {
			name : "Pearl-Diving Charm",
			minlevel : 6,
			description : desc(["You gain water breathing as an additional prepared spell. Creatures affected by a water breathing spell that you cast also gain resistance to cold damage, a swimming speed equal to their walking speed, and the ability to withstand pressure to a depth of 6,000 feet."]),
			spellcastingBonus : {
				name : "Pearl-Diving Charm",
				spells : ["water breathing"],
				selection : ["water breathing"],
				firstCol : 'oncelr'
			}
		},
		"subclassfeature10" : {
			name : "Where Eyeless Things Dwell",
			minlevel : 10,
			description : desc(["you gain blindsight out to a range of 60 feet. Furthermore, you can communicate telepathically with any creature you can see within 120 feet. You don’t need to share a language with the creature for it to understand your telepathic messages, but the creature must be able to speak at least one language."]),
			vision : [["Blindsight", 60]]
		},
		"subclassfeature14" : {
			name : "Pearl-Diving Charm enhanced",
			minlevel : 14,
			description : desc(["Pearl-Diving Charm feature increases depth to 14,000 feet. When you cast water breathing, the spell can’t be dispelled by anyone other than you."])
		},
		"subclassfeature14.1" : {
			name : "Davy Jones' Locker",
			minlevel : 14,
			description : desc(["when you knock a creature prone with your Crushing Pressure feature, you can also force the target to roll a Constitution saving throw against your spellcasting DC. On a failed saving throw, the target suffers 5d10 cold damage and is restrained for 1 minute; on a success, it suffers half damage and is not restrained. At the end of each of its turns, the target can attempt a new saving throw; on a success, it is no longer restrained. You can use this feature once, and regain the use of it when you finish a long rest.",
			"Furthermore, you regain all expended uses of Crushing Pressure when you finish a short or long rest."]),
			recovery : "long rest"
		}
	}
});