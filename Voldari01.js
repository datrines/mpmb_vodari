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


	Index:
	SECTION 1 - Class updates
	SECTION 2 - Weapon updates
	SECTION 3 - Spell updates

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

// SECTION 1 - Class updates
ClassList["cleric"].features["Vodari option"] = {
	name: "Vodari starting equipment" ,
	description : desc(["You can choose to substitute the following starting equipment:",
						"a light crossbow and 20 bolts in exchange for a light pistol, 20 lead balls, and powder flask"])
};

ClassList["fighter"].features["Vodari option"] = {
	name: "Vodari starting equipment" ,
	description : desc(["You can choose to substitute the following starting equipment:",
						"\u2022 chain mail in exchange for a breastplate",
						"\u2022 a light crossbow and 20 bolts in exchange for a light pistol, 20 lead balls, and powder flask"])
};

// SECTION 2 - Weapon updates

WeaponsList["culverin"] = {
	regExpSearch : /culverin/i,
	name : "Culverin",
	source : ["SOV", 133],
	list : "ranged",
	ability : 1,  // 1==str
	type : "hand cannon",
	damage : [2, 6, "bludgeoning"],
	range : "150/300",
	ammo : "cannonballs",
	weight : 50,
	description : "Heavy, loading, loud, misfire, two-handed",
	tooltip: ["Loud, If a creature is within 300 feet of you when you make the attack, that creature has advantage on Wisdom (Perception) checks against you, and you have disadvantage on Dexterity (Stealth) checks until the start of your next turn.",
	"Misfire, When you roll a natural 1 on an attack roll with a hand cannon, it becomes fouled. A fouled hand cannon can’t be used to attack again until you use your action to clean the weapon"],
	abilitytodamage : true
};

WeaponsList["greatculverin"] = {
	regExpSearch : /greatculverin/i,
	name : "Greatculverin",
	source : ["SOV", 133],
	list : "ranged",
	ability : 1,  // 1==str
	type : "hand cannon",
	damage : [2, 8, "bludgeoning"],
	range : "250/750",
	ammo : "cannonballs",
	weight : 60,
	description : "Heavy, loading, loud, misfire, two-handed",
	tooltip: ["Loud, If a creature is within 300 feet of you when you make the attack, that creature has advantage on Wisdom (Perception) checks against you, and you have disadvantage on Dexterity (Stealth) checks until the start of your next turn.",
	"Misfire, When you roll a natural 1 on an attack roll with a hand cannon, it becomes fouled. A fouled hand cannon can’t be used to attack again until you use your action to clean the weapon"],
	abilitytodamage : true
};

// SECTION 3 - Spell updates

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
			source : [["SOV", 130]],
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
			source : [["SOV", 131]],
			action : ["bonus action", "knock prone (crushing pressure)"],
			recovery : "long rest",
			usages : "Wis mod per ",
			usagescalc : "event.value = What('Wis Mod');"
		},
		"subclassfeature6" : {
			name : "Pearl-Diving Charm",
			minlevel : 6,
			source : [["SOV", 131]],
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
			source : [["SOV", 131]],
			description : desc(["you gain blindsight out to a range of 60 feet. Furthermore, you can communicate telepathically with any creature you can see within 120 feet. You don’t need to share a language with the creature for it to understand your telepathic messages, but the creature must be able to speak at least one language."]),
			vision : [["Blindsight", 60]]
		},
		"subclassfeature14" : {
			name : "Pearl-Diving Charm enhanced",
			minlevel : 14,
			source : [["SOV", 130]],
			description : desc(["Pearl-Diving Charm feature increases depth to 14,000 feet. When you cast water breathing, the spell can’t be dispelled by anyone other than you."])
		},
		"subclassfeature14.1" : {
			name : "Davy Jones' Locker",
			minlevel : 14,
			source : [["SOV", 131]],
			description : desc(["when you knock a creature prone with your Crushing Pressure feature, you can also force the target to roll a Constitution saving throw against your spellcasting DC. On a failed saving throw, the target suffers 5d10 cold damage and is restrained for 1 minute; on a success, it suffers half damage and is not restrained. At the end of each of its turns, the target can attempt a new saving throw; on a success, it is no longer restrained. You can use this feature once, and regain the use of it when you finish a long rest.",
			"Furthermore, you regain all expended uses of Crushing Pressure when you finish a short or long rest."]),
			recovery : "long rest"
			// TODO find a way to update the field of crushing pressure recovery
		}
	}
});

AddSubClass("fighter", "cannoneer",{
	regExpSearch : /cannoneer/i,
	subname : "Cannoneer",
	source : [["SOV", 132]],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["SOV", 132]],
			minlevel : 3,
			description	: desc(["you gain proficiency with hand cannons. In addition, you gain proficiency with smith’s tools, or another artisan tool of your choice if you are already proficient with smith’s tools"]),
			weaponProfs : [true, true, ["hand cannon"]],
			toolProfs : ["smith’s tools, or another artisan tool if you are already proficient with smith’s tools", 1]
		},
		"subclassfeature3.1" : {
			name : "Culverin",
			minlevel : 3,
			source : [["SOV", 132]],
			description : desc(["you have learned to craft a hand cannon called a culverin. You are assumed to have been collecting materials and working on your culverin for quite some time, finishing it during a short or long rest after you reach 3rd level. When you create your culverin, you start with a supply of 10 small cannonballs.",
			"\u2022 Culverin uses Strength modifier for ranged attack and ranged damage rolls",
			"\u2022 Culverin fires small cannonballs (or other ammunition which will change the damage properties). To fire this weapon requires ¼ pound of gunpowder.",
			"\u2022 You can use any hand cannon as a two-handed melee weapon with which you are proficient, which does 1d10 bludgeoning damage.",
			"\u2022 You can ignore the heavy and loading property of your culverin. In addition, being within 5 feet of a hostile creature doesn’t impose disadvantage on ranged  attack rolls with your culverin.",
			"\u2022 You can create a culverin over the course of two days of work (eight hours each day) by expending 100 gp worth of metal and other raw materials. You can maintain up to two working hand cannons at a time."
		]),
		// todo get the save dc in somewhere
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ( (/culverin/i).test(v.WeaponTextName) ) {
						fields.Description += ( (fields.Description ? '; ' : '') + 'melee as 1d10 bludgeoning');
					}
				}
			]
		}
		},
		"subclassfeature3.2": {
			name : "Munitions Maker",
			minlevel : 3,
			source : [["SOV", 132]],
			description: desc(["with access to your smith’s tools and an open flame (or equal source of heat), you can create the following weapons and ammunition over the course of a workday (eight hours):",
			"\u2022 Cannonball. When you expend 25sp worth of metal (such as iron), you can create 20 small cannonballs",
			"\u2022 Grenado. When you expend 25sp worth of metal (such as iron), you can create 5 grenados",
			"\u2022 Stinkpot. When you expend 25sp worth of clay, you can create 10 stinkpots"])
		},
		"subclassfeature10" : {
			name : "Culverin update",
			minlevel : 10,
			source : [["SOV", 132]],
			description : desc(["you can create a greatculverin over the course of three days of work (eight hours each day) by expending 200 gp worth of metal and other raw materials."])
		},
		"subclassfeature7": {
			name : "Heavy Modification",
			minlevel : 7,
			source : [["SOV", 133]],
			description : desc(["When you gain this feature, you learn two Heavy Modification options of your choice."]),
			extraname : "Heavy Modification",
			extrachoices : ["Breaker", "Critical", "Destructive", "Far", "Heavy-Duty", "Knockback", "Reliable", "Spinning", "True"],
			extraTimes : levels.map(function (n) {
				return n < 7 ? 0 : n < 10 ? 2 : n < 15 ? 3 : n < 18 ? 4 : 5;
			}),
			"breaker" : {
				name : "Breaker",
				description : desc("When making ranged attacks with your culverin using any ammunition, you ignore damage thresholds up to 15hp"),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							 if ( (/culverin/i).test(v.WeaponTextName) ) {
								fields.Description += ( (fields.Description ? '; ' : '') + 'ignore dmg trshld/15hp');
							}
						}
					]
				}
			},
			"critical" : {
				name : "Critical",
				description : desc("When making ranged attacks with your culverin using cannonballs, you score a critical hit on a roll of 19-20."),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							 if ( (/culverin/i).test(v.WeaponTextName) ) {
								fields.Description += ( (fields.Description ? '; ' : '') + 'crit19-20');
							}
						}
					]
				}
			},
			"destructive" : {
				name : "Destructive",
				description : desc("When making ranged attacks with your culverin using cannonballs, roll the damage dice for this weapon twice, using the higher result."),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							 if ( (/culverin/i).test(v.WeaponTextName) ) {
								fields.Description += ( (fields.Description ? '; ' : '') + 'dmg roll adv');
							}
						}
					]
				}
			},
			"far" : {
				name : "Far",
				description : desc("When making ranged attacks with your culverin using cannonballs, you double both the normal and long range of your weapon."),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if ( (/greatculverin/i).test(v.WeaponTextName) ) {
								fields.Range = "500/1500";
							}
							else if ( (/culverin/i).test(v.WeaponTextName) ) {
								fields.Range = "300/600";
							}
						}
					]
				}
			},
			"heavy-duty" : {
				name : "Heavy-Duty",
				description : desc("When making melee attacks with your culverin, you increase the damage dice to 2d6 bludgeoning"),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							 if ( (/culverin/i).test(v.WeaponTextName) ) {
								fields.Description = fields.Description.replace('melee as 1d10 bludgeoning', 'melee as 2d6 bludgeoning');
							}
						}
					]
				}
			},
			"knockback" : {
				name : "Knockback",
				description : desc("When you make a ranged attack with your culverin using cannonballs that hits, your target is pushed back 10 feet."),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if ( (/culverin/i).test(v.WeaponTextName) ) {
								fields.Description += ( (fields.Description ? '; ' : '') + 'on hit pushed 10ft');
							}
						}
					]
				}
			},
			"reliable" : {
				name : "Reliable",
				description : desc("When making a ranged attack roll with your culverin and you roll a natural 1, you can ignore the misfire property."),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if ( (/culverin/i).test(v.WeaponTextName) ) {
								fields.Description = fields.Description.replace(/(,? ?misfire|misfire,? ?)/i, '');
							}
						}
					]
				}
			},
			"spinning" : {
				name : "Spinning",
				description : desc("When making ranged attacks with your culverin using cannonballs, add +2 to your attack roll."),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if ( (/culverin/i).test(v.WeaponTextName) ) {
								fields.Description += ( (fields.Description ? '; ' : '') + '+2 atk/cannonballs');
							}
						}
					]
				}
			},
			"true" : {
				name : "True",
				description : desc("When making ranged attacks with your culverin using any ammunition, you can ignore half cover, and treat three-quarter cover as half cover.")
			}
		},
		"subclassfeature10.1" : {
			name : "Pyrotechnics",
			minlevel : 10,
			source : [["SOV", 133]],
			description : desc(["When you use 1/16th of a pound of gunpowder and a makeshift fuse, you can attempt one of the following:",
"\u2022 Destroy Lock. You can use gunpowder and your smith’s tools to destroy a lock. You use your smith’s tools proficiency to pick a lock, making the roll with advantage and causing a thunderous boom audible out to 100 feet. On a success, the lock is destroyed.",
"\u2022 Destroy Trap. If a mechanism for a trap is detected, you can use your smith’s tools to destroy a trap. You use your proficiency in smith’s tools to disarm a trap, making the roll with advantage and causing a thunderous boom audible out to 100 feet. On a success, the trap is destroyed.",
"\u2022 Fireworks. As an action, you create a firework. At the start of your next turn, a dazzling display of light, color, and sound is generated. Each creature within 5 feet of the fireworks must succeed on a Constitution saving throw (equal to 8 + your proficiency bonus) or become blinded until the end of your next turn. In addition, the fireworks persist for 1 minute, are audible out to 150 feet, and can be seen from 300 feet.",
"\u2022 Smoke. As an action, you create a device that gives off smoke. At the start of your next turn, thick black smoke spreads out from you in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.",
"\u2022 Timed Distraction. As an action, you create a noise maker that begins making noise after 1 minute. Small explosions create noise audible from 300 feet away, which lasts for 30 seconds."]),
			recovery : "short rest"
		},
		"subclassfeature15" : {
			name : "Advanced Ammunition",
			minlevel : 15,
			source : [["SOV", 133]],
			description : desc(["with access to your smith’s tools, you can create the following ammunition over the course of a day of work (eight hours):",
		"\u2022 Explosive Canister. When you expend 10 gp worth of metal and gunpowder, you can create 2 canisters filled with gunpowder.",
		"\u2022 Flashbang Canister. When you expend 10 gp worth of metal and other materials, you can create 2 flashbang canisters.",
		"\u2022 Scattershot Canister. When you expend 5 gp worth of metal and other materials, you can create 2 canisters filled with musket balls.",
		"\u2022 Silvered Shot. When you expend 5 gp worth of silver metal or silver coins, you can create 2 silvered cannonballs."])
		},
		"subclassfeature18" : {
			name : "Powder Blast",
			minlevel  : 18,
			source : [["SOV", 133]],
			description : desc(["As an action, you load your culverin with 2 pounds of gunpowder and fire a 30-foot-cone blast. Each creature in that area makes a Dexterity saving throw, taking full damage on a failed saving throw, or half as much damage on a success. To determine damage, roll 6d6 fire damage, then keep rolling an additional 1d6 fire damage until you roll a 1 on a die. These additional damage dice can’t be re-rolled under any condition. If your final dice total is greater than 40 fire damage, your culverin also backfires and you must make a Dexterity saving throw or take 3d6 fire damage."]),
			action : [["action", "Powder Blast"]]
		}
	}
});

AddSubClass("fighter", "corsair",{
	regExpSearch : /corsair/i,
	subname : "Corsair",
	source : [["SOV", 134]],
	features: {
		"subclassfeature3" : {
			name : "Breath of Fortana",
			source : [["SOV", 134]],
			minlevel : 3,
			description: desc([
			"\u2022 Fortana Dice. You have two Fortana dice, which are d6s, and are expended when you use them. You regain expended Fortana dice when you finish a short or long rest. You gain one additional die each time you master additional tradewinds, at 7th, 10th, and 15th levels. ",
			"\u2022 Fickle Fate. When you roll a 6 on a Fortana die, you can choose to roll the die again, adding the combined result to any feature that allows you to roll Fortana die. You can continue to do so as long as you keep rolling a 6. However, if you roll a 1 after rolling a 6, you expend the die and add nothing to your result instead.",
			"\u2022 Tradewinds. You harness one of the tradewinds of Fortana and work its fickle nature into your fighting. Choose a tradewind to master. You master another tradewind at 7th, 10th, and 15th level."]),
			extraname : "Tradewinds",
			extrachoices : ["Tradewind of the North", "Tradewind of the South", "Tradewind of the East", "Tradewind of the West"],
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 1 : n < 10 ? 2 : n < 15 ? 3 : 4;
			}),
			"tradewind of the north" : {
				name : "Tradewind of the North",
				description : desc(["Versatile weapons are finesse weapons for you, and you deal additional damage equal to the lower of your Strength or Dexterity ability modifier (minimum of 1) when you use them with two hands. You can expend a Fortana die when you deal damage with a versatile weapon and add the result to the damage. Additionally, whenever you would be forced to move, you reduce the amount of forced movement by 5 feet."])
			},
			"tradewind of the south" : {
				name : "Tradewind of the South",
				description : desc(["Loading and reach weapons increase their damage die by one size when you wield them with one hand. You can expend a Fortana die when you deal damage with a loading or reach weapon and add the result to the damage. Additionally, the first 15 feet of difficult terrain you move through each turn costs you no extra movement."])
			},
			"tradewind of the east" : {
				name : "Tradewind of the East",
				description : desc(["When you make an attack with a light or thrown weapon, you can add the lower of your Strength or Dexterity ability modifier (minimum of 1) to the attack roll. Additionally, your speed increases by 5 feet, and you can expend a Fortana die and add the result to your AC until the start of your next turn whenever you use the Disengage action."])
			},
			"tradewind of the west" : {
				name : "Tradewind of the West",
				description : desc(["You can use the Help action as a bonus action immediately after you use the Attack action. Additionally, you can give the creature you Help a Fortana die to use with their choice of their next attack roll or damage roll before the start of your next turn. The die is expended even if they do not use it."])
			}
		},
		"subclassfeature3.1" : {
			name : "Windward & Leeward",
			source : [["SOV", 134]],
			description: desc(["While you are not wearing heavy armor, you can expend a Fortana die to Dash or Disengage as a bonus action.",
			"While unarmored or wearing light armor, as a reaction when a creature makes a weapon attack against you, you can expend a Fortana die and add the result to your AC for that attack. You can also move up to 15 feet in a direction of your choice without provoking opportunity attacks.",
			"While wearing medium armor, as a reaction to being hit with a weapon attack, you can expend a Fortana die to reduce the damage from the triggering attack by that amount, and you may move up to 5 feet in a direction of your choice without provoking opportunity attacks.",
			"Further, you doff and don light and medium armor in half of the normal time."]),
			action : [
				["bonus action", "Dash/Disengage (heavy armored)"],
				["reaction", "Add Fortana Die to AC (light armor)"],
				["reaction", "Reduce damage (medium armor)"]
			]
		},
		"subclassfeature7" : {
			name : "Fair Winds",
			source : [["SOV", 134]],
			description : desc(["You gain proficiency in your choice of gaming sets, and have advantage on Wisdom (Insight) ability checks made while playing dice or cards.",
			"While unarmored, or wearing light or medium armor, you can reroll any d20 roll that results in a 1 on a Dexterity (Stealth), Dexterity (Acrobatics), or Strength (Athletics) ability checks, but you must take the second result. If you make the check while standing on anything that is floating on water, or while you are in the water, you can reroll results of 1, 2, or 3."]),
			toolProfs : [["Gaming set", 1]]
		},
		"subclassfeature10" : {
			name : "Winds of Change",
			source : [["SOV", 135]],
			description : desc(["After using your Second Wind feature, attack rolls against you that would have advantage instead have disadvantage, and attack rolls and saving throws you make that would have disadvantage instead have advantage. This lasts until the end of your next turn."])
		},
		"subclassfeature15" :  {
			name : "Wind in the Sails",
			source : [["SOV", 135]],
			description : desc(["When you use your Indomitable feature, you gain temporary hit points equal to twice your Constitution ability modifier."])
		},
		"subclassfeature18" : {
			name : "Master of Four Winds",
			source : [["SOV", 135]],
			description : desc(["Each time you expend a Fortana die, you can treat the first result of a 1 on the die as a 6."])
		}
	}
});
