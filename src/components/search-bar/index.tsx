import { Autocomplete, Stack, TextField } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import { useAppSelector } from '../../utils/hook';
import { selectAssets } from '../../store/slice/assets';

const SearchBar = () => {
    const navigate = useNavigate();
    const assets = useAppSelector(selectAssets);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                value={selectedItem}
                onChange={(_e: SyntheticEvent, value: string | null) => {
                    navigate(`/single/${value}`);
                    setSelectedItem(null);
                }}
                renderInput={(params) => (
                    <TextField {...params} label="Поиск" />
                )}
                options={assets.map((elem) => elem?.name)}
            />
        </Stack>
    );
};

export default SearchBar;
