import { Autocomplete, Stack, TextField } from '@mui/material';
import { useAppSelector } from '../../utils/hook';
import { selectAssets } from '../../store/slice/assets';

const SearchBar = () => {
    const assets = useAppSelector(selectAssets);
    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} label="Поиск" />
                )}
                options={assets.map((elem) => elem?.name)}
            />
        </Stack>
    );
};

export default SearchBar;
