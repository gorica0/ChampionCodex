export interface ChampionSpell {
    name: string;
    description: string;
    cooldownBurn: string;
    costBurn: string;
    costType: string;
}

export interface Champion {
    name: string;
    spells: ChampionSpell[];
}