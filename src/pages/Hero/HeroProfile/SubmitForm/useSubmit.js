import { useSelector } from 'react-redux';
import { useState, useCallback } from 'react';

function useSubmit(heroId, skillPoints) {
    const skill = useSelector((state) => state.hero[heroId].skill);
    const [finish, setFinish] = useState(true);

    const handleSubmit = useCallback(() => {
        if (skillPoints != 0) return;
        setFinish(false);

        fetch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(skill),
            mode: 'cors',
        })
            .then((res) => res.json())
            .then(() => {
                setFinish(true);
            })
            .catch((e) => console.log('錯誤:', e));
    }, [skillPoints, heroId, skill, setFinish]);

    return { finish, handleSubmit };
}

export default useSubmit;
