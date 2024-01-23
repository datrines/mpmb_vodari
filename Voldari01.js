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

SourceList["Voldari"] = {
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
			source : [["SOV",128]],
			minlevel : 3,
			description : desc(["My profiency bonus is doubled for Strength (Athletics) ability checks made to swim",
			                    "Further, I have a climbing and swimming speed equal to my walking speed, and have advantage on Dexterity (Stealth) ability checks made while climbing and swimming"
			])		
		},
		"subclassfeature3.1" : {
			name : "Invade",
			source : [["SOV",128]],
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
			source : [["SOV",128]],
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
			source : [["SOV",128]],
			minlevel : 10,
			description : desc(["Advantage on all grappling checks while holding at least 6 ft of rope in one hand",
								"Additionally, as long as I have at least 6 ft of rope in one hand, creatures I am grappling are blinded and don't automatically succeed on escaping my grapple due to their size.",
								"Creatures that are immune to the blinded condition instead have disadvantage on attack rolls"
			])
		},
		"subclassfeature14" : {
			name : "Plunder",
			source : [["SOV",128]],
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

