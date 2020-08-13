function Character (hp, mp, weapon){
    this.hp = hp
    this.mp = mp
    this.weapon = weapon
}

function Wizard (hp, mp, weapon, element, summonname){
    Character.call(this, hp,mp,weapon)
    this.element = element
    this.summonname = summonname
}

function Soldier (hp, mp, weapon, rank, bannername){
    Character.call(this, hp,mp,weapon)
    this.rank = rank
    this.bannername = bannername
}

function Assassin (hp, mp, weapon, stealth, poison){
    Character.call(this, hp,mp,weapon)
    this.stealth = stealth
    this.poison = poison
}

const question = [
    {
        type: 'list',
        name: 'character class',
        message: 'Choose your character class!',
        choices: [
            "Wizard",
            "Soldier",
            "Assassin"
        ]
    },
    
]

