import React, { useState, useEffect } from 'react';
import { Champion, ChampionSpell } from '../types/champData';

interface Props {
    championName: string;
    spellIndex: number;
}

const ChampionSpellInfo: React.FC<Props> = ({ championName, spellIndex }) => {
    const [champion, setChampion] = useState<Champion | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        import(`../assets/champion/${championName}.json`)
            .then((module) => {

                const champData = module.default.data[championName];
                if (champData) {
                    setChampion({
                        name: champData.name,
                        spells: champData.spells // Assuming this matches your ChampionSpell[] structure
                    });
                } else {
                    console.error(`Champion data for ${championName} not found`);
                }
            })
            .catch((err) => {
                console.error(err);
                alert(`Failed to load data for champion: ${championName}`);
            })
            .finally(() => setLoading(false));
    }, [championName]);

    if (loading) {
        return <div>Loading champion data...</div>;
    }
    
    if (!champion) {
        return <div>Champion data not found.</div>;
    }

    if (!champion.spells || champion.spells.length === 0 || spellIndex < 0 || spellIndex >= champion.spells.length) {
        return <div>Spell data not found.</div>;
    }
    
    const spell = champion.spells[spellIndex];
    return (
        <div>
            <h2>{spell.name} Information</h2>
            <p><strong>Description:</strong> {spell.description}</p>
            <p><strong>Cooldown:</strong> {spell.cooldownBurn}</p>
            <p><strong>Cost:</strong> {spell.costBurn} {spell.costType}</p>
        </div>
    );
};

export default ChampionSpellInfo;