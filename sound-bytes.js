const conspiracy = [
	'./alex-jones-sound-effects/conspiracy/goblins.mp3',
	'./alex-jones-sound-effects/conspiracy/communists.mp3',
	'./alex-jones-sound-effects/conspiracy/completely-normal.mp3',
	'./alex-jones-sound-effects/conspiracy/destroyer.mp3',
	'./alex-jones-sound-effects/conspiracy/foil-hat.mp3',
	'./alex-jones-sound-effects/conspiracy/repent.mp3',
	'./alex-jones-sound-effects/conspiracy/pig-demon.mp3',
	'./alex-jones-sound-effects/conspiracy/scientologist.mp3',
	'./alex-jones-sound-effects/conspiracy/screw-you-alex.mp3',
	'./alex-jones-sound-effects/conspiracy/social-engineered.mp3',
	'./alex-jones-sound-effects/conspiracy/spirit-of-justice.mp3',
	'./alex-jones-sound-effects/conspiracy/tazer.mp3',
	'./alex-jones-sound-effects/conspiracy/testing-dog-poop.mp3'
];
const gay = [
	'./alex-jones-sound-effects/gay/gay-frogs.mp3',
	'./alex-jones-sound-effects/gay/gay-porn.mp3',
	'./alex-jones-sound-effects/gay/identity-issues.mp3',
	'./alex-jones-sound-effects/gay/mommy-spider.mp3',
	'./alex-jones-sound-effects/gay/moustaches.mp3',
	'./alex-jones-sound-effects/gay/no-vagina.mp3',
	'./alex-jones-sound-effects/gay/raise.mp3',
	'./alex-jones-sound-effects/gay/two-men-having-baby.mp3',
	'./alex-jones-sound-effects/gay/what-you-think-you-are.mp3',
	'./alex-jones-sound-effects/gay/tranny.mp3',
	'./alex-jones-sound-effects/gay/woman-can-be-a-man.mp3'
];
const insult = [
	'./alex-jones-sound-effects/insult/go-home-kill-yourself.mp3',
	'./alex-jones-sound-effects/insult/go-to-hell.mp3',
	'./alex-jones-sound-effects/insult/bench-press.mp3',
	'./alex-jones-sound-effects/insult/nuclear-war.mp3',
	'./alex-jones-sound-effects/insult/piece-of-stinkin-filth.mp3',
	'./alex-jones-sound-effects/insult/problem-jackass.mp3',
	'./alex-jones-sound-effects/insult/raaahh.mp3',
	'./alex-jones-sound-effects/insult/insult.mp3',
	'./alex-jones-sound-effects/insult/shut-up-bitch.mp3',
	'./alex-jones-sound-effects/insult/sit-down-shut-up.mp3',
	'./alex-jones-sound-effects/insult/smash-your-teeth-in.mp3',
	'./alex-jones-sound-effects/insult/uuaarrgghh.mp3',
	'./alex-jones-sound-effects/insult/you-wicked-devil.mp3'
];
const racist = [
	'./alex-jones-sound-effects/racist/good-white.mp3',
	'./alex-jones-sound-effects/racist/mexican-babies.mp3',
	'./alex-jones-sound-effects/racist/springer-spaniel.mp3',
	'./alex-jones-sound-effects/racist/white-filth.mp3'
];
const zany = [
	'./alex-jones-sound-effects/zany/sleeves.mp3',
	'./alex-jones-sound-effects/zany/kill-kids.mp3',
	'./alex-jones-sound-effects/zany/out-of-control.mp3',
	'./alex-jones-sound-effects/zany/sweet-to-babies.mp3',
	'./alex-jones-sound-effects/zany/private-island.mp3',
	'./alex-jones-sound-effects/zany/forever.mp3',
	'./alex-jones-sound-effects/zany/signed-sheryl.mp3',
	'./alex-jones-sound-effects/zany/destroy-the-child.mp3',
	'./alex-jones-sound-effects/zany/ice-cream.mp3'
];

const randomNoRepeats = category => {
	let copyArray = [...category];
	return function() {
		if (copyArray.length < 1) {
			copyArray = category.slice(0);
		}
		let index = Math.floor(Math.random() * copyArray.length);
		let item = copyArray[index];
		copyArray.splice(index, 1);
		return item;
	};
};

let insultChooser = randomNoRepeats(insult);
let conspiracyChooser = randomNoRepeats(conspiracy);
let racistChooser = randomNoRepeats(racist);
let gayChooser = randomNoRepeats(gay);
let zanyChooser = randomNoRepeats(zany);

module.exports = {
	insultChooser,
	conspiracyChooser,
	racistChooser,
	gayChooser,
	zanyChooser
};
